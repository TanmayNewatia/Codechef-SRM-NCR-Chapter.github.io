// typed.js

const typed = document.querySelector('.typed')
if (typed) {
  let typed_strings = typed.getAttribute('data-typed-items')
  typed_strings = typed_strings.split(',')
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}

// Aos

AOS.init({
  offset: 100,
  duration: 600,
  once: false,
});

// tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

ScrollOut({
  targets: '.card2 .txt-box, .card2 .info, .card2 .connection:first-child, .card2 .connection:last-child, .card2 .connection:nth-child(2)'
});