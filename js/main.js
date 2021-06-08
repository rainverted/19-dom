const lentaDOM = document.querySelector('.lenta');
const namuRezultatasDOM = lentaDOM.querySelector('[data-komanda="namu"]');
const sveciuRezultatasDOM = lentaDOM.querySelector('[data-komanda="sveciu"]');

const aiksteleDOM = document.querySelector('.aikstele');
const namuKomandaDOM = aiksteleDOM.querySelector('[data-komanda="namu"]');
const namuTaskaiDOM = namuKomandaDOM.querySelectorAll('button');

const sveciuKomandaDOM = aiksteleDOM.querySelector('[data-komanda="sveciu"]');
const sveciuTaskaiDOM = sveciuKomandaDOM.querySelectorAll('button');

let namuKomandosTaskai = 0;


for (let i = 0; i < namuTaskaiDOM.length; i++) {
    const button = namuTaskaiDOM[i];

    button.addEventListener('click', () => {
        namuKomandosTaskai += i + 1;
        namuRezultatasDOM.innerText = namuKomandosTaskai;
    })

}

let sveciuKomandosTaskai = 0;

for (let i = 0; i < sveciuTaskaiDOM.length; i++) {
    const button = sveciuTaskaiDOM[i];

    button.addEventListener('click', () => {
        sveciuKomandosTaskai += i + 1;
        sveciuRezultatasDOM.innerText = sveciuKomandosTaskai;
    })

}

/*
Alternative way when for is used for both arrays:

let namuRezultatas = 0;
let sveciuRezultatas = 0;

for (let i = 0; i < 3; i++) {
    namuTaskaiDOM[i].addEventListener('click', () => {
        namuRezultatas += i + 1;
        namuRezultatasDOM.innerText = namuRezultatas;
    })

    sveciuTaskaiDOM[i].addEventListener('click', () => {
        sveciuRezultatas += i + 1;
        sveciuRezultatasDOM.innerText = sveciuRezultatas;
    })
}


*/






