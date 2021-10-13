(function($) {
  // Start of use strict
  "use strict";
  jQuery.htmlPrefilter = function( html ) {
    return html;
  };

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#navigation',
    offset: 100
  });

  // Control if navbar is transparent of full
  var navbarCollapse = function() {
    if ($("#navigation").offset().top > 100) {
      $("#navigation").addClass("navbar-full");
    } else {
      $("#navigation").removeClass("navbar-full");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);

})(jQuery);
// End of use strict

// Show full officer list if "more" button is clicked
function showOfficers() {
  var offBut = document.getElementById("officersButton");
  var noShow = document.getElementsByClassName("not-shown");
  var officer = document.getElementById("officers");

  if (offBut.innerHTML == "Less") { 
    offBut.innerHTML = "More";
    for (i = 0; i < noShow.length; i++)
      noShow[i].style.display = "none";
  } else {
    offBut.innerHTML = "Less";
    for (i = 0; i < noShow.length; i++)
      noShow[i].style.display = "flex";
  }
  officer.scrollIntoView({behavior: "smooth"})
}

// Submission script for rush form
var scriptURL = 'https://script.google.com/macros/s/AKfycbzAKO749wk5Lg4jGyc0vWK7w9Nusjs0D89n0Tu1qUJIoe00j4mCCDH3SLlviPbMhbBK/exec'
var form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', function(e) {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(function(response) { console.log('Success!', response) })
    .catch(function(error) { console.error('Error!', error.message) })
})
