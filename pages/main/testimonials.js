const elem = document.querySelector('.slider');

function rangeValue(event){
    let newValue = elem.value;
    let target = document.querySelector('.testimonials__cards-wrapper');
    let step;
    // if (elem.max === newValue) {
    if ( window.matchMedia("(min-width: 1220px)").matches ) {
        step = 298
    } else if ( window.matchMedia("(min-width: 1000px)").matches ) {
        step = 323
    }
    target.style.transform = `translateX(-${newValue * step}px)`
}
// rangeValue();

elem.addEventListener("input", rangeValue);
