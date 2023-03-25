const countItems = () => {
  setTimeout(() => {
    const movieNumber = document.querySelectorAll('.movie-card').length;
    const itemCounter = document.querySelector('.counter');
    itemCounter.innerHTML = `Moviez (${movieNumber})`;
    return movieNumber;
  }, 2000);
};

export default countItems;