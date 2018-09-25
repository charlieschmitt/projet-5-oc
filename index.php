<!DOCTYPE HTML>
<html lang="fr">

	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
	    <meta charset="utf-8">
	    <title>Générateur de citations</title>
	    <link rel="stylesheet" href="skin/knacss/css/knacss.css" />
	    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"> 
	</head>


	<body>
		<header>
			<div class="shape shape-top--left">
				<img alt="La forme en haut à gauche" src="skin/pictures/shape-top-left.png" />
			</div>
			<h1 class="gc-title">Generateur de citations</h1>
			<div class="shape shape-top--right">
				<img alt="La forme en haut à droite" src="skin/pictures/shape-top-right.png" />
			</div>
		</header>
	    <main>
	    	<form id="formulaire-citations" class="grid-5 has-gutter">
		    	<section id="nombre-citations" class="col-2">
		    		<h2 class="h3-like nombre-citations--title">Nombre de citations</h2>
		    		<div class="choix-citations grid-3">
		    			<input class="radio" id="radio-nombre--one" type="radio" name="radio-nb" value="1" />
		    			<label class="radio-label" for="radio-nombre--one">1</label>
		    			<input class="radio" id="radio-nombre--two" type="radio" name="radio-nb" value="2" />
		    			<label class="radio-label" for="radio-nombre--two">2</label>
		    			<input class="radio" id="radio-nombre--three" type="radio" name="radio-nb" value="3" />
		    			<label class="radio-label" for="radio-nombre--three">3</label> 
		    			<input class="radio" id="radio-nombre--four" type="radio" name="radio-nb" value="4" />
		    			<label class="radio-label" for="radio-nombre--four">4</label>
		    			<input class="radio" id="radio-nombre--five" type="radio" name="radio-nb" value="5" />
		    			<label class="radio-label" for="radio-nombre--five">5</label>
		    		</div>
		    	</section>
		    	<section id="theme-citations" class="col-2">
		    		<h2 class="h3-like theme-citations--title">Thèmes de vos citations</h2>
		    		<div class="choix-citations">
		    			<input class="radio" id="radio-theme--one" type="radio" name="radio-cit" value="Classique" />
		    			<label class="radio-label" for="radio-theme--one">Classique</label>
		    			<input class="radio" id="radio-theme--two" type="radio" name="radio-cit" value="Nawak" />
		    			<label class="radio-label" for="radio-theme--two">Nawak</label>
		    		</div>
		    	</section>
		    	<section id="go">
		    		<input class="ready" type="submit" value="GO" />
		    	</section>
		    	<section class="col-all">
		    		<ol id="generateur-citations">
		    		</ol>
		    	</section>
		    </form>
	    </main>
	    <footer>
	    	<div class="shape shape-bottom--left">
				<img alt="La forme en bas à gauche" src="skin/pictures/shape-bottom-left.png" />
			</div>
	    	<p>Conception & réalisation : Charlie Schmitt</p>
	    	<div class="shape shape-bottom--right">
				<img alt="La forme en bas à droite" src="skin/pictures/shape-bottom-right.png" />
			</div>
	    </footer>

	    <script src="js/generateur-etape-3.js"></script>

	</body>


</html>