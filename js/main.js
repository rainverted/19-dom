const customerInputDOM = document.querySelector('#customer');
const sriubaDOM = document.querySelector('#sriuba');
const patiekalasDOM = document.querySelector('#patiekalas');
const desertasDOM = document.querySelector('#desertas');
const gerimasDOM = document.querySelector('#gerimas');
const orderDOM = document.querySelector('.order');
const buttonDOM = document.querySelector('button');



buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();

    if (item.checked) {
        return "nori";
    }
    return "nenori";



    orderDOM.innerText = `Uzsakovas vardu ${customerInputDOM.value} ${sriubaDOM.value} sriubos, ${patiekalasDOM.value} pagrindinio patiekalo, ${desertasDOM.value} deserto ir ${gerimasDOM.value} yra pasirinktas gerimas.`;


});

