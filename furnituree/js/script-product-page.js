let mainPhoto = document.getElementById('main-photo');
let sourceMainPhoto = document.getElementById('source-main-photo');
let smallFirstPhoto = document.getElementById('small-photos-one');
let smallSourceFirst = document.getElementById('source-photos-first');
let smallSecondPhoto = document.getElementById('small-photos-two');
let smallSourceTwo = document.getElementById('source-photos-second');
let smallThirdPhoto = document.getElementById('small-photos-three');
let smallSourceThree = document.getElementById('source-photos-three');
let burgerBtn = document.querySelector('.header__menu-burger');
let closeBtn = document.querySelector('.menu-mobile__close');
let body = document.body;
let popupOpen = document.querySelector('.product__btn');
let popup = document.querySelector('.popup-product-page');
let popupClose = document.querySelector('.popup-product-page__btn');
let popupConfirm = document.querySelector('.popup-product-page__confirm');
let popupBody = document.querySelector('.popup-product-page__body');
let popupConfirmBtn = document.querySelector('.popup-product-page__confirm-btn');
let closePopupBtn = document.querySelector('.popup-product-page__close-popup-btn');


function changePhoto(photoNumber, photo, sourceNumber, source) {
   photoNumber.src = photo;
   sourceNumber.srcset = source;
}


if (smallFirstPhoto) {
   smallFirstPhoto.addEventListener('click', () => changePhoto(
      mainPhoto, 'img/product-page/2.jpg',
      sourceMainPhoto, 'img/product-page/2.webp'));
}

if (smallSecondPhoto) {
   smallSecondPhoto.addEventListener('click', () => changePhoto(
      mainPhoto, 'img/product-page/3.jpg',
      sourceMainPhoto, 'img/product-page/3.webp'));
}

if (smallThirdPhoto) {
   smallThirdPhoto.addEventListener('click', () => changePhoto(
      mainPhoto, 'img/product-page/4.jpg',
      sourceMainPhoto, 'img/product-page/4.webp'));
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

if (closePopupBtn) {
   closePopupBtn.onclick = function () {
      popup.classList.remove('__active');
      body.classList.remove('__noscroll');
      popupConfirm.classList.remove('__active');
      popupBody.classList.remove('__active');
   };
}

if (popupOpen) {
   popupOpen.onclick = function () {
      popup.classList.add('__active');
      body.classList.add('__noscroll');
      popupBody.classList.add('__active');
   };
}

if (popupClose) {
   popupClose.onclick = function () {
      popupConfirm.classList.add('__active');
      popupBody.classList.remove('__active');
   };
}

if (popupConfirmBtn) {
   popupConfirmBtn.onclick = function () {
      popup.classList.remove('__active');
      body.classList.remove('__noscroll');
      popupConfirm.classList.remove('__active');
   };
}

