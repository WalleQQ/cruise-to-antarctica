const listItems = document.querySelector('.upcoming-cruises__list');
const listItem = listItems.querySelectorAll('.upcoming-cruises__item');
const listItemsLinks = listItems.querySelectorAll('a');

listItemsLinks.forEach((link, i) => {
  link.addEventListener('focus', () => {
    listItem[i].classList.add('upcoming-cruises__item--isShow');
  });

  link.addEventListener('blur', () => {
    listItem[i].classList.remove('upcoming-cruises__item--isShow');
  });
});
