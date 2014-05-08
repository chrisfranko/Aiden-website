<?php

if(isset($_POST['get_block'])) {
$ch = curl_init();
curl_setopt($ch,CURLOPT_URL, "http://aiden.cryptorus.com/chain/Aidencoin/q/getblockcount");
curl_setopt($ch,CURLOPT_RETURNTRANSFER, 1);
$feed_json = curl_exec($ch);
curl_close($ch);
echo $feed_json;
}

?>