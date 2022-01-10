let burgerBtn = document.querySelector('.header__menu-burger');
let closeBtn = document.querySelector('.menu-mobile__close');
let body = document.body;
let showMoreBtn = document.querySelector('.about-us__text-more-btn');
let materials = document.querySelector('.materials__materials');
let furniture = document.querySelector('.materials__furniture');
let rowTab = document.querySelector('.row-tabs');
let materialsTab = document.querySelector('.materials__tab-materials');
let furnitureTab = document.querySelector('.materials__tab-furniture');
let threeProductRow = document.getElementById('row-three');
let fourProductRow = document.getElementById('row-four');
let showMoreBtnTwo = document.querySelector('.offer__products-more-btn');

if(furniture) {
   furniture.onclick = function() {
      rowTab.classList.add('__active');
      materialsTab.style.display = 'none';
      furnitureTab.style.display = 'block';
   };
}

if(materials) {
   materials.onclick = function() {
      rowTab.classList.remove('__active');
      materialsTab.style.display = 'block';
      furnitureTab.style.display = 'none';
   };
}

if(showMoreBtnTwo) {
   showMoreBtnTwo.onclick = function() {
      threeProductRow.classList.add('__active');
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



const swiperTwo = new Swiper('.materials__tab-materials-slider', {
   spaceBetween: 34,
   navigation: {
      nextEl: '.materials__tab-materials-slider-button-next',
      prevEl: '.materials__tab-materials-slider-button-prev',
    },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
   }
});


const swiperReview = new Swiper('.review__slider', {
   navigation: {
      nextEl: '.review__slider-button-next',
      prevEl: '.review__slider-button-prev',
    },
    pagination: {
      el: '.review__slider-pagination',
      clickable: true,
    },
   
});