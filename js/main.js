//1 Dalis
const optionDOM = document.querySelector('.option');
const buttonDOM = document.querySelector('button');
const inputDOM = document.getElementById('board');
//2 dalis
const boardDOM = document.querySelector('.board')

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();
    const n = parseInt(inputDOM.value);    //parseInt() pavercia stringa -> number
    optionDOM.innerText = n + 'x' + n;
    //sukurta funkcija ikeliama buttonDOM, kad vikdytu funkcija paspaudus mygtuka
    generateBoard(boardDOM, n);     //(vieta kur funkcija ivykdoma, duotas langeliu skaicius)

})

function generateBoard(DOMelement, size) {
    const elementSize = 100 / size;               // vadiname elementSize - elemento aukstis ir dydis vienodas (kvadratas)

    let cellHTML = '';
    for (let j = 0; j < size; j++) {
        cellHTML += `<div class="cell" style="width: ${elementSize}%;"></div>`
    }

    let rowHTML = '';
    for (let i = 0; i < size; i++) {
        rowHTML += `<div class="row" style="height: ${elementSize}%;">` + cellHTML + `</div>`;       //e.g. style="height:100%;"

    }

    DOMelement.innerHTML = rowHTML;


}


