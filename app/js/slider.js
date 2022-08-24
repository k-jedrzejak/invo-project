let slides = [
  {
    title: '<span class="highlight highlight-dark">Rabat 10%</span> na <br/> pierwsze zamówienie!',
    subtitle: 'Do 20 stycznia złóż zamówienie na stronie i skorzystaj z <b>promocji -10%</b>. Spiesz się, czas trwania promocji do końca lutego.',
    link: '/',
    img: './images/slide.png',
    btn: 'Zamów online'
 },
 {
  title: '<span class="highlight highlight-dark">Rabat 10%</span> na <br/> pierwsze zamówienie!',
  subtitle: 'Do 20 stycznia złóż zamówienie na stronie i skorzystaj z <b>promocji -10%</b>. Spiesz się, czas trwania promocji do końca lutego.',
  link: '/',
  img: './images/slide.png',
  btn: 'Zamów online'
},
{
  title: '<span class="highlight highlight-dark">Rabat 10%</span> na pierwsze zamówienie!',
  subtitle: 'Do 20 stycznia złóż zamówienie na stronie i skorzystaj z <b>promocji -10%</b>. Spiesz się, czas trwania promocji do końca lutego.',
  link: '/',
  img: './images/slide.png',
  btn: 'Zamów online'
}
];

const sliderWrapper = document.querySelector('#swiper-wrapper');

slides.forEach((item) =>  {

  const slideTitle = document.createElement('h2');
  slideTitle.classList.add('slide-title');
  slideTitle.innerHTML = item.title;

  const slideSubtitle = document.createElement('div');
  slideSubtitle.classList.add('slide-subtitle', 'paragraph');
  slideSubtitle.innerHTML = item.subtitle;

  const slideBtn = document.createElement('button');
  slideBtn.classList.add('button', 'button-red');
  slideBtn.innerHTML = item.btn;

  const slideImg = document.createElement('img');
  slideImg.classList.add('slide-img');
  slideImg.setAttribute('src', item.img);

  const slideText = document.createElement('div');
  slideText.classList.add('slide-column', 'slide-text');
  slideText.appendChild(slideTitle);
  slideText.appendChild(slideSubtitle);
  slideText.appendChild(slideBtn);

  const slideImgWrap = document.createElement('div');
  slideImgWrap.classList.add('slide-column','slide-img-wrapper');
  slideImgWrap.appendChild(slideImg);

  const slideLink = document.createElement('a');
  slideLink.setAttribute('href', item.link);
  slideLink.classList.add("slide-link")
  slideLink.appendChild(slideText);
  slideLink.appendChild(slideImgWrap);

  const swiperSLide = document.createElement('div');
  swiperSLide.classList.add('swiper-slide');
  swiperSLide.appendChild(slideLink);

  sliderWrapper.appendChild(swiperSLide);

});

var swiper = new Swiper(".my-swiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidePerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
