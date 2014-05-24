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
	if(rel == 'downloads') { $('#downloads_info').removeClass('hidden'); $('#integration_info').addClass('hidden'); $('#integration_info div').each(function() { $(this).addClass('hidden'); }); }
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

// integrations handler
$('.integrations li a').click(function() {
	$('#downloads_info').addClass('hidden');
	$('#integration_info').addClass('hidden');
		
	$('#'+$(this).attr('rel')).removeClass('hidden');
	$('#integration_info').show( "fade", { direction: "down" }, "slow" ).removeClass('hidden');	
});

// query string redirection
var $_GET = get_query();
if($_GET['redirect'] == 'woocommerce') {
	$("a[rel='downloads']").click();	
	$("a[rel='wooCommerce']").click();	
}

// get current mining difficulty
$.post("api/get_difficulty.php",
  {
    get_diff:'true'
  },
  function(data,status){
    $('#difficulty').val(data);
  });
	
// get block count
$.post("api/get_blockcount.php",
  {
    get_block:'true'
  },
  function(data,status){
  	blockReward = 50;
  	if (data <= 210000) { blockReward = 50; $('#dist_1').addClass('current_block'); }
  	if (data > 210000 && data <= 420000) { blockReward = 25; $('#dist_2').addClass('current_block'); }
  	if (data > 420000 && data <= 840000) { blockReward = 12.5; $('#dist_3').addClass('current_block'); }
  	if (data > 840000 && data <= 1680000) { blockReward = 6.25; $('#dist_4').addClass('current_block'); }
  	if (data > 1680000 && data <= 3360000) { blockReward = 3.125; $('#dist_5').addClass('current_block'); }
  	if (data > 3360000) { blockReward = 3.125; $('#dist_6').addClass('current_block'); }  	
  	$('#reward').val(blockReward);    
  });	

// get btc rate from polo
$.post("api/get_polo.php",
  {
    get_polo:'true'
  },
  function(data,status){
    $('#btcrate').val(data);
  });
  
// get btc / usd from coinbase 
$.post("api/get_coinbase.php",
  {
    get_coinbase:'true'
  },
  function(data,status){
    $('#btcprice').val(data);
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

function get_query(){
  var url = location.href;
  var qs = url.substring(url.indexOf('?') + 1).split('&');
  for(var i = 0, result = {}; i < qs.length; i++){
      qs[i] = qs[i].split('=');
      result[qs[i][0]] = decodeURIComponent(qs[i][1]);
  }
  return result;
}