function generuotiSocials(selector, icons) {
    const iconsDOM = document.querySelector(selector);
    if (selector === '' ||
        typeof selector !== 'string') {
        console.error('ERROR: nerastas elementas');
        return false;
    }

    if (!Array.isArray(icons) ||
        icons.length === []) {
        console.error('ERROR: negali buti tuscias array');
        return false;
    }

    let HTML = '';
    for (let i = 0; i < icons.length; i++) {
        if (typeof icons[i] === 'string' &&
            icons[i] !== '') {
            HTML += `<i class="fa fa-${icons[i]}"></i>`;
            console.log(icons);
        }

    }

    iconsDOM.innerHTML = HTML;
}

const icons = ['facebook', 'twitter', 5, [], '', 'linkedin'];

generuotiSocials('.socials', icons);



/*function generuotiLenta(selector, count) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: nerastas elementas');
        return false;
    }
    if (count < 0 || count % 1 !== 0) {
        console.error('ERROR: skaicius turi buti teigiamas ir sveikasis');
        return false;
    }
    let HTML = '';
    for (let i = 1; i <= count; i++) {
        HTML += `<div>${i}</div>`;
    }
    DOM.innerHTML = HTML;
}
generuotiLenta('.lenta', 8);

*/