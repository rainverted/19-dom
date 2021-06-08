const customerInputDOM = document.querySelector('#customer');
const sriubaDOM = document.querySelector('#sriuba');
const patiekalasDOM = document.querySelector('#patiekalas');
const desertasDOM = document.querySelector('#desertas');
const gerimaiDOM = document.querySelectorAll('input[name="gerimas"]');
const orderDOM = document.querySelector('.order');
const buttonDOM = document.querySelector('button');



buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();

    const vardas = customerInputDOM.value.trim();
    const pasirinktasGerimas = kurisPazymetas(gerimaiDOM);
    const sakinioPradzia = vardas ? 'vardu ' + vardas : 'nenudores vardo';
    const sakinioPabaiga = pasirinktasGerimas ? pasirinktasGerimas + ' yra pasirinktas gerimas' : 'gerimo nepasirinko';

    orderDOM.innerText = `Uzsakovas ${sakinioPradzia} ${arNoriu(sriubaDOM)} sriubos, ${arNoriu(pagrindinisPatiekalasDOM)} pagrindinio patiekalo, ${arNoriu(desertasDOM)} deserto ir ${sakinioPabaiga}.`;
});

/*
PRADZIA:
Uzsakovas vardu X nori....
Uzsakovas nenurodes vardo nori....
PABAIGA:
ir X yra pasirinktas gerimas.
ir gerimo nepasirinko.
EXTRA:
Uzsakovas vardu X nori sriubos, pagrindinio patiekalo, deserto ir [gerimas]
Uzsakovas vardu X nori sriubos, pagrindinio patiekalo, bet nenori deserto ir [gerimas]
Uzsakovas vardu X nori sriubos, bet nenori pagrindinio patiekalo, deserto ir [gerimas]
Uzsakovas vardu X nenori sriubos, pagrindinio patiekalo, deserto ir [gerimas]




   /* ALTERNATIVE code


   let selectedValue;
    for (const gerimas of gerimaiDOM) {
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
