'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // SEARCH
    const search = document.querySelector('.navbar__search-toggler'),
          form = document.querySelector('.navbar__form');

    search.addEventListener('click', () => {
        form.classList.toggle('navbar__form_active');
    });

    //SCROLL
    const sliderContainer = document.querySelector('.slider__container'),
          sliderContainerCustom = document.querySelector('.slider__container-custom'),
          sliderPreBtn = document.querySelectorAll('.slider__pre-btn'),
          sliderNxtBtn = document.querySelectorAll('.slider__nxt-btn');

    function scrollNxt() {
        sliderNxtBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.currentTarget.hasAttribute('data-custom')) {
                    let containerWidth = sliderContainerCustom.getBoundingClientRect().width;
                    let scrollWidth = containerWidth / 4;
                    sliderContainerCustom.scrollLeft += scrollWidth;
                } else {
                    let containerWidth = sliderContainer.getBoundingClientRect().width;
                    let scrollWidth = containerWidth / 4;
                    sliderContainer.scrollLeft += scrollWidth;
                }
            });
        });
    }

    function scrollPre() {
        sliderPreBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.currentTarget.hasAttribute('data-custom')) {
                    let containerWidth = sliderContainerCustom.getBoundingClientRect().width;
                    let scrollWidth = containerWidth / 4;
                    sliderContainerCustom.scrollLeft -= scrollWidth;
                } else {
                    let containerWidth = sliderContainer.getBoundingClientRect().width;
                    let scrollWidth = containerWidth / 4;
                    sliderContainer.scrollLeft -= scrollWidth;
                }
            });
        });
    }

    scrollNxt();
    scrollPre();

    // IMAGE CHANGE
    const customImages = document.querySelectorAll('.slider__link-img-custom');

    customImages.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            let num = parseInt(e.target.getAttribute('data-card'));
            switch (num) {
                case 1:
                    document.querySelector('#image-1').style.zIndex = 1;
                    break;
                case 2:
                    document.querySelector('#image-2').style.zIndex = 1;
                    break;
                case 3:
                    document.querySelector('#image-3').style.zIndex = 1;
                    break;
                case 4:
                    document.querySelector('#image-4').style.zIndex = 1;
                    break;
                case 5:
                    document.querySelector('#image-5').style.zIndex = 1;
                    break;
            }
        });
    });

    customImages.forEach(element => {
        element.addEventListener('mouseleave', (e) => {
            let num = parseInt(e.target.getAttribute('data-card'));
            switch (num) {
                case 1:
                    document.querySelector('#image-1').style.zIndex = -1;
                    break;
                case 2:
                    document.querySelector('#image-2').style.zIndex = -1;
                    break;
                case 3:
                    document.querySelector('#image-3').style.zIndex = -1;
                    break;
                case 4:
                    document.querySelector('#image-4').style.zIndex = -1;
                    break;
                case 5:
                    document.querySelector('#image-5').style.zIndex = -1;
                    break;
            }
        });
    });
});