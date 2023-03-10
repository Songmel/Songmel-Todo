const musicBtn = document.querySelector(".music");

let isPlaying = false;
let audio = new Audio("https://github.com/Songmel/Songmel-Todo/blob/gh-pages/music/telephone_number.mp3?raw=true");

function playMusic() {
    if(isPlaying) {
        isPlaying = false;
        audio.pause();

        //html
        const oldI = document.querySelector(".music i");
        musicBtn.removeChild(oldI);
        const newI = document.createElement("i")
        newI.className="fa-solid fa-play"
        musicBtn.appendChild(newI);
    } else {
        isPlaying = true;
        audio.play();

        //html
        const oldI = document.querySelector(".music i");
        musicBtn.removeChild(oldI);
        const newI = document.createElement("i")
        newI.className="fa-solid fa-pause"
        musicBtn.appendChild(newI);
    }

}

function isAppLoaded() {
    console.log("ok");
}

audio.addEventListener('canplaythrough', isAppLoaded, false);
musicBtn.addEventListener("click",playMusic);