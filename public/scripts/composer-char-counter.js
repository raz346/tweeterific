$(document).ready(function(){
var maxChar = 140;
var counter;
$('.new-tweet textarea').on('input', function(event){
  var charCount = $(this).val().length;
  var remainedChar = maxChar - charCount;
  counter = counter || $(this).parent().children('.counter');
  counter.text(remainedChar);
  if (remainedChar >= 0) {
    counter.css('color', 'black');
  } else {
    counter.css('color', 'red');
  }
  });
});