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