<?php

// permet d'entrer à la main la valeur du compteur
setcookie('counter', $_POST['newCount'], time() + 86400 * 30); // 30 jours

echo $_POST['newCount'];