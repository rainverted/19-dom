/*const logoDOM = document.querySelector('.logo');
const hamburgerDOM = document.querySelector('.hamburger');

console.log(logoDOM);
console.log(hamburgerDOM);

hamburgerDOM.addEventListener('click', () => {
    logoDOM.classList.toggle('big');
}) */

const navDOM = document.querySelector('nav');
const hamburgerDOM = document.querySelector('.hamburger');

hamburgerDOM.addEventListener('click', () => {
    navDOM.classList.toggle('visible');

})
