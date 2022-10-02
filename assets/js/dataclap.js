(function(){
   if (window.location.hash == "#1"){
   	$('#pills-budget-tab').addClass('active');
      $('#pills-budget-tab').attr('aria-selected', true);
      $('html, body').animate({
           scrollTop: $("#tab-section").offset().top
      }, 2000);
   } else if (window.location.hash == "#2"){
      $('#pills-create-tab').addClass('active');
      $('#pills-create-tab').attr('aria-selected', true);
      $('html, body').animate({
           scrollTop: $("#tab-section").offset().top
      }, 2000);
   } else {
     $('#pills-view-tab').addClass('active');
     $('#pills-view-tab').attr('aria-selected', true);
     $('html, body').animate({
           scrollTop: $("#tab-section").offset().top
      }, 2000);
   }
})(jQuery)