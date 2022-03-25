const navigationContainer = document.querySelector('.main-nav');
const openMenu = document.querySelector('.main-nav__toggle');
const closeMenu = openMenu.querySelector('span');
const menu = document.querySelector('.main-nav__menu');
const anchors = menu.querySelectorAll('a');
const pageBody = document.querySelector('.page-body');
const overlay = document.querySelector('.page-header__overlay');

navigationContainer.classList.remove('main-nav--no-js');

openMenu.addEventListener('click', (evt) => {
  openMenu.classList.toggle('main-nav__toggle--show');
  menu.classList.toggle('main-nav__menu--show-menu');
  closeMenu.classList.toggle('main-nav__toggle-item--close-menu');
  pageBody.classList.toggle('page-body__isOpenMenu');
  overlay.classList.toggle('page-header__overlay--isShow');
});

anchors.forEach((anchor) => {
  anchor.addEventListener('click', () => {
    openMenu.classList.remove('main-nav__toggle--show');
    menu.classList.remove('main-nav__menu--show-menu');
    closeMenu.classList.remove('main-nav__toggle-item--close-menu');
    pageBody.classList.remove('page-body__isOpenMenu');
    overlay.classList.remove('page-header__overlay--isShow');
  });
});

overlay.addEventListener('click', () => {
  openMenu.classList.remove('main-nav__toggle--show');
  menu.classList.remove('main-nav__menu--show-menu');
  closeMenu.classList.remove('main-nav__toggle-item--close-menu');
  pageBody.classList.remove('page-body__isOpenMenu');
  overlay.classList.remove('page-header__overlay--isShow');
});
