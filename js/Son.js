class Son{
    /**
     * Gère la partie audio du projet
     * @see https://createjs.com/getting-started/soundjs
     */
    constructor(){
        //sounds
        createjs.Sound.registerSound("sound/seb-glissade.mp3", "seb-glissade");
        createjs.Sound.registerSound("sound/Salut.mp3", "Salut");
        createjs.Sound.registerSound("sound/wilhelm-scream-gaming-sound-effect-hd.mp3", "wilhelm-scream-gaming-sound-effect-hd");
        createjs.Sound.registerSound("sound/roblox-death-sound_1.mp3", "roblox-death-sound_1");
        createjs.Sound.registerSound("sound/minecraft_hit_soundmp3converter.mp3","minecraft_hit_soundmp3converter");
        createjs.Sound.registerSound("sound/jecodeaveclecul.mp3", "jecodeaveclecul");
        createjs.Sound.registerSound("sound/waluigi_wahring2mob.mp3", "waluigi_wahring2mob");
        //createjs.Sound.registerSound("sound/pong.mp3", "pong");
    }
    /**
     * Joue une note de piano aléatoire
     */
    playNote(){
        let notes=["Salut", "wilhelm-scream-gaming-sound-effect-hd", "roblox-death-sound_1","minecraft_hit_soundmp3converter", "waluigi_wahring2mob"];
        let note =notes[Math.floor(Math.random() * notes.length)];
        createjs.Sound.play(note);
    }

    playNoteDef(nombre){
        let notes=["seb-glissade", "jecodeaveclecul"];
        createjs.Sound.play(notes[nombre]);
    }

    stopNoteDef(nombre){
        let notes=["seb-glissade", "jecodeaveclecul"];
        createjs.Sound.stop(notes[nombre]);
    }
    /**
     * Joue plusieurs notes ce qui produit un truc assez pété
     */
    fausseNote(){
        this.playNote();
        this.playNote();
        this.playNote();
        this.playNote();
        this.playNote();
    }
}