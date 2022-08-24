let logotypes = [
    {
        label: 'Pyszne.pl',
        link: '/',
        img: './images/pyszne.png'
    }, {
        label: 'DeliGoo',
        link: '/',
        img: './images/deligoo.png'
    }, {
        label: 'Glovo',
        link: '/',
        img: './images/glovo.png'
    },  {
        label: 'UberEats',
        link: '/',
        img: './images/ubereats.png'
    },  {
        label: 'BoltFood',
        link: '/',
        img: './images/bolt.png'

    }
]

let logosBox = document.querySelector('.logotypes');

logotypes.forEach((item) => {

    const logoIcon =  document.createElement('img')
    logoIcon.setAttribute('src', item.img);
    logoIcon.setAttribute('alt', item.label)

    const logoLink = document.createElement('a');
    logoLink.setAttribute('href', item.link);
    logoLink.appendChild(logoIcon);

    const logotype = document.createElement('div');
    logotype.classList.add("logotype");
    logotype.appendChild(logoLink);

    logosBox.appendChild(logotype);
});
