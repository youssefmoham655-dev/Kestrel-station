let audio = new Audio('horror.mp3');
audio.loop = true;

var loader = document.getElementById('preloader');
const modal = document.getElementById('sound-modal');
const enablebutton = document.getElementById('enable-sound-btn');
const dismissbutton = document.getElementById('dismiss-sound-btn');
const toggleSoundfun = document.getElementById('sound-toggle');
// el loading code
window.addEventListener('load', function(){
    loader.style.display = 'none';
    modal.style.display = 'flex';
});
enablebutton.addEventListener("click", () => {
    audio.play().catch(error => {
        console.log("error", error);
    });
    hideModal()
});
dismissbutton.addEventListener("click", () => {
    hideModal()
});
function hideModal() {
    modal.style.display = "none";
}
function toggleSound() {
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
}
toggleSoundfun.addEventListener('change', function() {
    console.log("done", this.checked);
    
    if (this.checked) {
        audio.play().catch(e => console.log("jdd", e));
    } else {
        audio.pause();
    }
});
const toggleButton = document.getElementById('darkmode-toggle')
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('darkmode')
})
const overlaydiv = document.getElementById('black_overlay');
toggleButton.addEventListener('click', () => {
    if (overlaydiv.style.display === 'none'){
        overlaydiv.style.display = 'block';
        toggleButton.textContent = 'hide div';
    }
    else {
        overlaydiv.style.display = 'none';
        toggleButton.textContent = 'restore div';
    }
});