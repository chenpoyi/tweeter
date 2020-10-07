$(document).ready(function() {
  // --- our code goes here ---
  //console.log("CHAR COUNTER READY");

  $('#tweet-text').keyup(
    function(event) {
      //console.log($( this ).val().length);
      //console.log($( this ).siblings("div").children(".counter").val());
      //let counterValue = $( this ).siblings("div").children(".counter").val();
      const currentLength = 140 - $(this).val().length;
      const counter = $(this).siblings("div").children(".counter");
      counter.val(currentLength);

      //console.log(counterValue);
      if (currentLength < 0) {
        //console.log("NEGATIVE");
        //changes color to red if negative
        counter.addClass("alert");
      } else {
        counter.removeClass("alert");
      }
    }
  );
});