"use strict";
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
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
const Kabir = new Coder('Kabir', 'soft', 40);
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
const Sumaya = new WebDev('Mac', 'Sumaya', 'Hindi', 28);
console.log(Sumaya.getLang());
// console.log(Sumaya.age) // this is not possible because age is private
// console.log(Sumaya.lang) // this is not possible because lang is protected
