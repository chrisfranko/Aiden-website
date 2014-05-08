<?php

if(isset($_POST['get_polo'])) {
$ch = curl_init();
curl_setopt($ch,CURLOPT_URL, "https://poloniex.com/public?command=returnTicker");
curl_setopt($ch,CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,0);
$feed_json = curl_exec($ch);
curl_close($ch);
$feed_arry = json_decode($feed_json,true);
$rate = $feed_arry['BTC_ADN']['last'];
echo $rate;
}

?>