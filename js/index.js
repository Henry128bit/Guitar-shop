'use strict';

const search = document.querySelector('.navbar__search-toggler'),
      form = document.querySelector('.navbar__form'),
      sliderContainers = document.querySelectorAll('.slider__container'),
      sliderPreBtn = document.querySelectorAll('.slider__pre-btn'),
      sliderNxtBtn = document.querySelectorAll('.slider__nxt-btn');

search.addEventListener('click', () => {
    form.classList.toggle('navbar__form_active');
});

// SCROLL

sliderContainers.forEach(item => {
    console.log(item.scrollWidth);
});

sliderNxtBtn.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(e.currentTarget.parentElement.classList.contains('slider-custom'));
    });
});

function scroll() {
    // console.log(sliderContainers);
    // let containerDimensions = sliderContainer.getBoundingClientRect();
    // let containerWidth = containerDimensions.width;
    
    // let scrollWidth = containerWidth / 4;

    // sliderPreBtn.forEach(item => {
    //     item.addEventListener('click', () => {
    //         sliderContainer.scrollLeft -= scrollWidth;
    //     });
    // });

    // sliderNxtBtn.forEach(item => {
    //     item.addEventListener('click', () => {
    //         sliderContainer.scrollLeft += scrollWidth;
    //     });
    // });



    // sliderNxtBtn.addEventListener('click', () => {
    //     sliderContainer.scrollLeft += scrollWidth;
    // });

    // sliderPreBtn.addEventListener('click', () => {
    //     sliderContainer.scrollLeft -= scrollWidth;
    // });
}

scroll();