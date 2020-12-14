//Classe de creation d'un objet terrain
class Terrain {

    /**
     *
     * @param $element
     */
    constructor($element) {
        /**
         *
         */
        this.$element = $element;

        /**
         *
         */
        this.largeur = $element.width();

        /**
         *
         */
        this.hauteur = $element.height();
    }

    /**
     *
     */
    tiltHaut() {
        //ajouter une classe
        this.$element.addClass("tiltHaut");
        let me = this;

        setTimeout(
            function () {
                //retirer une classe
                me.$element.removeClass("tiltHaut");
            }, 200
        );
    }

    /**
     *
     */
    tiltBas() {
        //ajouter une classe
        this.$element.addClass("tiltBas");
        let me = this;

        setTimeout(
            function () {
                //retirer une classe
                me.$element.removeClass("tiltBas");
            }, 200
        );
    }

    /**
     *
     */
    tiltDroite() {
        //ajouter une classe
        this.$element.addClass("tiltDroite");
        let me = this;

        setTimeout(
            function () {
                //retirer une classe
                me.$element.removeClass("tiltDroite");
            }, 200
        );
    }

    /**
     *
     */
    tiltGauche() {
        //ajouter une classe
        this.$element.addClass("tiltGauche");
        let me = this;

        setTimeout(
            function () {
                //retirer une classe
                me.$element.removeClass("tiltGauche");
            }, 200
        );
    }
}