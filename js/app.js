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

$(".pr-product-pv-imgs").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  asNavFor: ".pr-pv-mini-images",
  prevArrow:
    '<button class="slick-prev slick-arrow es-black" aria-label="Previous" type="button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.57 5.93005L3.5 12.0001L9.57 18.0701" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 12H3.67004" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  nextArrow:
    '<button class="slick-next slick-arrow es-black" aria-label="Next" type="button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.43 5.93005L20.5 12.0001L14.43 18.0701" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.49996 12H20.33" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
      },
    },
  ],
});

$(".pr-pv-mini-images").slick({
  vertical: true,
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  swipeToSlide: true,
  arrows: false,
  asNavFor: ".pr-product-pv-imgs",
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});