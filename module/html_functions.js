import MovieAPI from './joke_api.js';

const populateMovies = async () => {
  let movies = [];
  
  movies = await MovieAPI.getMovies();

  movies.forEach((movie) => {
    const movieNode = document.createElement('div');
    movieNode.classList.add('movie-card');
    movieNode.innerHTML = `
      <div class="movie-text">
        <p>${movie.name}</p>
        <hr>
      </div>
    `;

    const commentsButton = document.createElement('button');
    commentsButton.innerText = 'Comments';

    movieNode.appendChild(commentsButton);
    document.getElementById('Movies-list').appendChild(movieNode);
  });
};

export default populateMovies;