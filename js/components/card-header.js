class CardHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<div class="cardsHeader"> 
        <div class="cardsControls">
          <div class="row justify-content-between">
            <div class="col-4">
              <a href="#"><i class="fa-solid fa-arrows-up-down-left-right"></i></a>
              </div>
              <div class="col-auto">
              <a href="#"><i class="fa-solid fa-window-minimize"></i></a>
              <a href="#"><i class="fa-regular fa-window-restore"></i></a>
              <a  href="#"><i class="fa-solid fa-xmark"></i></a></div>
            </div>
          </div>
        </div>
      `;
    }
}

window.customElements.define('card-header', CardHeader)