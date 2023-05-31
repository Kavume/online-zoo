const elem = document.querySelectorAll('.amount-scale__circle');

const amount = document.querySelector('#input-number');
amount.addEventListener('input', e => e.target.value = e.target.value.match(/^([^e+-]{0,4})/)[0])

for(let i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', setAmount)
}

function setAmount(event){
    let newValue = event.target.value;
    console.log(newValue)
    let currentActive = document.querySelector('.scale__price.active');
    if(currentActive){
        currentActive.classList.remove('active')
    }
    let price = document.querySelector(`.scale__price.f${newValue}`);
    price.classList.add('active');

    amount.value = newValue;
}


amount.addEventListener('input', checkNum)
function checkNum(event) {
    let controlNum = document.querySelector(`.scale__price.f${event.target.value}`);
    let currentActive = document.querySelector('.scale__price.active');
    let numChecked = document.querySelector('.amount-scale__circle:checked');

    if(numChecked) {
        numChecked.checked = false;
    }

    let inputNum = document.querySelector(`#f${event.target.value}`)
    if(inputNum) {
        inputNum.checked = true;
    }
    if(currentActive){
        currentActive.classList.remove('active')
    }

    if(controlNum){
        controlNum.classList.add('active')
    }
    console.log(event.target.value)
}
