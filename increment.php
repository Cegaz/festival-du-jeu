<?php

	if(!isset($_COOKIE['counter'])) {
		setcookie('counter', 0, time() + 86400 * 30); // 30 jours
	} else {
		$newCount = $_COOKIE['counter'] + 1;
		setcookie('counter', $newCount, time() + 86400 * 30);
	}

	echo $_COOKIE['counter']+1;
