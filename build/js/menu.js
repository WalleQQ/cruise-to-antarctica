const navigationContainer = document.querySelector('.main-nav');
const openMenu = document.querySelector('.main-nav__toggle');
const closeMenu = openMenu.querySelector('span');
const menu = document.querySelector('.main-nav__menu');
const anchors = menu.querySelectorAll('a');

navigationContainer.classList.remove('main-nav--no-js');

openMenu.addEventListener('click', (evt) => {
  openMenu.classList.toggle('main-nav__toggle--show');
  menu.classList.toggle('main-nav__menu--show-menu');
  closeMenu.classList.toggle('main-nav__toggle-item--close-menu');
});

anchors.forEach((anchor) => {
  anchor.addEventListener('click', () => {
    openMenu.classList.remove('main-nav__toggle--show');
    menu.classList.remove('main-nav__menu--show-menu');
    closeMenu.classList.remove('main-nav__toggle-item--close-menu');
  });
});