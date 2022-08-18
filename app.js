const nextBtnEl = document.querySelector(".next");
const prevBtnEl = document.querySelector(".prev");
const imageContainerEl = document.querySelector(".image-container");
const imagesEl = document.querySelectorAll("img");


let currentImg = 1;
let timeOut;


nextBtnEl.addEventListener('click', () => {
    currentImg++;
    clearTimeout(timeOut);
    updateImage();

});


prevBtnEl.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeOut);
    updateImage();
});

updateImage();

function updateImage() {


    if (currentImg > imagesEl.length) {
        currentImg = 1

    } else if (currentImg < 1) { currentImg = imagesEl.length }
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

    timeOut = setTimeout(() => {
        currentImg++;
        updateImage();

    }, 3000);
}