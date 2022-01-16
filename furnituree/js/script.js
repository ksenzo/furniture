let burgerBtn = document.querySelector('.header__menu-burger');
let closeBtn = document.querySelector('.menu-mobile__close');
let showMoreBtn = document.querySelector('.about-us__text-more-btn');
let materials = document.querySelector('.materials__materials');
let furniture = document.querySelector('.materials__furniture');
let rowTab = document.querySelector('.row-tabs');
let materialsTab = document.querySelector('.materials__tab-materials');
let furnitureTab = document.querySelector('.materials__tab-furniture');
let threeProductRow = document.getElementById('row-three');
let fourProductRow = document.getElementById('row-four');
let showMoreBtnTwo = document.querySelector('.offer__products-more-btn');
let testBtn2 = document.querySelector('.mebel-cost__btn');
const popupLinks = document.querySelectorAll('.popup-links');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
let popupChoicePhoto = document.querySelectorAll('.popup-test1__photo');
let unlock = true;
const timeout = 800;


if (popupChoicePhoto) {
   popupChoicePhoto.onc
}

if (popupLinks.length > 0) {
   for (let i = 0; i < popupLinks.length; i++) {
      const popupLink = popupLinks[i];
      popupLink.addEventListener('click', function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}


const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let i = 0; i < popupCloseIcon.length; i++) {
      const el = popupCloseIcon[i];
      el.addEventListener('click', function (e) {
         popupClose(el.closest('.popup'));
      });
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.__active');
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add('__active');
      //curentPopup.addEventListener('click', function (e) {
      //   if (!e.target.closest('.popup__content')) {
      //      popupClose(e.target.closest('.popup'));
      //   }
      //});
   }
}

function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('__active');
      if (doUnlock) {
         bodyUnlock();
      }
   }
}

function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

   if (lockPaddingValue.length > 0) {
      for (let i = 0; i < lockPadding.length; i++) {
         const el = lockPadding[i];
         el.style.paddingRight = lockPaddingValue;
      }
   }
   //body.style.paddingRight = lockPaddingValue;
   body.classList.add('__noscroll');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

function bodyUnlock() {
   setTimeout(function () {
      if (lockPadding.length > 0) {
         for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = '0px';
         }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('__noscroll');
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

document.addEventListener('keydowm', function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector('.popup.__active');
      popupClose(popupActive);
   }
});


//(function () {
//   if (!Element.prototype.closest) {
//      Element.prototype.closest = function (css) {
//         var node = this;
//         while (node) {
//            if (node.matches(css)) return node;
//            else node = node.parentElement; 
//         }
//         return null;
//      };
//   }
//})();
//(function () {
//   if(!Element.prototype.matches) {
//      Element.prototype.matches = Element.prototype.matchesSelector ||
//         Element.prototype.webkitMatchesSelector ||
//         Element.prototype.mozMatchesSelector ||
//         Element.prototype.msMatchesSelector;
//   }
//})();

if (furniture) {
   furniture.onclick = function () {
      rowTab.classList.add('__active');
      materialsTab.style.display = 'none';
      furnitureTab.style.display = 'block';
   };
}

if (materials) {
   materials.onclick = function () {
      rowTab.classList.remove('__active');
      materialsTab.style.display = 'block';
      furnitureTab.style.display = 'none';
   };
}

if (showMoreBtnTwo) {
   showMoreBtnTwo.onclick = function () {
      threeProductRow.classList.add('__active');
   };
}

if (showMoreBtn) {
   let textMore = document.querySelector('.about-us__text-mobile-more');
   showMoreBtn.onclick = function () {
      textMore.classList.toggle('__active');
   };
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