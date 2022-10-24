window.addEventListener('DOMContentLoaded', $(function() {
    $('.rev_slider').slick({
        dots: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true
            }
          },
        ]
      });
}));
