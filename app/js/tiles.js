let tiles = [
    {
        title: 'Zestaw dla 3 osób',
        subtitle: 'Razem smakuje lepiej! Zamów zestawy obiadowy dla 3 osób <br /> już od <span class="highlight highlight-dark"> 39 zł</span> ',
        link: '/',
        img: './images/box1.png',
        btn: 'Zamów online'
    }, {
        title: 'UberEats ',
        subtitle: 'Zamawiaj w aplikacji <span class="highlight highlight-red">10% taniej</span>. Pobierz aplikację UberEats już dziś.',
        addImages: [
            {
                addImage: './images/icons/google.svg'
            }, {
                addImage: './images/icons/app-store.svg'
            }, {
                addImage: './images/icons/huawei.svg'
            }

        ],
        link: '/',
        img: './images/box2.png',
        btn: 'Zamów online'
    }
]

const tilesBox = document.querySelector('.tiles');

tiles.forEach((item) => {
    const tileTitle = document.createElement('div');
    tileTitle.classList.add('tile-title');
    tileTitle.innerText = item.title;

    const tileSub = document.createElement('div');
    tileSub.classList.add('tile-subtitle', 'paragraph');
    tileSub.innerHTML = item.subtitle;

    const tileBtn = document.createElement('button');
    tileBtn.classList.add('button', 'button-red');
    tileBtn.innerText = item.btn

    const tileText = document.createElement('div');
    tileText.classList.add('tile-text');
    tileText.appendChild(tileTitle);
    tileText.appendChild(tileSub);

    tileText.appendChild(tileBtn);

    const tileLink = document.createElement('a');
    tileLink.setAttribute('href', item.link)
    tileLink.classList.add('tile-link');
    tileLink.appendChild(tileText);

    const tileBox = document.createElement('div');
    tileBox.classList.add('tile');
    tileBox.appendChild(tileLink);
    tileBox.style.backgroundImage = `url(${item.img})`;

    if (item.addImages) {
        const tileInfo = document.createElement('div');
        tileInfo.classList.add('tile-icons');
        tileSub.appendChild(tileInfo);

        item.addImages.forEach((el) => {
            const tileInfoIcon = document.createElement('img');
            tileInfoIcon.setAttribute('src', el.addImage);
            tileInfoIcon.classList.add('tile-icon');
            tileInfo.appendChild(tileInfoIcon);

        });
    }

    tilesBox.appendChild(tileBox);
});
