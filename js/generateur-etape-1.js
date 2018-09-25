// Etape 1 : Des citations aléatoires //

// Stockage des morceaux de citations dans des fonctions puis dans des variables
/*
function citationUne() {
	var morceauUn_citationUne = "Pendant mes vacances, ";
	return morceauUn_citationUne;
	var morceauDeux_citationUne = "Sur la route, ";
	return morceauDeux_citationUne;
	var morceauTrois_citationUne = "Au travail, ";
	return morceauTrois_citationUne;
	var morceauQuatre_citationUne = "Cet été, ";
	var morceauCinq_citationUne = "Chez OpenClassrooms, ";
	
}

function citationDeux() {
	var morceauUn_citationDeux = "j’apprends ";
	var morceauDeux_citationDeux = "je bronze ";
	var morceauTrois_citationDeux = "je fais ";
	var morceauQuatre_citationDeux = "je conduis ";
	var morceauCinq_citationDeux = "je travaille ";
}

function citationTrois() {
	var morceauUn_citationTrois = "comme un fou !";
	var morceauDeux_citationTrois = "le café...";
	var morceauTrois_citationTrois = "doucement...";
	var morceauQuatre_citationTrois = "jamais !";
	var morceauCinq_citationTrois = "tous les jours !";
}
*/

//Stockage des morceaux de citations dans des tableaux
var morceau_citationUne = ["Pendant mes vacances, ", "Sur la route, ", "Au travail, ", "Cet été, ", "Chez OpenClassrooms, "];
var morceau_citationDeux = ["j’apprends ", "je bronze ", "je fais ", "je conduis ", "je travaille "];
var morceau_citationTrois = ["comme un fou !", "le café...", "doucement...", "jamais !", "tous les jours !"];
var nbCitation = ["Première", "Deuxième", "Troisième", "Quatrième", "Cinquième"];

// Fonctions générant aléatoirement un morceau de citation
function generationAleatoire_citationUne(){
	return morceau_citationUne[Math.floor(Math.random() * morceau_citationUne.length)];
}

function generationAleatoire_citationDeux(){
	return morceau_citationDeux[Math.floor(Math.random() * morceau_citationDeux.length)];
}

function generationAleatoire_citationTrois(){
	return morceau_citationTrois[Math.floor(Math.random() * morceau_citationTrois.length)];
}

// Boucle permettant de générer 5 citations aléatoires
//  for(i = 0; i < morceau_citationUne.length; i++){
    for(i = 0; i < 5; i++){
	console.log("La " + nbCitation[i] + " citation est : " + generationAleatoire_citationUne() + generationAleatoire_citationDeux() + generationAleatoire_citationTrois());
}

/*
// Générer un morceau de code aléatoirement
console.log(morceau_citationUne[Math.floor(Math.random() * 5)]); // Conseillé de mettre * morceau.length, car sinon avec * 5, si le même morceau est sélectionné, il n'apparaitra qu'une fois !
*/



// Etape 2 : Des citations configurables //

//Stockage des morceaux de citations dans des tableaux
var morceau_citationUne = ["Pendant mes vacances, ", "Sur la route, ", "Au travail, ", "Cet été, ", "Chez OpenClassrooms, "];
var morceau_citationDeux = ["j’apprends ", "je bronze ", "je fais ", "je conduis ", "je travaille "];
var morceau_citationTrois = ["comme un fou !", "le café...", "doucement...", "jamais !", "tous les jours !"];
var nbCitation = ["Première", "Deuxième", "Troisième", "Quatrième", "Cinquième"];

// Fonctions générant aléatoirement un morceau de citation
function generationAleatoire_citationUne(){
	return morceau_citationUne[Math.floor(Math.random() * morceau_citationUne.length)];
}

function generationAleatoire_citationDeux(){
	return morceau_citationDeux[Math.floor(Math.random() * morceau_citationDeux.length)];
}

function generationAleatoire_citationTrois(){
	return morceau_citationTrois[Math.floor(Math.random() * morceau_citationTrois.length)];
}

// Variable déterminant le nombre de citations à générer
var nbCitationUser = Number(prompt("Saisissez le nombre de citations entre un et cinq : "));

// Boucle permettant de générer le nombre de citations que le user a rentré
for(i = 0; i < nbCitationUser; i++){
	console.log("La " + nbCitation[i] + " citation est : " + generationAleatoire_citationUne() + generationAleatoire_citationDeux() + generationAleatoire_citationTrois());
}