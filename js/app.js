$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    appendDots: '.slider-dots',
    dotsClass: 'dots'
  });


  let hamberger = document.querySelector('.hamberger');
  let times = document.querySelector('.times');
  let mobileNav = document.querySelector('.mobile-nav');
  let resume_download = document.querySelector('.resume-download');

  hamberger.addEventListener('click', function () {
    mobileNav.classList.add('open');
  });

  times.addEventListener('click', function () {
    mobileNav.classList.remove('open');
  });

  resume_download.addEventListener('click', () => {
    window.open(
      'https://docs.google.com/document/d/1I9D97hucpQeBTHjf7RLnpHIloW0Sjq7j/edit', '_blank'
    )
  });

  function goToContact() {
    window.location.href = "localhost:3000/#contact"
  }

});