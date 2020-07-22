import initTilt from './js/tilt';
import initSr from './js/sr';
import './style/main.scss';
import particles from './js/particles';
import app from './js/app';
import tawk from './js/tawk';

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});



initSr();
initTilt();
particles();
app();
tawk();