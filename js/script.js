console.log("Hello World");

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }



  $(document).ready(function () 
  {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    })

    ('#scroll-to-top-btn').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    })
});