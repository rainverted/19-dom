const input = document.querySelector('input');
const button = document.querySelector('button');
const span = document.querySelector('span');


buttonDOM.addEventListener('click', (event) => {
    event.preventDefault(); // neleidzia puslapiui persikrauti
    spanDOM.innerText = inputDOM.value;
    inputDOM.value = '';
})
