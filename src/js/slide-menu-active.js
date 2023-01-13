const menuOpenBtn = document.querySelector('.header_open-slide-menu-btn');
const menuCloseBtn = document.querySelector('.header_close-slide-menu-btn');
const menu = document.querySelector('.header-slide-menu');
menuOpenBtn.addEventListener('click', function () {
  menu.classList.add('active');
});
menuCloseBtn.addEventListener('click', function () {
  menu.classList.remove('active');
});
