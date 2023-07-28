class Coder{
    
    secondLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Typescript'
    ) {
        this.name = name
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        return `Hello, I am ${this.age}`
    }
}

const Kabir = new Coder('Kabir', 'soft', 40)
console.log(Kabir.getAge())
// console.log(Kabir.age); // this is not possible because age is private
// console.log(Kabir.lang); // this is not possible because lang is protected

class WebDev extends Coder{
    constructor(
        public computer: string,
        name: string,
        music: string,
        age:number
    ) {
        super(name, music, age)
        this.computer=computer
    }
    public getLang() {
        return `I write ${this.lang}`
    }

}

const Sumaya = new WebDev('Mac', 'Sumaya', 'Hindi', 28)
console.log(Sumaya.getLang())
// console.log(Sumaya.age) // this is not possible because age is private
// console.log(Sumaya.lang) // this is not possible because lang is protected
