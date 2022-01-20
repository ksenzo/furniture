let burgerBtn = document.querySelector('.header__menu-burger');
let closeBtn = document.querySelector('.menu-mobile__close');
let body = document.body;
let popupOpen = document.querySelector('.catalog-page__filter');
let popupClose = document.querySelector('.popup-catalog__close-popup-btn');
let confirmFilters = document.getElementById('confirm-filters');
let refreshFilters = document.getElementById('refresh-filters');
let popup = document.querySelector('.popup-catalog');


if (popup) {
   popup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup-catalog__container')) {
         popup.classList.remove('__active');
         body.classList.remove('__noscroll');
      }
   });
}

if (burgerBtn) {
   let menuMobile = document.querySelector('.menu-mobile');
   burgerBtn.onclick = function () {
      menuMobile.classList.add('__active');
      body.classList.add('__noscroll');
   };
}

if (closeBtn) {
   let menuMobile = document.querySelector('.menu-mobile');
   closeBtn.onclick = function () {
      menuMobile.classList.remove('__active');
      body.classList.remove('__noscroll');
   };
}

window.onscroll = function showHeader() {
   let fixedHeader = document.querySelector('.header-product-page');
   if (window.pageYOffset > 0) {
      fixedHeader.classList.add('__active');
   } else {
      fixedHeader.classList.remove('__active');
   }
};

if (refreshFilters) {
   refreshFilters.onclick = function () {

   };
}

if (popupOpen) {
   popupOpen.onclick = function () {
      popup.classList.add('__active');
      body.classList.add('__noscroll');
   };
}

if (confirmFilters) {
   confirmFilters.onclick = function () {
      popup.classList.remove('__active');
      body.classList.remove('__noscroll');
   };
}


if (popupClose) {
   popupClose.onclick = function () {
      popup.classList.remove('__active');
      body.classList.remove('__noscroll');
   };
}



