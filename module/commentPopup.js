export default class CommentsPopup {
  static async getMovie() {
    const commentsBtn = document.querySelectorAll('.comment-btn');
    commentsBtn.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.show;
        const movie = await CommentsPopup.movieId(id);
        const modal = document.getElementById('comments-modal');
        modal.style.display = 'block';
        const modelContainer = document.getElementById('comments-container');

        modelContainer.innerHTML = `
                  <div class="first-row">
                  <img src="${movie.image.original}" width="250px">
                  <h2>Movie Name: ${movie.name}</h2>
                  </div>
                  <div class="row">
                  <p class="margin">Languages: ${movie.language} lang</p>
                  <p>averageTime: ${movie.averageRuntime} min</p>
                  </div>
                  <div class="row">
                  <p>Premiered: ${movie.premiered}</p>
                  <p>Ended: ${movie.ended}</p>
                  </div>
                  <h4>Comments(0)</h4>
                  <div class="comments"></div>
                  <form id="comment-form">
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name">
                  <label for="comment">Comment:</label>
                  <textarea id="comment" name="comment"></textarea>
                  <button type="submit">Submit</button>
                  </form>
                  `;
        const commentForm = document.getElementById('comment-form');
        commentForm.addEventListener('submit', async (event) => {
          event.preventDefault();
          const name = document.getElementById('name').value;
          const comment = document.getElementById('comment').value;

          const uniqueId = 'iyIoaiC1J6eUiPDhXO68';
          const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
          const response = await fetch(`${baseUrl}/apps/${uniqueId}/comments`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              item_id: id,
              username: name,
              comment,
            }),
          });
          if (!response.ok) {
            throw new Error(`Error posting comment: ${response.statusText}`);
          }
          const commentElement = CommentsPopup.createCommentElement(name, comment, 'A few moments ago');
          const comments = document.querySelector('.comments');
          comments.appendChild(commentElement);

          document.getElementById('comment-form').reset();
        });
        const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
        const response = await fetch(`${url}/apps/iyIoaiC1J6eUiPDhXO68/comments?item_id=${id}`);
        let comments = await response.json();
        if (!comments.length) {
          comments = [];
        }
        comments.forEach((comment) => {
          const comments = document.querySelector('.comments');

          const commentElement = CommentsPopup.createCommentElement(comment.username,
            comment.comment, comment.creation_date);
          comments.appendChild(commentElement);
          const counter = document.querySelectorAll('.comment-counter');
          document.querySelector('h4').textContent = `Comments (${counter.length})`;
        });
      });
    });
  }

  static createCommentElement(username, comment, creationDate) {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment-counter';
    commentElement.innerHTML = `${creationDate} <strong>${username}</strong>: ${comment} `;
    return commentElement;
  }

  static async movieId(id) {
    try {
      const request = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const moive = await request.json();
      return moive;
    } catch (error) {
      return error;
    }
  }
}