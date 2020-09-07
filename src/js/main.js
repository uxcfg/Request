import './components/callback';

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  speed: 600,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  // autoplay: {
  //   delay: 5000,
  // },
});

/* Burger */
const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav');

burger.addEventListener('click', function () {
  this.classList.toggle('active');
  nav.classList.toggle('active');
});





