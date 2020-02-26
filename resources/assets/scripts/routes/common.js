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
    $('.partners__all').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      // fade: true,
    });
    $('#contact-select').select2({
      // dropdownParent: $('#buy__form-select-wrapper1'),
    });
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
