import 'jquery'
import 'slick'
import 'slick-carousel'
import 'select2';

export default {
  init() {
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
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
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
      // dropdownParent: $('#buy__form-select-wrapper1'),
    });
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
