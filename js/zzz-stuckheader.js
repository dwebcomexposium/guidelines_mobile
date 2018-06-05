$(function(){
   $(window).scroll(function () {
      if ($(this).scrollTop() > 250) { 
          $('.dropdown').addClass("fixemonheader");  
      } else {
      $('.dropdown').removeClass("fixemonheader"); 
      }
   });
 });