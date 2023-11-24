$(".pr-products-slick").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow:
      '<button class="btn carousel-control-prev-icon pr-slick-prev" aria-hidden="true" role="button" data-slide="prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#454168" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow:
      '<button class="btn carousel-control-next-icon pr-slick-next" aria-hidden="true" role="button" data-slide="next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3. org/2000/svg"><path d="M1 13L7 7L1 1" stroke="#454168" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});