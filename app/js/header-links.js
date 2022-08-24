let links = [
    {
        label: 'Moje konto',
        link: '/',
        icon: '<div><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<g id="Group 2">'+
        '<path id="Path_1313" fill-rule="evenodd" clip-rule="evenodd" d="M10.7162 3.8224C10.7162 5.93345 9.05239 7.6448 6.99997 7.6448C4.94756 7.6448 3.28375 5.93345 3.28375 3.8224C3.28375 1.71135 4.94756 0 6.99997 0C9.05239 0 10.7162 1.71135 10.7162 3.8224ZM9.60864 3.8216C9.60864 2.33971 8.4407 1.1384 6.99997 1.1384C6.30811 1.1384 5.64459 1.42109 5.15537 1.92429C4.66615 2.42749 4.39131 3.10997 4.39131 3.8216C4.39131 5.30349 5.55925 6.5048 6.99997 6.5048C8.4407 6.5048 9.60864 5.30349 9.60864 3.8216Z" fill="black"/>'+
        '<path id="Path_1314" d="M1.10833 15.532C1.10833 12.1851 3.74612 9.47197 7 9.47197C10.2539 9.47197 12.8917 12.1851 12.8917 15.532H14C14 11.5555 10.866 8.33197 7 8.33197C3.13401 8.33197 0 11.5555 0 15.532H1.10833Z" fill="black"/>'+
        '</g>'+
        '</svg>'+
        '</div>',
        order: false
    }, {
        label: 'Koszyk',
        link: '/',
        icon: '<div><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<g id="supermarket">'+
        '<path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M5.80023 10.6668H5.79941C5.50923 10.6675 5.27344 10.9064 5.27344 11.2C5.27344 11.494 5.51006 11.7333 5.80078 11.7333H15.3633C15.6546 11.7333 15.8906 11.9721 15.8906 12.2667C15.8906 12.5612 15.6546 12.8 15.3633 12.8H5.80078C4.92847 12.8 4.21875 12.0822 4.21875 11.2C4.21875 10.5435 4.61192 9.97833 5.17236 9.73194L3.26843 1.06667H0.527344C0.236069 1.06667 0 0.827917 0 0.533333C0 0.23875 0.236069 0 0.527344 0H3.69141C3.9386 0 4.15256 0.173611 4.20625 0.417639L4.58322 2.13333H17.4727C17.6381 2.13333 17.794 2.21194 17.8937 2.34556C17.9933 2.47917 18.0251 2.65222 17.9797 2.81319L15.8703 10.2799C15.8056 10.5087 15.5987 10.6667 15.3633 10.6667H5.80229L5.80023 10.6668ZM14.9654 9.6L16.7735 3.2H4.8175L6.22375 9.6H14.9654Z" fill="black"/>'+
        '<path id="Shape_2" fill-rule="evenodd" clip-rule="evenodd" d="M6.85547 16C5.98315 16 5.27344 15.2822 5.27344 14.4C5.27344 13.5178 5.98315 12.8 6.85547 12.8C7.72778 12.8 8.4375 13.5178 8.4375 14.4C8.4375 15.2822 7.72778 16 6.85547 16ZM7.38281 14.4C7.38281 14.106 7.14619 13.8667 6.85547 13.8667C6.56474 13.8667 6.32812 14.106 6.32812 14.4C6.32812 14.694 6.56474 14.9333 6.85547 14.9333C7.14619 14.9333 7.38281 14.694 7.38281 14.4Z" fill="black"/>'+
        '<path id="Shape_3" fill-rule="evenodd" clip-rule="evenodd" d="M14.3086 16C13.4363 16 12.7266 15.2822 12.7266 14.4C12.7266 13.5178 13.4363 12.8 14.3086 12.8C15.1809 12.8 15.8906 13.5178 15.8906 14.4C15.8906 15.2822 15.1809 16 14.3086 16ZM14.8359 14.4C14.8359 14.106 14.5993 13.8667 14.3086 13.8667C14.0179 13.8667 13.7812 14.106 13.7812 14.4C13.7812 14.694 14.0179 14.9333 14.3086 14.9333C14.5993 14.9333 14.8359 14.694 14.8359 14.4Z" fill="black"/>'+
        '</g>'+
        '</svg>'+
        '</div>',
        order: false
    }, {
        label: 'Zamów',
        link: '/',
        icon: '<div><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<g id="Group 5">'+
        '<path id="Path 41" fill-rule="evenodd" clip-rule="evenodd" d="M15 7.86446C15 7.86446 13.9306 8.1344 13.8104 9.28238C13.6902 10.4304 12.6138 11 12.6138 11H7.49899H3.11186C3.11186 11 2.42291 10.9255 2.15418 9.97062C1.88545 9.01577 2.10831 8.25 1 8.16086V7.66669H15V7.86446Z" stroke="white" stroke-width="1.12"/>'+
        '<path id="Path 41 Copy" fill-rule="evenodd" clip-rule="evenodd" d="M15 1.19778C15 1.19778 13.9306 1.46771 13.8104 2.6157C13.6902 3.76368 12.6138 4.33333 12.6138 4.33333H7.49899H3.11186C3.11186 4.33333 2.42291 4.25879 2.15418 3.30393C1.88545 2.34908 2.10831 1.58331 1 1.49417V1H15V1.19778Z" stroke="white" stroke-width="1.12"/>'+
        '</g>'+
        '</svg>'+
        '</div>',
        order: true
    }
]

const headerLinks = document.querySelector('.header-links');

links.forEach((item) => {

    const headerLinkIcon = document.createElement('div');
    headerLinkIcon.classList.add('header-link-icon');
    headerLinkIcon.innerHTML = item.icon;

    const headerLinkLabel = document.createElement('div');
    headerLinkLabel.classList.add('header-link-label');
    headerLinkLabel.innerText = item.label;

    const headerLink =  document.createElement('a');
    headerLink.classList.add('header-link');
    headerLink.setAttribute('href', item.link);
    headerLink.appendChild(headerLinkIcon);
    headerLink.appendChild(headerLinkLabel);

    if (item.order) {
        headerLink.classList.add('order');
    }


    const headerLinkItem = document.createElement('div');
    headerLinkItem.classList.add('header-link-item');
    headerLinkItem.appendChild(headerLink);

    headerLinks.appendChild(headerLinkItem);
});