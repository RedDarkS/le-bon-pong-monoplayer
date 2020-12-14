class Joueur{
    /**
     * constructeur de la classe Joueur
     */
    constructor($element){
        this.$element = $element;
        this.cote = 0; //0 si c'est le coté gauche et 1 si c'est le coté droit
        this.score = 0;
        this.vie = 5;
        this.jeu = true;
    }

    /**
     * Ajout du score pour chaque joueurs
     */
    ajoutScore(){
        this.score += 10;
        this.$element.text("Score : " + this.score);
    }

    perdreVie()
    {
        this.vie -= 1;
        this.$element.text("Points de vie : " + this.vie);

        if(this.vie == 0){
            this.jeu = false;
        }
    }
}