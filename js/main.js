const customerInputDOM = document.querySelector('#customer');
const sriubaDOM = document.querySelector('#sriuba');
const patiekalasDOM = document.querySelector('#patiekalas');
const desertasDOM = document.querySelector('#desertas');

const orderDOM = document.querySelector('.order');
const buttonDOM = document.querySelector('button');



buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();

    const gerimasDOM = document.querySelectorAll('input[name="gerimas"]');
    let selectedValue;
    for (const gerimas of gerimasDOM) {
        if (gerimas.checked) {
            selectedValue = gerimas.value;
            break;
        }
    }

    orderDOM.innerText = `Uzsakovas vardu ${customerInputDOM.value} ${checkedItems(sriubaDOM)} sriubos, ${checkedItems(patiekalasDOM)} pagrindinio patiekalo, ${checkedItems(desertasDOM)} deserto ir ${selectedValue} yra pasirinktas gerimas.`;


});

function checkedItems(item) {

    if (item.checked) {
        return "nori";
    }
    return "nenori";

}





