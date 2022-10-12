<?php
header('Access-Control-Allow-Origin: *');
$fd = fopen('signo.xml','r');
$xml = fread($fd, filesize('signo.xml'));
echo($xml);
fclose($fd);
?>
