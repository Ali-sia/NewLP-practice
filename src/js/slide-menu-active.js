const menuOpenBtn = document.querySelector('.header_open-slide-menu-btn');
const menuCloseBtn = document.querySelector('.header_close-slide-menu-btn');
const menu = document.querySelector('.header-slide-menu');
const body = document.querySelector('body');
menuOpenBtn.addEventListener('click', function () {
  menu.classList.add('active');
  body.classList.add('block-scroll');
});
menuCloseBtn.addEventListener('click', function () {
  menu.classList.remove('active');
  body.classList.remove('block-scroll');
});
