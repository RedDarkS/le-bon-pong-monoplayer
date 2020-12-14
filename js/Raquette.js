//Classe de creation d'un objet raquette
class Raquette {

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
        this.direction = 0;
        /**
         *
         * @type {number}
         */
        this.vitesse = 3;
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
     */
    bouger() {
        this.positionY += this.vitesse * this.direction;
        this.limite();
        this.majHTML();
    }

    /**
     *
     */
    monter() {
        this.direction = -1;
    }

    /**
     *
     */
    descendre() {
        this.direction = 1;
    }

    arret() {
        this.direction = 0;
    }

    recentrer() {
        this.positionX = terrain.largeur / 2 - this.largeur / 2;
        this.positionY = terrain.hauteur / 2 - this.hauteur / 2;
    }

    changerCouleur(){
        this.$element.addClass("tiltRaquette");
        let buffer = this;

        setTimeout(
            function(){
                buffer.$element.removeClass("tiltRaquette");
            },200
        );
    }
    majHTML() {
        this.$element.css("top", this.positionY);
    }

    limite() {
        if (this.bas > terrain.hauteur) {
            this.bas = terrain.hauteur;
            this.arret();
        }
        if (this.positionY < 0) {
            this.positionY = 0;
            this.arret();
        }
    }
}