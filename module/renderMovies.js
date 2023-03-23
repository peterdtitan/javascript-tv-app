const renderMovies = document.querySelector('#movies');

export const exteralApicall = async () => {
  const getData = await fetch('https://api.tvmaze.com/search/shows?q=thriller');
  const request = await getData.json();
  const movieArray = Array.from(request);
  const movieHTML = movieArray.map((item) => `
<div class="grid" id="${item.show.id}">
  <div>
    <div class="image">
      <img src="${item.show.image.medium}" alt="img1" width="300px">
    </div>
    <div class="likes" id="name-likes">
      <span>${item.show.name}</span>
    </div>
    <div class="btn">
      <button class="comments-btn" data-show="${item.show.id}">Comments</button>
    </div>
  </div>
</div>
`);
  renderMovies.innerHTML = movieHTML;

  CommentsPopup.getMovie();
};

export default exteralApicall;