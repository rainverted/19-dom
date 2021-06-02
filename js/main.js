/*
Surasti h1 (antraste)
Perreasyti h1 elemento teksta i "Zuikio pomidoru darzas"
Padaryk, jog h1 elementas turetu CSS class "pavadinimas"

Surasti visas darzoves
Kiekvienos darzoves teksta pakeisti i "Pomidoras"
Kiekvienai darzovei suteikti CSS class "pomidoras"
*/

const h1DOM = document.querySelector('h1');
h1DOM.innerText = "Zuikio pomidoru darzas";
h1DOM.classList = "pavadinimas";


const liDOM = document.querySelectorAll('li');
console.log(liDOM);

for (let i = 0; i < liDOM.length; i++) {
    liDOM[i].innerText = "Pomidoras";
    liDOM[i].classList.add('pomidoras');
}


