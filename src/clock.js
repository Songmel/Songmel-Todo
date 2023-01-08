const clock = document.querySelector(".clock");

function gettingClock() {
    const date = new Date();
    clock.innerText = `${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`;
}

gettingClock();
setInterval(gettingClock, 1000);