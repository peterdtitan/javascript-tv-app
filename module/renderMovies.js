import CommentsPopup from './commentPopup';
import initModal from './closeCommentPopUp';
import InvolvementAPI from './likeMovie';

const renderMovies = document.querySelector('#movie-list');

export const exteralApicall = async () => {
  const getData = await fetch('https://api.tvmaze.com/search/shows?q=thriller');
  const request = await getData.json();
  const movieArray = Array.from(request);
  const movieHTML = movieArray.map((item) => `
  <div class="movie-card" id="${item.show.id}">
    <div class="movie-background" style="background-image: url('${item.show.image.medium}'); background-position: center; background-size: cover;">
        <button class="watch-cta">Watch Now</button>
    </div>
    <div class="movie-body">
        <h2 class="movie-title">${item.show.name.length > 20 ? `${item.show.name.slice(0, 20)}...` : item.show.name}</h2>

        <div class="interactions">
          <div class="likes">
            <p class="total-likes" data-show="${item.show.id}"></p>
            <button class="like-btn" id="like-btn" data-show="${item.show.id}">Like</button>
          </div>
          <button class="comment-btn" id="comment-btn" data-show="${item.show.id}">Comments</button>
        </div>
        <p id="movie-description">${item.show.summary.replaceAll('<p>', '').slice(0, 155)}...</p>
    </div>
  </div>
`);
  renderMovies.innerHTML = movieHTML;

  await CommentsPopup.getMovie();
  await InvolvementAPI.likeMovie()

  const totalLikes = document.querySelectorAll('.total-likes');
  totalLikes.forEach(async (like) => {
    const id = like.dataset.show;
    const currentItem = await InvolvementAPI.getLikesByMovie(id);
    like.innerHTML = `${currentItem} likes`;
  });

  initModal();
};

export default exteralApicall;