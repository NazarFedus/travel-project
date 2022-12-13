
//Carousel
   var owl = $('.owl-carousel');
   owl.owlCarousel({ // в ці дужки вставляємо налаштування
     center: true,
     loop: true,
     margin: 30,
     startPosition: 1,
     items: 1,
     responsive : {
      // breakpoint from 600 up
      600 : {
        margin: 20,
        items: 3,
      },
      // breakpoint from 1200 up
      1200:{
        margin: 30,
        items: 3,
      }
  }
});

     $('.slider__btn--prev').click(function() {
     owl.trigger('prev.owl.carousel');
     })

   $('.slider__btn--next').click(function() {
       owl.trigger('next.owl.carousel');
   })

//Nav icon

const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

navBtn.onclick = function(){
  nav.classList.toggle('nav--mobile'); // додаєм клас nav--active до nav
  menuIcon.classList.toggle('menu-icon--active'); // додаєм клас menu-icon--active до menu-icon
  document.body.classList.toggle('no-scroll'); // додаєм клас no-scroll до body
}


