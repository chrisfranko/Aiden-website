<?php

if(isset($_POST['get_coinbase'])) {
$ch = curl_init();
curl_setopt($ch,CURLOPT_URL, "https://coinbase.com/api/v1/prices/spot_rate");
curl_setopt($ch,CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,0);
$feed_json = curl_exec($ch);
curl_close($ch);
$feed_arry = json_decode($feed_json, true);
echo $feed_arry['amount'];
}

?>