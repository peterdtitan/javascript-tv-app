const renderMovies = document.querySelector('#movie-list');

export const exteralApicall = async () => {
  const getData = await fetch('https://api.tvmaze.com/search/shows?q=thriller');
  const request = await getData.json();
  const movieArray = Array.from(request);
  const movieHTML = movieArray.map((item) => `
  <div class="movie-card">
    <div class="movie-background" style="background-image: url('${item.show.image.medium}'); background-position: center; background-size: cover;">
        <button class="watch-cta">Watch Now</button>
    </div>
    <div class="movie-body">
        <h2 class="movie-title">${item.show.name.length > 20 ? `${item.show.name.slice(0, 20)} + '...'` : item.show.name}</h2>
        <button id="comment-btn">Comments</button>
        <p id="movie-description">Lorem ipsum sjdfd sfjsjdsksd sdjfdkfsdf dsfjsdf</p>
    </div>
  </div>
`);
  renderMovies.innerHTML = movieHTML;

};

export default exteralApicall;
