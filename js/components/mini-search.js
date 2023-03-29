class MiniSearch extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<div class="row justify-content-center">
        <div class="col-8 col-lg-12 py-2">
            <div class="search"> <input type="text" class="searchTerm" placeholder="Search..."> <button type="submit" class="searchButton"> <i class="fa fa-search"></i> </button> </div>
        </div>
    </div>
      `;
    }
}

window.customElements.define('mini-search', MiniSearch)