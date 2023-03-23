const header = document.querySelector('.header');

export const appHeader = async () => {
  const request = await fetch('https://api.tvmaze.com/search/shows?q=adventure');
  const response = await request.json();
  const data = Array.from(response);
  const counter = data.length;

  // Generating number of moviez to navigation bar
  header.innerHTML = `<div class="col-2" id="logo" href="index.html">
        <img src="https://png.pngtree.com/template/20200713/ourmid/pngtree-modern-movie-studio-logo-image_391602.jpg" alt="logo"></div>
        <div class="col-3"><a href="index.html">Moviez(${counter})</a></div>
        <div class="col-3">Planets</div>
        <div class="col-3">Races</div>`;
};

export default appHeader;