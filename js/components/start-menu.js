class StartMenu extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<div class="modal fade" id="start" tabindex="-1" aria-labelledby="startLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-2" id="startLabel">Start Menu</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
          <div class="row">
            <div class="col-6 px-2">
              <img src="images/pixels/strovi_pixel_2.gif" style="max-width: 210px;">
            </div>
          <div class="col-6">
          <div class="row justify-content-between">
            <div class="col">
            <p><a href="index.html">Home</a></p>
            <p><a href="about.html">About</a></p>
            <p><a href="gallery.html">Gallery</a></p>
            <p><a href="commissions.html">Commissions</a></p>
            <p><a href="code.html">Code</a></p>
            <p><a href="blog.html">Blog</a></p>
            <p><a href="links.html">Links</a></p>
            <p><a href="https://nenrikido.123guestbook.com/">Guestbook</a></p>
            </div>
              <div class="col-auto">
            <p><i class="fa-solid fa-chevron-right"></i></p>
            <p><i class="fa-solid fa-chevron-right"></i></p>
            <p><i class="fa-solid fa-chevron-right"></i></p>
            <p><i class="fa-solid fa-chevron-right"></i></p>
            <p><i class="fa-solid fa-chevron-right"></i></p>
            <p><i class="fa-solid fa-chevron-right"></i></p>
            <p><i class="fa-solid fa-chevron-right"></i></p>
            <p><i class="fa-solid fa-chevron-right"></i></p>
              </div>
              </div>
              </div>
            </div>
          </div>
        <div class="modal-footer"> 
        <div class="row">      
            <div class="col">
            <button id="pink" class="btn-start-pink theme-button" onclick="handleThemeButtonClick('pink', this)"  title="pink">💗</button>
                 </div>
              <div class="col">
               <button id="blue" class="btn-start-blue theme-button" onclick="handleThemeButtonClick('blue', this)"  title="blue">🫧</button>
              </div>
              <div class="col">
              <button id="yellow" class="btn-start-yellow theme-button" onclick="handleThemeButtonClick('yellow', this)"  title="yellow">🪐</button>
               </div>
               <div class="col">
               <button id="black" class="btn-start-black theme-button" onclick="handleThemeButtonClick('black', this)"  title="black">💤</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
    }
}

window.customElements.define('start-menu', StartMenu)