<?php

	$date = new DateTime();
	$hour = $date->format('H:i');
	$day = $date->format('d/m');

	$file = fopen('stats.txt', 'a+');
	fwrite($file, $day . '  ' .$hour . ' -> ' . $_COOKIE['counter'] . "\n");
	fclose($file);
