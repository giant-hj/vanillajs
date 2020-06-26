const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNum) {
    const image = new Image();
    image.src = `images/${imgNum + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function getRandom() {
    return Math.floor(Math.random() * IMG_NUMBER);
}

function init() {
    const randNum = getRandom();
    paintImage(randNum);
}

init();