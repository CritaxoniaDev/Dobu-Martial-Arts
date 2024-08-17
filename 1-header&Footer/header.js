// Active class for the current element
// will get the current URL path
var path = window.location.pathname;
// will get all the navigation links in the HTML
var navlinks = document.querySelectorAll('.nav-list li a');

// will do the looping through each navigation links 
for (var i = 0; i < navlinks.length; i++) {
  var link = navlinks[i];
  // will check if the href in the HTML matches in the current URL path
  if (link.getAttribute('href') == path) {
    // will add the 'active' class link in the CSS
    link.classList.add('active');
  }
}

// function for the dropdown-header
(function ($) {
  $(function () {
    //  open and close nav 
    $('#navbar-toggle').click(function () {
      $('nav ul').slideToggle();
    });
    // Hamburger toggle
    $('#navbar-toggle').on('click', function () {
      this.classList.toggle('active');
    });
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");
      // Close dropdown when select another dropdown
      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });
    // Click outside the dropdown will remove the dropdown class
    $('html').click(function () {
      $('.navbar-dropdown').hide();
    });
  });
})(jQuery); 
