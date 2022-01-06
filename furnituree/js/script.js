let burgerBtn = document.querySelector('.header__menu-burger');
let closeBtn = document.querySelector('.menu-mobile__close');

if (burgerBtn) {
   let menuMobile = document.querySelector('.menu-mobile');
   burgerBtn.onclick = function() {
      menuMobile.classList.add('__active');
   };
}

if (closeBtn) {
   let menuMobile = document.querySelector('.menu-mobile');
   closeBtn.onclick = function() {
      menuMobile.classList.remove('__active');
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