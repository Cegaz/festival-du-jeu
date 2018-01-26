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
	<a href="index.php"><button>RETOUR AU COMPTEUR</button></a>

<script src="jquery-3.3.1.min.js"></script>
<script src="script.js"></script>
</body>
</html>