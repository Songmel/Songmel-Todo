const background = document.querySelector(".background");

const imgList = [
    "bg_img.png",
    "bg_img_blue.png",
    "bg_img_pink.png",
    "bg_img_green.png"
]

const randomNumbg = Math.floor(Math.random()*imgList.length);

background.src = `img/${imgList[randomNumbg]}`;