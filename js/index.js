'use strict';

const search = document.querySelector('.navbar__search-toggler'),
      form = document.querySelector('.navbar__form');

search.addEventListener('click', () => {
    form.classList.toggle('navbar__form_active');
});