// dark Mode

let themeBtn = document.getElementById("themebtn")
let theme = localStorage.getItem('data-theme');

const changeThemeToDark = () => {
  document.body.classList = 'dark'
  document.body.style.backgroundImage = "url(../../img/dark.png)";
  localStorage.setItem("data-theme", "dark")
}
const changeThemeToLight = () => {
  document.body.classList = ''
  document.body.style.backgroundImage = "url(../../img/light.png)";
  localStorage.setItem("data-theme", 'light')
}

themeBtn.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme');
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }   
});

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


// menu-btn

$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    setTimeout(function () {
      $("nav ul").toggleClass("flex-column d-block");
      $(".navbar").toggleClass("d-block");
    }, 50);
  });
});

$(document).ready(function () {
  $(".nav-link").on("click", function () {
    $("nav ul").removeClass("flex-column d-block");
    $(".navbar").removeClass("d-block");
  });
});


// stats counter jquery

$.fn.countUp = function (options) {
  var settings = $.extend({
    'time': 2000,
    'delay': 10
  }, options);

  return this.each(function () {
    var $this = $(this);
    var $settings = settings;
    var counterUpper = function () {
      if (!$this.data('counterupTo')) {
        $this.data('counterupTo', $this.text());
      }
      var time = parseInt($this.data("counter-time")) > 0 ? parseInt($this.data("counter-time")) : $settings.time;
      var delay = parseInt($this.data("counter-delay")) > 0 ? parseInt($this.data("counter-delay")) : $settings.delay;
      var divisions = time / delay;
      var num = $this.data('counterupTo');
      var nums = [num];
      var isComma = /[0-9]+,[0-9]+/.test(num);
      num = num.replace(/,/g, '');
      var isInt = /^[0-9]+$/.test(num);
      var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
      var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;
      for (var i = divisions; i >= 1; i--) {
        var newNum = parseInt(Math.round(num / divisions * i));
        if (isFloat) {
          newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
        }
        if (isComma) {
          while (/(\d+)(\d{3})/.test(newNum.toString())) {
            newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
          }
        }
        nums.unshift(newNum);
      }
      $this.data('counterup-nums', nums);
      $this.text('0');
      var f = function () {
        $this.text($this.data('counterup-nums').shift());
        if ($this.data('counterup-nums').length) {
          setTimeout($this.data('counterup-func'), delay);
        } else {
          delete $this.data('counterup-nums');
          $this.data('counterup-nums', null);
          $this.data('counterup-func', null);
        }
      };
      $this.data('counterup-func', f);
      setTimeout($this.data('counterup-func'), delay);
    };
    $this.waypoint(counterUpper, {
      offset: '100%',
      triggerOnce: true
    });
  });
};
$('.counter').countUp();


// Yt-page

// Variables
var player,
  card = document.querySelector('.yt-card'),
  play = document.querySelector('.card-play'),
  video = document.querySelector('.card-video');


// Shine effect
card.onmousemove = function (e) {
  const x = e.pageX - card.offsetLeft;
  const y = e.pageY - card.offsetTop;

  card.style.setProperty('--x', x + 'px');
  card.style.setProperty('--y', y + 'px');
}


// Youtube API
function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}


// Player Ready
function onPlayerReady(event) {
  play.addEventListener('click', function () {
    card.classList.add('video-is-open');
    setTimeout(function () {
      video.style.display = 'block';
      player.playVideo();
    }, 500);
  });
}


// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);