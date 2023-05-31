const buttonNext = document.querySelector(".button-next");
const buttonPrev = document.querySelector(".button-previous");

const scroller = document.querySelector('.carousel-wrap');

buttonNext.addEventListener("click", clickNextButton);
buttonPrev.addEventListener("click", clickPrevButton);

let currentIndex = 0;
let currentTransform = 0;
let step;


function clickNextButton(event) {
    if( window.matchMedia("(min-width: 1381px)").matches ) {
        step = 1278;
    } else if ( window.matchMedia("(min-width: 1000px)").matches ) {
        step = 1061;
    } else if ( window.matchMedia("(min-width: 640px)").matches ) {
        step = 760;
    }

    currentTransform -= step
    currentIndex++
    const nextElement = document.querySelector(`.carousel-item[data-index="${currentIndex}"]`)
    if (!nextElement) {
        const preNode = document.querySelector(`.carousel-item[data-index="${currentIndex-1}"]`)

        currentIndex = 0;
        currentTransform = 0;
    }
    scroller.style.transform = `translateX(${currentTransform}px)`

}

function clickPrevButton(event) {
    if( window.matchMedia("(min-width: 1381px)").matches ) {
        step = 1278;
    } else if ( window.matchMedia("(min-width: 1000px)").matches ) {
        step = 1061;
    } else if ( window.matchMedia("(min-width: 640px)").matches ) {
        step = 760;
    }

    currentIndex--;
    currentTransform += step
    const prevElement = document.querySelector(`.carousel-item[data-index="${currentIndex}"]`)
    if (!prevElement) {
        currentIndex = 4;
        currentTransform =- 4*step;
    }

    scroller.style.transform = `translateX(${currentTransform}px)`;

}

