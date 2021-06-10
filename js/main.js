function renderNav(selector, navList) {

    const headerDOM = document.querySelector('header');
    const imgDOM = headerDOM.querySelector('.logo');

    let HTML = '';

    for (const navElement of navList) {
        HTML += `<a href=${navElement.href}>${navElement.title}</a>`;
    }
    //headerDOM.innerHTML = headerDOM.innerHTML + `<nav>${HTML}</nav>`;
    //headerDOM.innerHTML += `<nav>${HTML}</nav>`;
    imgDOM.insertAdjacentHTML("afterend", `<nav>${HTML}</nav>`);
}


const menu = [
    {
        href: '#',
        title: 'Home'
    },
    {
        href: '#',
        title: 'Services'
    },
    {
        href: '#',
        title: 'About us'
    },
    {
        href: '#',
        title: 'Contact us'
    }
];

renderNav('header', menu);
