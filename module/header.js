const header = document.querySelector('.header');

export const appHeader = async () => {
  // Generating number of moviez to navigation bar
  header.innerHTML = `<div class="col-2" id="logo" href="index.html">
        <img src="https://png.pngtree.com/template/20200713/ourmid/pngtree-modern-movie-studio-logo-image_391602.jpg" alt="logo"></div>
        <div class="header-nav">
          <div class="counter"><a href="index.html"></a></div>
          <div>IMDB</div>
          <div>Downloads</div>
        </div>`;
};

export default appHeader;