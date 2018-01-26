<?php 
session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<title>Festival du jeu - compteur</title>
  <meta charset="utf-8" />
  <link href="style.css" rel="stylesheet"></style>
</head>

<body id="body">
	<p>
		compteur actuel : <?php echo $_COOKIE['counter'];
		var_dump($_COOKIE);
		?>
	</p>
	<button><a href="index.php">RETOUR AU COMPTEUR</a></button>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"
        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
        crossorigin="anonymous"></script>
<script src="js.cookie.js"></script>
<script src="script.js"></script>
</body>
</html>