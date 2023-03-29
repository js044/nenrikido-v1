class MiniMusic extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<div class="row justify-content-center">
        <div class="col-8 col-lg-12 py-2">
            <div id='musicplayer'>
                <div id='musicpixel'> <img src="https://dl.dropbox.com/s/eq89xfolt1cgm53/music.gif" style="max-width: 40px;">
                    <div class='overlay'>
                        <div class='playpause'><i class="fas fa-play"></i></div>
                    </div>
                </div>
                <div id='musictitle'> <span class='marquee'> rain sounds</span> </div>
            </div> <audio id='musicsrc' loop src='https://dl.dropbox.com/s/auudd099ed56yrx/soft_rain.mp3'></audio>
        </div>
    </div>
      `;
    }
}

window.customElements.define('mini-music', MiniMusic)