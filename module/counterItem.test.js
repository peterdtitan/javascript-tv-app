/** @jest-environment jsdom */

import countItems from './counterItem';

document.body.innerHTML = `
<header class="header">
        
    </header>

      <section id="movie-list">  
      </section>
     <div id="comments-modal" class="modal">
            <div class="modal-content">
              <button class="close">&times;</button>
              <div id="comments-container"></div>
            </div>
          </div>
`;
describe('test cases for item counter', () => {
  test('length of items to be 0', () => {
    countItems();

    const moviezNumber = document.querySelectorAll('.movie-card').length;

    expect(moviezNumber).toBe(0);
  });

  test('length of items to be 4', () => {
    countItems();

    const movieList = document.querySelector('#movie-list');
    movieList.innerHTML = `
    <div class="movie-card" id="">
    <div class="movie-background" style="background-image: url(''); background-position: center; background-size: cover;">
        <button class="watch-cta">Watch Now</button>
    </div>
    <div class="movie-body">
        <h2 class="movie-title">/h2>
        <div class="interactions">
          <div class="likes">
            <p class="total-likes" data-show=""></p>
            <button class="like-btn" id="like-btn" data-show="">Like</button>
          </div>
          <button class="comment-btn" id="comment-btn" data-show="">Comments</button>
        </div>
        <p id="movie-description"></p>
    </div>
    </div>
    <div class="movie-card" id="">
<div class="movie-background" style="background-image: url(''); background-position: center; background-size: cover;">
    <button class="watch-cta">Watch Now</button>
</div>
<div class="movie-body">
    <h2 class="movie-title">/h2>
    <div class="interactions">
      <div class="likes">
        <p class="total-likes" data-show=""></p>
        <button class="like-btn" id="like-btn" data-show="">Like</button>
      </div>
      <button class="comment-btn" id="comment-btn" data-show="">Comments</button>
    </div>
    <p id="movie-description"></p>
</div>
</div>
<div class="movie-card" id="">
<div class="movie-background" style="background-image: url(''); background-position: center; background-size: cover;">
    <button class="watch-cta">Watch Now</button>
</div>
<div class="movie-body">
    <h2 class="movie-title">/h2>
    <div class="interactions">
      <div class="likes">
        <p class="total-likes" data-show=""></p>
        <button class="like-btn" id="like-btn" data-show="">Like</button>
      </div>
      <button class="comment-btn" id="comment-btn" data-show="">Comments</button>
    </div>
    <p id="movie-description"></p>
</div>
</div>
<div class="movie-card" id="">
<div class="movie-background" style="background-image: url(''); background-position: center; background-size: cover;">
    <button class="watch-cta">Watch Now</button>
</div>
<div class="movie-body">
    <h2 class="movie-title">/h2>
    <div class="interactions">
      <div class="likes">
        <p class="total-likes" data-show=""></p>
        <button class="like-btn" id="like-btn" data-show="">Like</button>
      </div>
      <button class="comment-btn" id="comment-btn" data-show="">Comments</button>
    </div>
    <p id="movie-description"></p>
</div>
</div>
            `;

    const moviezNumber = document.querySelectorAll('.movie-card').length;

    expect(moviezNumber).toBe(4);
  });
});