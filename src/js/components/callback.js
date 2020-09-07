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

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

window.addEventListener('click', (e) => {
  if (e.target === form) {
    form.classList.toggle('active');
  }
});

window.addEventListener('wheel', (e) => {
  form.classList.remove('active');
});
