$(window).on("scroll", function() {

   if ($(".navbar").offset().top > 40) {
      $(".navbar").addClass("navbar-fixed");
      $(".go-top").show();

   } else {
      $(".navbar").removeClass("navbar-fixed");
      $(".go-top").hide();
   }
})

$(document).ready(function() {
   let portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
   });

   

   $('.popup-image').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      gallery: {
         enabled: true,
         navigateByImgClick: true
      }
   });

   $("#navbarNav").on('show.bs.collapse', function() {

      $(".navbar").addClass("navbar-fixed");

      $('a.nav-link, a.btn-custom').click(function() {
         $("#navbarNav").collapse('hide');
      });
   });


});