$(document).ready(function(){
    
      // Tweet button and the character count button below should be hidden. 
    
    $('#tweet-submit, #char-count').hide();
    $('.tweet-actions').hide();
    $('.stats').hide();
    
    
    // user clicks on the textarea, the textarea should double in size and the character count and Tweet buttons should be revealed.
    
    $(".tweet-compose").click(function(){
    
        $(this).css('height', '10em');
        $('#tweet-submit, #char-count').show();
    });
    
    /////////
    
    
    //If the user puts in more than 140 characters, the tweet button should be disabled 
    
    var maxCharacters = 140;
    
    $('#char-count').text(maxCharacters);
    
    $('.tweet-compose').keyup(function(){
        var count = $('#char-count');
        var characters = $(this).val().length; //.length of the characters inside an input
    
        //As the user types the character count should decrease. Once it hits 10 character or less the count should turn red 
    
          count.text(maxCharacters - characters);
    
         if(characters >= 130){
           count.addClass('over');
        }
    
         if(characters >140){
          $('button').attr('disabled','disabled');
        }
    
        if(characters < 140){
          $('button').removeAttr('disabled','disabled');
        }
    
    
        if(characters < 130){
          count.removeClass('over');
        }
    
    });
   
    
    
    
    });