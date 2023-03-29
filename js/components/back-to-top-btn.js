class Top extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<a href="#" id="btn-back-to-top" style="display: none;"><span></span><i class="fa-solid fa-circle-chevron-up"></i></a>
      `;
    }
}

window.customElements.define('back-top', Top)