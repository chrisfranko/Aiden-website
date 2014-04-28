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
	if(rel == 'mining') { $('#mining_header').removeClass('hidden'); $('#mining_config').addClass('hidden'); }
	$('.active').addClass('hidden').removeClass('active');
	$('.selected').removeClass('selected');
	$('#'+rel+'').addClass('active').show( "fade", { direction: "down" }, "slow" ).removeClass('hidden');
	$('a[rel='+rel+'').addClass('selected');
});

// mining handler
$('.conf li a').click(function() {
	
	$('#mining_header').addClass('hidden');
	$('#mining_config').addClass('hidden');
	
	var rel = $(this).attr('rel');
	var anchor = $(this).text();
	
	// update header
	$('#config_header').text("Mining Configuration: "+anchor);
	
	// grab config file
	var file = "mining/"+rel;
	$.get( file, function( data ) {
  $('#config_code').text( data );  
	});
	
	// show mining config
	$('#mining_config').show( "fade", { direction: "down" }, "slow" ).removeClass('hidden');
	
});

// cool glowing effect - will bring back at some point...
/*
$('.aiden').hover(
  function() {
    $('.header').addClass('glow');
  }, function() {
    $('.header').removeClass('glow');
  }
);*/
	
});