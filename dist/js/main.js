(function (factory) {
  typeof define === 'function' && define.amd ? define('main', factory) :
  factory();
}((function () { 'use strict';

  const tel = document.querySelector('#callback-btn');
  const form = document.querySelector('#callback-form');
  const img = document.querySelector('#callback-btn img');
  const link = document.querySelector('#callback-btn a');
  const cart = document.querySelector('#cart-mobile img');
  tel.addEventListener('click', function () {
    this.classList.toggle('active');
    form.classList.toggle('active');
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
  });
  window.addEventListener('click', e => {
    if (e.target === form) {
      form.classList.toggle('active');
    }
  }); // const mediaQuery = window.matchMedia('screen and (max-width: 767px)');
  // mediaQuery.addListener(foo);
  // const mediaQuery2 = window.matchMedia('screen and (min-width: 768px)');
  // mediaQuery2.addListener(foo);
  // function foo(mq, mq2) {
  //   if (mq) {
  //     img.setAttribute('src', '../../img/tel-mobile.svg');
  //     link.remove();
  //     cart.setAttribute('src', '../../img/cart-mobile.svg');
  //   }
  //   if  (mq2) {
  //     img.setAttribute('src', '../../img/tel.svg');
  //   }
  // }
  // window.addEventListener('resize', foo(mediaQuery, mediaQuery2));

  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed: 600,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    autoplay: {
      delay: 5000
    }
  });
  /* Burger */

  const burger = document.querySelector('#burger');
  const nav = document.querySelector('#nav');
  burger.addEventListener('click', function () {
    this.classList.toggle('active');
    nav.classList.toggle('active');
  });

})));