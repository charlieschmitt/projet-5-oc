// Etape 2 : Des citations configurables //

// Fonction principale générer les citations
function genererCitation(){

	// Sous-fonction citation Classique
	function citationClassique(){

	// Stockage des morceaux de citations dans des tableaux : Premier générateur, le "classique"
	var morceau_citationUne = [
		"Pendant mes vacances, ", 
		"Sur la route, ", 
		"Au travail, ", 
		"Cet été, ", 
		"Chez OpenClassrooms, "
	];

	var morceau_citationDeux = [
		"j’apprends ", 
		"je bronze ", 
		"je fais ", 
		"je conduis ", 
		"je travaille "
	];

	var morceau_citationTrois = [
		"comme un fou !", 
		"le café...", 
		"doucement...", 
		"jamais !", 
		"tous les jours !"
	];

		// Fonctions générant aléatoirement un morceau de citation
		function citationClassiqueUne(){
			return morceau_citationUne[Math.floor(Math.random() * morceau_citationUne.length)];
		}

		function citationClassiqueDeux(){
			return morceau_citationDeux[Math.floor(Math.random() * morceau_citationDeux.length)];
		}

		function citationClassiqueTrois(){
			return morceau_citationTrois[Math.floor(Math.random() * morceau_citationTrois.length)];
		}

	return citationClassiqueUne() + citationClassiqueDeux() + citationClassiqueTrois();

	}

	// Sous-fonction citation Nawak
	function citationNawak(){

	// Stockage des morceaux de citations dans des tableaux : Deuxième générateur, le "nawak"
	var morceau_citationUne = [
		"Héééééé, ", 
		"Ohhhhhh, ", 
		"Toi, ", 
		"Ahahah, ", 
		"Sblaaah, "
	];

	var morceau_citationDeux = [
		"l'Ornithorynque ", 
		"petit hibiscus ", 
		"flibustier ", 
		"freluquet ", 
		"camenbert jaune "
	];

	var morceau_citationTrois = [
		"tousse un coup !", 
		"croiviez ce que vous vouliez...", 
		", y'a anguille sous roche.", 
		", t'es plat comme une limande !", 
		", il neige sous le scalp..."
	];

		// Fonctions générant aléatoirement un morceau de citation
		function citationNawakUne(){
			return morceau_citationUne[Math.floor(Math.random() * morceau_citationUne.length)];
		}

		function citationNawakDeux(){
			return morceau_citationDeux[Math.floor(Math.random() * morceau_citationDeux.length)];
		}

		function citationNawakTrois(){
			return morceau_citationTrois[Math.floor(Math.random() * morceau_citationTrois.length)];
		}

	return citationNawakUne() + citationNawakDeux() + citationNawakTrois();

	}

	// Sous-fonction du programme générant les citations
	function programmeCitation(){

		// Variable déterminant le nombre de citations à générer
		var nbCitationUser = Number(prompt("Saisissez le nombre de citations entre un et cinq : "));

		// Gestion des erreurs "nombre de citations"
		while((nbCitationUser < 1) || (nbCitationUser > 5)){
			var nbCitationUser = Number(prompt("Saisissez le nombre de citations entre un et cinq : "));
		}

		// Variable déterminant le choix des citations
		var choixCitationUser = prompt("Souhaitez vous choisir les citations classique ou les citations nawak ? ");

		// Gestion des erreurs "choix des citations"
		while((choixCitationUser !== "classique") || (choixCitationUser !== "nawak")){

			if((choixCitationUser === "classique") || (choixCitationUser === "nawak")){
				break;
			}
			else{
				var choixCitationUser = prompt("Souhaitez vous choisir les citations classique ou les citations nawak ? ");
			}

		}

		// Boucle permettant de générer le nombre de citations que le user a rentré
		for(i = 0; i < nbCitationUser; i++){

			var nbCitation = ["Première", "Deuxième", "Troisième", "Quatrième", "Cinquième"];
			if(choixCitationUser === "classique"){
				console.log("La " + nbCitation[i] + " citation est : " + citationClassique());
			}	
			else if(choixCitationUser === "nawak"){
				console.log("La " + nbCitation[i] + " citation est : " + citationNawak());
			}

		}

	}

return citationClassique() + citationNawak() + programmeCitation();

}

genererCitation();

// Initialisation de la boucle
var loop = 0;

// Boucle permettant de générer de nouvelles citations ou d'arrêter le programme
while(loop === 0){

	var newCitation = prompt("Souhaitez-vous générer de nouvelles citations ? ");

	// Gestion des erreurs "oui ou non"
	while((newCitation !== "oui") || (newCitation !== "non")){

		if((newCitation === "oui") || (newCitation === "non")){
			break;
		}
		else{
			var newCitation = prompt("Souhaitez-vous générer de nouvelles citations ? "); 
		}

	}

	if(newCitation === "oui"){
		genererCitation();
	}
	else if(newCitation === "non"){
		console.log("C'est la fin du programme !");
		break;
	}

}