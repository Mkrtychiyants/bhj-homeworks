const arrowPrev = document.querySelector("div.slider__arrow_prev");
const arrowNext = document.querySelector("div.slider__arrow_next");
let activeSlide = document.querySelector("div.slider__item_active");
const sliderNodeList = document.querySelectorAll("div.slider__item");
const sliderArr = Array.from(sliderNodeList);

const arrLength = sliderArr.length;



function skipToTheRight() {
    let activeSlideIndex = sliderArr.indexOf(activeSlide);
    if (activeSlideIndex === arrLength - 1) {
        activeSlide.classList.remove("slider__item_active");
        activeSlide.parentElement.firstElementChild.classList.add("slider__item_active");
        activeSlide = activeSlide.parentElement.firstElementChild;
    }
    if (activeSlideIndex < arrLength - 1) {
        activeSlide.classList.remove("slider__item_active");
        activeSlide.nextElementSibling.classList.add("slider__item_active");
        activeSlide = activeSlide.nextElementSibling;
    }
}
function skipToTheLeft() {
    let activeSlideIndex = sliderArr.indexOf(activeSlide);
    if (activeSlideIndex === 0) {
        activeSlide.classList.remove("slider__item_active");
        activeSlide.parentElement.lastElementChild.classList.add("slider__item_active");
        activeSlide = activeSlide.parentElement.lastElementChild;
    }
    if (activeSlideIndex > 0) {
        activeSlide.classList.remove("slider__item_active");
        activeSlide.previousElementSibling.classList.add("slider__item_active");
        activeSlide = activeSlide.previousElementSibling;
    }
}

arrowNext.onclick = skipToTheRight;
arrowPrev.onclick = skipToTheLeft;


