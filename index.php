<?php 
session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<title>Festival du jeu - compteur</title>
  <meta charset="utf-8" />
  <link href="style.css" rel="stylesheet"></style>
  <link href="firework.css" rel="stylesheet"></style>
  <link href="https://fonts.googleapis.com/css?family=Rammetto+One" rel="stylesheet"> 
</head>

<body>
	<div class="before"></div>

	<div class="icon">
		<img src="FDJV-logo-fff.png" width="200px" onclick="toggleMenu()">
		<div id="menu">
			<a href="#" class="item" onclick="resetCounter()">Compteur à zéro</a><br>
			<a href="#" class="item" onclick="setCounter()">Entrer une valeur</a>
		</div>
	</div>

	<h1>
		<span id="counter">
		</span>
	</h1>

	<canvas id="canvas">
	</canvas>

	<div class="after"></div>


<script src="jquery-3.3.1.min.js"></script>
<script src="script.js"></script>
<!-- <script src="firework/firework.js"></script> -->
</body>
</html>