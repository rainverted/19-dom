function renderSelect(selector, list) {
    //turime susirasti vietas/elemtus
    const DOM = document.querySelector(selector);
    const optionDOM = document.querySelector('.option');
    const buttonDOM = document.querySelector('button');

    //sugeneruojamos select pasirinkimu reiksmes
    let HTML = '';

    for (let i = 0; i < list.length; i++) {
        const animal = list[i];
        HTML += `<option value="${animal}">${animal}</option>`;
    }

    //sukuriamas selectas
    DOM.insertAdjacentHTML('afterend', `<select>${HTML}</select>`);

    //susirandame sukurta selekta
    const selectDOM = document.querySelector('select');

    //paspaudus mygtuka yra ispauzdinama pasirinkta reiksme esanti selekte
    buttonDOM.addEventListener('click', (event) => {
        event.preventDefault();
        optionDOM.innerText = selectDOM.value;
    })


}



const animalList = ["Zuikis", "Barsukas", "Lape", "Vilkas"];
const genreList = ["rock", "pop", "metal"];

renderSelect('label[for="animal"]', animalList);
renderSelect('label[for="genre"]', genreList);