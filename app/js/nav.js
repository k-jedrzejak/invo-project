let categories = [
    {
        name: 'Steaks',
        link: '/'
    }, {
        name: 'Burgers',
        link: '/'
    }, {
        name: 'French fries',
        link: '/'
    }, {
        name: 'Drinks',
        link: '/'
    }, {
        name: 'Gdzie dowozimy?',
        link: '/'
    }, {
        name: 'Kontakt',
        link: '/'
    }
];
    

const menu = document.querySelector('.nav-items');
const navList = document.createElement('ul');
navList.classList.add("nav-list");
menu.appendChild(navList);

categories.forEach((item) => {
        const navLink = document.createElement('a');
        navLink.classList.add('nav-link');
        navLink.setAttribute('href', item.link);
        navLink.innerHTML = item.name;

        const navItem = document.createElement('li');
        navItem.classList.add("nav-item");

        navItem.appendChild(navLink);
        navList.appendChild(navItem);    
});

var burgerBtn = document.querySelector(".js-toggle-menu");
var menuMobile = document.querySelector(".nav-items");

burgerBtn.addEventListener("click",function(){
    burgerBtn.classList.toggle("is_active");
    menuMobile.classList.toggle("is_open");
});
