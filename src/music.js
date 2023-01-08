const musicBtn = document.querySelector(".music");

let isPlaying = false;
let audio = new Audio("../music/telephone_number.mp3");

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

musicBtn.addEventListener("click",playMusic);