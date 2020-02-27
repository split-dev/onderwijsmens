import 'jquery'
import 'slick'
import 'slick-carousel'
import 'select2';

export default {
  init() {
    $('.mobile-menu__burger').click(function() {
      $('.mobile-menu').toggleClass('mobile-menu--open');
      $(this).toggleClass('mobile-menu--close-btn');
      $('.shadow').toggleClass('shadow--show');
      $('body').toggleClass('body-hidden');
    });

    let topnav = document.getElementById('top-nav');
    // let burger = document.getElementById('burger');
    window.onscroll = function() {
      if (window.pageYOffset >= 50) {
        topnav.classList.add('onscroll1');
        // burger.classList.add('onscroll-burger');

      } else {
        topnav.classList.remove('onscroll1');
      }
    };

    $('.feedback__slider-init').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // arrows: true,
      dots: true,
      arrows: false,
      fade: true,
    });
    $('.partners__slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      // fade: true,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $('#contact-select').select2({
      placeholder: 'Stuur mij informatie over...',
    });

    let bodyTag = $('body');
    let scholen = $('.top-nav__menu ul li:nth-of-type(1) a');
    let bestuur = $('.top-nav__menu ul li:nth-of-type(2) a');
    let overons = $('.top-nav__menu ul li:nth-of-type(3) a');
    let opleidingen = $('.top-nav__menu ul li:nth-of-type(4) a');
    let downloads = $('.top-nav__menu ul li:nth-of-type(5)');
    let contact = $('.top-nav__menu ul li:nth-of-type(6) a');
    //mobile
    let scholen2 = $('.mobile-menu__menu ul li:nth-of-type(1) a');
    let bestuur2 = $('.mobile-menu__menu ul li:nth-of-type(2) a');
    let overons2 = $('.mobile-menu__menu ul li:nth-of-type(3) a');
    let opleidingen2 = $('.mobile-menu__menu ul li:nth-of-type(4) a');
    let downloads2 = $('.mobile-menu__menu ul li:nth-of-type(5)');
    let contact2 = $('.mobile-menu__menu ul li:nth-of-type(6) a');

    if (bodyTag.hasClass('scholen-1')) {
      scholen.addClass('top-nav-interaction');
      scholen2.addClass('mobile-menu-interaction');
    }
    if (bodyTag.hasClass('scholen-2')) {
      bestuur.addClass('top-nav-interaction');
      bestuur2.addClass('mobile-menu-interaction');
    }
    if (bodyTag.hasClass('over-ons')) {
      overons.addClass('top-nav-interaction');
      overons2.addClass('mobile-menu-interaction');
    }
    if (bodyTag.hasClass('opleidingen-1')) {
      opleidingen.addClass('top-nav-interaction');
      opleidingen2.addClass('mobile-menu-interaction');
    }
    if (bodyTag.hasClass('downloads')) {
      downloads.addClass('top-nav-interaction');
      downloads2.addClass('mobile-menu-interaction');
    }
    if (bodyTag.hasClass('contact-page')) {
      contact.addClass('top-nav-interaction');
      contact2.addClass('mobile-menu-interaction');
    }

    // let burger = document.getElementById('burger');
    // window.onscroll = function() {
    //   if (window.pageYOffset >= 285) {
    //     burger.classList.add('onscroll1');
    //   } else {
    //     burger.classList.remove('onscroll1');
    //   }
    // };
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
