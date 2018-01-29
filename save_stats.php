<?php

	$date = new DateTime();
	$hour = $date->format('H:i');

	$file = fopen('stats.txt', 'c+');
	fwrite($file, $hour . ' -> ' . $_COOKIE['counter']);
