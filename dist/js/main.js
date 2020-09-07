(function (factory) {
  typeof define === 'function' && define.amd ? define('main', factory) :
  factory();
}((function () { 'use strict';

  const tel = document.querySelector('#callback-btn-desktop');
  const telMob = document.querySelector('#callback-btn');
  const form = document.querySelector('#callback-form');
  const img = document.querySelector('#callback-btn img');
  const link = document.querySelector('#callback-btn a');
  const cart = document.querySelector('#cart-mobile img');
  telMob.addEventListener('click', function () {
    this.classList.toggle('active');
    form.classList.toggle('active');
  });
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
  });
  window.addEventListener('wheel', e => {
    form.classList.remove('active');
  });

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