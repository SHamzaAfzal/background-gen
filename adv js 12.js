class player {
    constructor(name, type) {
        console.log("Player",this);
        this.type = type;
        this.name = name;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, and I am a friggin ${this.type}.`);
    }
}

class hero extends player {
    constructor(name, type) {        
        super(name,type);
        console.log("hero", this)
    }
    play() {
        console.log(`${this.name} is playing rn.`);
    }
}

const objHero = new hero("Hamza", "Allmight");


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(name, type, color) {
        this.name = name; this.type = type; this.color=color;
    }
}

class Mamal extends Animal {
    constructor(name,type,color) {
        super(name,type,color);
    }
    sound() {
        console.log(`MOO My name is ${this.name}, I am of ${this.type} type and my color is ${this.color}`);
    }
}

const name = prompt(`Tell me your name.`);

const type = prompt(`Tell me your type.`);

const color = prompt(`Tell me your color.`);

const objMamal = new Mamal(name,type,color);


let drAr = dragons.filter((obj) => {
    return obj.includes("San");
});