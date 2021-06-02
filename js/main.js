/*
Surasti antraste ir prie jos prideti CSS klase, kuri pakeicia teksto spalva i raudona

Surasti visus ingredientus ir kiekvienam prideti klase darzove

*/

const h1DOM = document.querySelector('h1');
h1DOM.classList.add('antraste');

const liDOM = document.querySelectorAll('li');
console.log(liDOM);

for (let i = 0; i < liDOM.length; i++) {
    liDOM[i].classList.add('darzove');
}


