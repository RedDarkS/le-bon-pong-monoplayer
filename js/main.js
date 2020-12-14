//on creer un nouvel objet a partir de ceux de HTML/CSS
/**
 *Initialise un nouveau terrain pour le jeu
 * @type {Terrain}
 */
let terrain = new Terrain($("#terrain"));

/**
 *Initialise une nouvelle balle
 * @type {Balle}
 */
let balle = new Balle($("#balle"));

/**
 *Initialise une raquette gauche
 * @type {Raquette}
 */
let raquetteGauche = new Raquette($("#gauche"));

/**
 *Initialise une raquette droite
 * @type {Raquette}
 */
let raquetteDroite = new Raquette($("#droite"));

/**
 *
 * @type {Joueur}
 */
let joueurScore = new Joueur($("#score"));
let joueurVie = new Joueur($("#vie"));

let son = new Son();

//boucle afin de modifier la position de la balle et des raquettes toutes les 10 millisecondes
//les if servent à tester les collisions avec les bordures du terrain, et ainsi de faire rebondir la balle ou la laquette

let demarrer = false;

/**
 * Boucle de jeu, permet d'actualiser le déplacement des raquettes et de la balle
 */
setInterval(function () {
    if(demarrer){
        //appel de fonction des classes correspondant aux objets
        balle.bouger();

        raquetteGauche.bouger();
        raquetteDroite.bouger();
    }

    if(joueurVie.jeu)
    {
        $("#ecran-fin").addClass("invisible");
    }
    else if(!joueurVie.jeu)
    {
        $("#scoreFin").text("Bravo tu as obtenu " + joueurScore.score + " points.");

        $("#ecran-fin").removeClass("invisible");

        demarrer = false;


    }
}, 10);

//code pour lancer la partie via bouton jouer
$("#btn-jouer").on("mouseup", function (event) {
    event.preventDefault();
    demarrer = true;
    son.playNoteDef(0);
    $("#ecran-debut").addClass("invisible");
});

//code pour relancer une partie via bouton rejouer
$("#btn-rejouer").on("mouseup", function (event) {
    event.preventDefault();
    son.playNoteDef(0);
    $("#ecran-fin").addClass("invisible");

    demarrer = true;
    joueurVie.jeu = true;

    balle.recentrer();
    raquetteGauche.recentrer();
    raquetteDroite.recentrer();

    joueurScore.score = 0;
    joueurVie.vie = 5;
});

//Ouverture des listeners pour écouter quelles touchent sont utilisées
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return
    }

    //Les touches sont detectées on va les bouger
    if (event.key === "h") {
        raquetteGauche.monter();
    }
    if (event.key === "b") {
        raquetteGauche.descendre();
    }
    if (event.key === "b") {
        raquetteDroite.monter();
    }
    if (event.key === "h") {
        raquetteDroite.descendre();
    }
    event.preventDefault();
}, true);


window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
        return
    }
    //Les touches sont detectées on va les arreter
    if (event.key === "h" || event.key === "b") {
        raquetteGauche.arret();
    }
    if (event.key === "h" || event.key === "b") {
        raquetteDroite.arret();
    }
    event.preventDefault();
}, true);
