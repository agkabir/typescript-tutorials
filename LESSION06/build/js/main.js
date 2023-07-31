"use strict";
class Coder {
    constructor(name, // means once name is assigned it can not be changed
    music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I am ${this.age}`;
    }
}
const Kabir = new Coder("Kabir", "soft", 40);
console.log(Kabir.getAge());
// console.log(Kabir.age); // this is not possible because age is private
// console.log(Kabir.lang); // this is not possible because lang is protected
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sumaya = new WebDev("Mac", "Sumaya", "Hindi", 28);
console.log(Sumaya.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
///////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count);
console.log(`Nmae is ${John.name} and id is ${John.id}`);
console.log(`Nmae is ${Amy.name} and id is ${Amy.id}`);
