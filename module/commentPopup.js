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
                  `;
      });
    });
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