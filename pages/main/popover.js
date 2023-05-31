let popover = document.querySelector('#popover');
popover.addEventListener('click', togglePopover)

function togglePopover(event) {
    if (window.matchMedia("(max-width: 999px)").matches) {
        popover.classList.toggle("active")
        console.log("+", event.currentTarget)
        let target = document.querySelector('#popover .testimonial-card')
        popover.removeChild(target)
        console.log("+", target)
        document.body.style.overflowY = 'scroll';
    }
}

function openPopover(event) {
    if (window.matchMedia("(max-width: 999px)").matches) {

        const clone = event.currentTarget.cloneNode(true);
        popover.prepend(clone);

        clone.addEventListener(
            "click",
            function (event) {
                event.stopPropagation();
                event.preventDefault();
            },
            true);

        console.log('click')
        popover.classList.toggle("active");
        document.body.style.overflowY = 'hidden';
    }
}

let cards = document.querySelectorAll('.testimonial-card');
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', openPopover);
}

