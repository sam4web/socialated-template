// prealoader
$(document).ready(() => {
  $('#preloader').fadeOut();
});

// toggle button click handler
$('.toggle-btn').click(() => {
  $('.header').toggleClass('toggle-active');
});

// widow resize scrolll handler
$(window)
  .scroll(() => {
    $('.header').removeClass('toggle-active');
  })
  .resize(() => {
    $('.header').removeClass('toggle-active');
  });

// counter
setTimeout(() => {
  $('.odometer_number_one').html(49);
  $('.odometer_number_two').html(76);
  $('.odometer_number_three').html(93);
  $('.odometer_number_four').html(50);
}, 1000);

// swiper slider
const swiperSlider = (slides) => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: slides,
  });
};

// responsive functionality
const slidesResize = () => {
  let slides, delay;
  if ($(window).width() < 768) {
    slides = 1;
  } else if ($(window).width() < 992) {
    slides = 2;
  } else {
    slides = 4;
  }
  swiperSlider(slides);
};

$(window).resize(() => {
  slidesResize();
});

$(document).ready(() => {
  slidesResize();
});

// scroll active
const scrollActive = () => {
  if ($(window).scrollTop() > 150) {
    $('.header').addClass('scroll-active');
    $('.back-to-top').fadeIn();
  } else {
    $('.header').removeClass('scroll-active');
    $('.back-to-top').fadeOut();
  }
};

$(window).scroll(() => {
  scrollActive();
});

scrollActive();

// Back to top
$('.back-to-top').click(() => {
  window.scrollTo(0, 0);
});
