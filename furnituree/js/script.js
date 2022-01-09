let burgerBtn = document.querySelector('.header__menu-burger');
let closeBtn = document.querySelector('.menu-mobile__close');
let body = document.body;
let showMoreBtn = document.querySelector('.about-us__text-more-btn');
let materials = document.querySelector('.materials__materials');
let furniture = document.querySelector('.materials__furniture');
let rowTab = document.querySelector('.row-tabs');

if(furniture) {
   furniture.onclick = function() {
      rowTab.classList.add('__active');
   };
}

if(materials) {
   materials.onclick = function() {
      rowTab.classList.remove('__active');
   };
}

if(showMoreBtn) {
   let textMore = document.querySelector('.about-us__text-mobile-more');
   showMoreBtn.onclick = function() {
      textMore.classList.toggle('__active');
   };
}

if (burgerBtn) {
   let menuMobile = document.querySelector('.menu-mobile');
   burgerBtn.onclick = function() {
      menuMobile.classList.add('__active');
      body.classList.add('__noscroll');
   };
}

if (closeBtn) {
   let menuMobile = document.querySelector('.menu-mobile');
   closeBtn.onclick = function() {
      menuMobile.classList.remove('__active');
      body.classList.remove('__noscroll');
   };
}


window.onscroll = function showHeader() {
   let fixedHeader = document.querySelector('.header');
   if (window.pageYOffset > 0) {
      fixedHeader.classList.add('__active');
   } else {
      fixedHeader.classList.remove('__active');
   }
};