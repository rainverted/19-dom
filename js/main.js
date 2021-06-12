const boardInputDOM = document.querySelector('input');
const buttonDOM = document.querySelector('button');
const optionDOM = document.querySelector('.option');

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();
    optionDOM.innerText = boardInputDOM.value + 'x' + boardInputDOM.value;

})