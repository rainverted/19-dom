let rezultatas = 0;

const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const numberDOM = document.querySelector('.number');
const resetDOM = document.querySelector('.reset');
const h1DOM = document.querySelector('h1');
const ulDOM = document.querySelector('ul');

const gameInProgressMessage = 'Žaidimas progrese';
const initialH1Text = h1DOM.innerText;

ulDOM.innerHTML = `<li>Tu pasileidai zaidima - sekmes!</li>`;


minusDOM.addEventListener('click', () => {
    numberDOM.innerText = --rezultatas;
    h1DOM.innerText = gameInProgressMessage;
})

plusDOM.addEventListener('click', () => {
    numberDOM.innerText = ++rezultatas;
    h1DOM.innerText = gameInProgressMessage;
})

resetDOM.addEventListener('click', () => {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = initialH1Text;
})

numberDOM.addEventListener('click', () => {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = 'Te prasideda zaidynes!🥳';
})





