$(document).ready(function() {
    //ALL CODE GOES IN HERE
    $('#tweet-controls').hide();
    
    $(".tweet-compose, #dashboard").on("click", function() {
        $("#tweet-controls").show();
        $(".tweet-compose").css('height', '5em');
    

  });

  var maxLength = 140;
  $('.tweet-content .tweet-compose').keyup(function() {
  var length = $(this).val().length;
  var count = maxLength-length;
  $('#char-count').text(count);
  
});

});