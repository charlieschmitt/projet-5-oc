// Fonction principale générer les citations //

function genererCitation(){

	// Sous-fonction citation Classique
	function citationClassique(){

	// Stockage des morceaux de citations dans des tableaux : Premier générateur, le "classique"
	var morceaux_citationUne = [
		"Pendant mes vacances, ", 
		"Sur la route, ", 
		"Au travail, ", 
		"Cet été, ", 
		"Chez OpenClassrooms, "
	];

	var morceaux_citationDeux = [
		"j’apprends ", 
		"je bronze ", 
		"je fais ", 
		"je conduis ", 
		"je travaille "
	];

	var morceaux_citationTrois = [
		"comme un fou !", 
		"le café...", 
		"doucement...", 
		"jamais !", 
		"tous les jours !"
	];

		// Fonctions générant aléatoirement un morceau de citation
		function citationClassiqueUne(){
			return morceaux_citationUne[Math.floor(Math.random() * morceaux_citationUne.length)];
		}

		function citationClassiqueDeux(){
			return morceaux_citationDeux[Math.floor(Math.random() * morceaux_citationDeux.length)];
		}

		function citationClassiqueTrois(){
			return morceaux_citationTrois[Math.floor(Math.random() * morceaux_citationTrois.length)];
		}

	return citationClassiqueUne() + citationClassiqueDeux() + citationClassiqueTrois();

	}

	// Sous-fonction citation Nawak
	function citationNawak(){

	// Stockage des morceaux de citations dans des tableaux : Deuxième générateur, le "nawak"
	var morceaux_citationUne = [
		"Héééééé, ", 
		"Ohhhhhh, ", 
		"Toi, ", 
		"Ahahah, ", 
		"Sblaaah, "
	];

	var morceaux_citationDeux = [
		"l'Ornithorynque ", 
		"petit hibiscus ", 
		"flibustier ", 
		"freluquet ", 
		"camenbert jaune "
	];

	var morceaux_citationTrois = [
		"tousse un coup !", 
		"croiviez ce que vous vouliez...", 
		", y'a anguille sous roche.", 
		", t'es plat comme une limande !", 
		", il neige sous le scalp..."
	];

		// Fonctions générant aléatoirement un morceau de citation
		function citationNawakUne(){
			return morceaux_citationUne[Math.floor(Math.random() * morceaux_citationUne.length)];
		}

		function citationNawakDeux(){
			return morceaux_citationDeux[Math.floor(Math.random() * morceaux_citationDeux.length)];
		}

		function citationNawakTrois(){
			return morceaux_citationTrois[Math.floor(Math.random() * morceaux_citationTrois.length)];
		}

	return citationNawakUne() + citationNawakDeux() + citationNawakTrois();

	}

	// Sous-fonction du programme générant les citations dans le DOM
	function programmeCitation(){

		// Variable stocke la valeur de l'input sélectionné pour le nombre de citations
		var nbCitationUser = document.querySelector('input[name=radio-nb]:checked').value;

		// Variable stocke la valeur de l'input sélectionné pour le choix des citations
		var choixCitationUser = document.querySelector('input[name=radio-cit]:checked').value;

		// Boucle permettant d'insérer le nombre et le type de citations dans le DOM que le user a selectionné
		for(i = 0; i < nbCitationUser; i++){

			if(choixCitationUser === "Classique"){
				var classiqueElt = document.createElement("li");
				classiqueElt.setAttribute("class", "citation");
				classiqueElt.textContent = citationClassique();
				document.getElementById("generateur-citations").appendChild(classiqueElt);
			}	

			else if(choixCitationUser === "Nawak"){
				var nawakElt = document.createElement("li");
				nawakElt.setAttribute("class", "citation");
				nawakElt.textContent = citationNawak();
				document.getElementById("generateur-citations").appendChild(nawakElt);
			}
			
		}

	}

return citationClassique() + citationNawak() + programmeCitation();

}

// Création d'une variable myForm et d'un évènement pour déclencler les citations
var myForm = document.getElementById("formulaire-citations");

myForm.addEventListener("submit", function(e){

		e.preventDefault();
		document.getElementById("generateur-citations").innerHTML = "";
		genererCitation();

}, false);