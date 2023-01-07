'use strict';

const search = document.querySelector('.navbar__search-toggler'),
      form = document.querySelector('.navbar__form');

search.addEventListener('click', () => {
    form.style.display = 'block';
});