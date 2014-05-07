// Mining Calculator
// Mostly taken from http://www.holynerdvana.com/2014/02/how-to-calculate-coins-per-day-for-any.html

function roundNumber(number, digits) {
  var multiple = Math.pow(10, digits);
  var roundedNumber = Math.round(number * multiple) / multiple;
  return roundedNumber;
}
 
function cleanRound(anumber) {
  var clean = 0;
   
  if (anumber > 100) {
   clean = Math.round(anumber) 
  } else if (anumber > 10) {
   clean = Math.round(anumber * 10) / 10
  } else if (anumber > 1) {
   clean = Math.round(anumber * 100) / 100
  } else if (anumber > .1) {
   clean = Math.round(anumber * 1000) / 1000
  } else if (anumber > .01) {
   clean = Math.round(anumber * 10000) / 10000
  } else {
   clean = Math.round(anumber * 100000) / 100000
  }

  return clean;
};

	function calcScrypt() {
		$('#hashrate').val($('#scrypt_hashrate').val() * 10.5);
		calcform();
	}

  function calcform() {
   var seconds = 86400;
   var hashrate = Number(document.getElementById("hashrate").value) * Number(document.getElementById("hashtype").value);
   var difficulty = Number(document.getElementById("difficulty").value);
   var reward = Number(document.getElementById("reward").value);
   var btcrate = Number(document.getElementById("btcrate").value);
   var btcprice = Number(document.getElementById("btcprice").value);

   var coinsperday = seconds * reward * hashrate / (difficulty * (Math.pow(2, 48) / 0x00000000ffff));
   var btcperday = coinsperday * btcrate;
   var usdperday = btcperday * btcprice;
   
   if (!isNaN(coinsperday)) {
    document.getElementById("coinrewards").innerHTML=cleanRound(coinsperday);
   } else {
    document.getElementById("coinrewards").innerHTML="0";
   }

   if (!isNaN(btcperday)) {
    document.getElementById("btcrewards").innerHTML=cleanRound(btcperday);
   } else {
    document.getElementById("btcrewards").innerHTML="0";
   }

   if (!isNaN(usdperday)) {
    document.getElementById("usdrewards").innerHTML="$" + roundNumber(usdperday, 2);
   } else {
    document.getElementById("usdrewards").innerHTML="$0.00";
   }
  };
