//Classe de création d'un objet balle
class Balle {
    /**
     *
     * @param $element
     */
    constructor($element) {
        this.$element = $element;

        /**
         *
         * @type {number}
         */
        this.hauteur = $element.height();

        /**
         *
         * @type {number}
         */
        this.largeur = $element.width();

        /**
         *
         * @type {number}
         */
        this.positionX = parseInt($element.css("left"));

        /**
         *
         * @type {number}
         */
        this.positionY = parseInt($element.css("top"));

        /**
         *
         * @type {number}
         */
        this.vitesseDepart = terrain.largeur / 500;

        /**
         *
         * @type {number}
         */
        this.vitesse = this.vitesseDepart;

        /**
         *
         * @type {number}
         */
        this.vitesseMax = terrain.largeur / 100;

        /**
         *
         * @type {number}
         */
        this.acceleration = 1.1;

        /**
         *
         * @type {number}
         */
        this.buf = Math.random();

        /**
         *
         * @type {number}
         */
        this.angle = this.defAngle();
    }

    /**
     *
     * @returns {number}
     */
    get bas() {
        return this.positionY + this.hauteur;
    }

    /**
     *
     * @param value
     */
    set bas(value) {
        this.positionY = value - this.hauteur;
    }

    /**
     *
     * @returns {number}
     */
    get droite() {
        return this.positionX + this.largeur;
    }

    /**
     *
     * @param value
     */
    set droite(value) {
        this.positionX = value - this.largeur;
    }

    /**
     *
     * @returns {number}
     */
    defAngle()
    {
        return this.buf < 0.5 ? (5*Math.PI/4) - Math.random()*(2*Math.PI/4) : (Math.PI/4) - Math.random()*(2*Math.PI/4);
    }

    /**
     *Augmente la vitesse de la balle jusqu'à un maximum
     */
    accelerer() {
        if (Math.abs(this.vitesse) < this.vitesseMax)
        {
            this.vitesse *= this.acceleration;
        }
        else{
            this.vitesse = this.vitesseMax;
        }
    }

    /**
     *Recentre la balle au milieu du terrain
     */
    recentrer() {
        this.reinitialiserVitesse();

        this.positionX = terrain.largeur / 2 - this.largeur / 2;
        this.positionY = terrain.hauteur / 2 - this.hauteur / 2;

        this.angle = this.defAngle();

    }

    /**
     *Remet la vitesse de la balle à celle de départ
     */
    reinitialiserVitesse() {
        this.vitesse = this.vitesseDepart;
    }

    /**
     *Fait se déplacer la balle
     */
    bouger() {
        this.positionX += Math.cos(this.angle) * this.vitesse;
        this.positionY += Math.sin(this.angle) * this.vitesse;

        this.limite();
        this.majHTML();
    }

    stop(){
        this.vitesse = 0;
    }

    /**
     *Défini les limites que la balle ne doit pas dépasser
     */
    limite() {
        //droite
        if ((this.droite) > terrain.largeur) {
            terrain.tiltDroite();

            joueurVie.perdreVie();

            this.buf = 0.75;

            this.droite = terrain.largeur;
            this.angle = Math.PI - this.angle;
            this.recentrer();

            son.stopNoteDef(1);
            son.playNoteDef(1);
        }
        //gauche
        if (this.positionX < 0) {
            terrain.tiltGauche();

            joueurVie.perdreVie();

            this.buf = 0.25;

            this.positionX = 0;
            this.angle = Math.PI - this.angle;
            this.recentrer();

            son.stopNoteDef(1);
            son.playNoteDef(1);
        }
        //bas
        if (this.bas > terrain.hauteur) {
            terrain.tiltBas();

            this.bas = terrain.hauteur;
            this.angle = -(this.angle);
        }
        //haut
        if (this.positionY < 0) {
            terrain.tiltHaut();

            this.positionY = 0;
            this.angle = -(this.angle);
        }
        //Rebonds sur les raquettes
        //Gauche
        if (this.positionX < raquetteGauche.droite) { //si la balle dépasse à gauche de la raquette gauche
            if (this.bas > raquetteGauche.positionY) { //et si la balle est plus basse que le haut de la raquette
                if (this.positionY < raquetteGauche.bas) { // et si la balle est plus haute que le bas de la raquette

                    joueurScore.ajoutScore();

                    this.accelerer();
                    this.angle = Math.PI - this.angle;

                    son.playNote();

                    raquetteGauche.changerCouleur();
                }
            }
        }
        //Droite
        if (this.droite > raquetteDroite.positionX) { //si la balle dépasse à droite la raquette droite
            if (this.bas > raquetteDroite.positionY) { //et si la balle est plus basse que le haut de la raquette
                if (this.positionY < raquetteDroite.bas) { // et si la balle est plus haute que le bas de la raquette

                    joueurScore.ajoutScore();

                    this.accelerer();
                    this.angle = Math.PI - this.angle;

                    son.playNote();

                    raquetteDroite.changerCouleur();
                }
            }
        }
    }

    /**
     *
     */
    majHTML() {
        this.$element.css("left", balle.positionX);
        this.$element.css("top", balle.positionY);
    }
}