class Taskbar extends HTMLElement {
  constructor() {
      super();
      this.innerHTML = `<footer id="footer">
      <ul>
        <li>
          <button type="button" class="btn-primary" data-bs-toggle="modal" data-bs-target="#start">
            START
          </button>
          </li>
        <li> 
        <div id="clock" class="clock" onload="showTime()"></div>
        </li>
      </ul>
    </footer>
    `;
  }
}

window.customElements.define('taskbar-footer', Taskbar)