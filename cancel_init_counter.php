<?php

// revient à la dernière valeur sauvegardée (avant retour à zéro, donc)
setcookie('counter', $_COOKIE['savedCount'], time() + 86400 * 30); // 30 jours

echo $_COOKIE['savedCount'];