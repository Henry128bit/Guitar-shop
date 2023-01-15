'use strict';

const search = document.querySelector('.navbar__search-toggler'),
      form = document.querySelector('.navbar__form'),
      sliderContainer = document.querySelector('.slider__container'),
      sliderPreBtn = document.querySelector('.slider__pre-btn'),
      sliderNxtBtn = document.querySelector('.slider__nxt-btn');

search.addEventListener('click', () => {
    form.classList.toggle('navbar__form_active');
});

// SCROLL

function scroll() {
    let containerDimensions = sliderContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    sliderNxtBtn.addEventListener('click', () => {
        sliderContainer.scrollLeft += containerWidth;
    });

    sliderPreBtn.addEventListener('click', () => {
        sliderContainer.scrollLeft -= containerWidth;
    });
}

scroll();