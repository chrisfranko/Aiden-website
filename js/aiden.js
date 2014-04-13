$(document).ready(function() {

// simple jMenu plugin called
$("#jMenu").jMenu();

// more complex jMenu plugin called
$("#jMenu").jMenu({
  ulWidth : 'auto',
  effects : {
    effectSpeedOpen : 300,
    effectTypeClose : 'slide'
  },
  animatedText : false
});
	
// custom nav handler
$('.navLink').click(function() {
	var rel = $(this).attr('rel');
	$('.active').addClass('hidden').removeClass('active');
	$('.selected').removeClass('selected');
	$('#'+rel+'').addClass('active').show( "fade", { direction: "down" }, "slow" ).removeClass('hidden');
	$(this).addClass('selected');
});

// cool glowing effect
$('.aiden').hover(
  function() {
    $('.header').addClass('glow');
  }, function() {
    $('.header').removeClass('glow');
  }
);
	
});