<?php

// sauvegarde la valeur actuelle du compteur...
setcookie('savedCount', $_COOKIE['counter'], time() + 86400 * 30); // 30 jours

// ... avant de le remettre à zéro
setcookie('counter', 0, time() + 86400 * 30); // 30 jours

echo $_COOKIE['counter'];
