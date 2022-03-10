const navigationContainer = document.querySelector('.main-nav');
const openMenu = document.querySelector('.main-nav__toggle');
const closeMenu = openMenu.querySelector('span');
const menu = document.querySelector('.main-nav__menu');
const anchors = document.querySelectorAll('a');

navigationContainer.classList.remove('main-nav--no-js');

openMenu.addEventListener('click', () => {
  openMenu.classList.toggle('main-nav__toggle--show');
  menu.classList.toggle('main-nav__menu--show-menu');
  closeMenu.classList.toggle('main-nav__toggle-item--close-menu');
});
