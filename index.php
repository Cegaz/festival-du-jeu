<?php 
session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<title>Festival du jeu - compteur</title>
  <meta charset="utf-8" />
  <link href="style.css" rel="stylesheet"></style>
  <link href="fireworks.css" rel="stylesheet"></style>
</head>

<body id="body">

	<h1>
		<span id="counter">
			<?php
			$_COOKIE['counter'];
		 ?>
		</span>
	</h1>

	<canvas id="canvas">
	</canvas>

<script src="jquery-3.3.1.min.js"></script>
<script src="js.cookie.js"></script>
<script src="script.js"></script>
<script src="firework.js"></script>
</body>
</html>