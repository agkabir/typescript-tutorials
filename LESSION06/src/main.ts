class Coder {
  secondLang!: string;

  constructor(
    public readonly name: string, // means once name is assigned it can not be changed
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I am ${this.age}`;
  }
}

const Kabir = new Coder("Kabir", "soft", 40);
console.log(Kabir.getAge());
// console.log(Kabir.age); // this is not possible because age is private
// console.log(Kabir.lang); // this is not possible because lang is protected

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sumaya = new WebDev("Mac", "Sumaya", "Hindi", 28);
console.log(Sumaya.getLang());
// console.log(Sumaya.age) // this is not possible because age is private
// console.log(Sumaya.lang) // this is not possible because lang is protected

// class interface
interface Musician{
    name: string,
    instrument: string,
    play(action:string): string
}
class Guitarist implements Musician{
    name: string;
    instrument: string;

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }
    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}
 
const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))

///////////////////////////////////
class Peeps{
    static count: number = 0
    
    static getCount(): number{
        return Peeps.count
    }

    public id: number
    
    constructor(public name:string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Peeps.count)
console.log(`Nmae is ${John.name} and id is ${John.id}`)
console.log(`Nmae is ${Amy.name} and id is ${Amy.id}`);