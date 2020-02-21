import 'jquery'
import 'slick'
import 'slick-carousel'

export default {
  init() {
    $('.feedback__slider-init').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // arrows: true,
      dots: true,
    });
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
