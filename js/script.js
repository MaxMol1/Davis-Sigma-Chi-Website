(function($) {
  "use strict"; // Start of use strict
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

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#navigation").offset().top > 100) {
      $("#navigation").addClass("navbar-shrink");
    } else {
      $("#navigation").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

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

var scriptURL = 'https://script.google.com/macros/s/AKfycbwpUBWqfIUdkgnLEGIdokQI1tnKpAaPjJQIZ5Df23HDwUrZLGyc/exec'
var form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', function(e) {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(function(response) { console.log('Success!', response) })
    .catch(function(error) { console.error('Error!', error.message) })
})
