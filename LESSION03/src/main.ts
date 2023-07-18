// More types in ts fx. array

let stringArray = ['one', 'two', 'three']
let guitars = ['strat', 'Les Paul', 5150]
let mixedData = ['EVH', 1984, true]

stringArray[0] = 'Kabir'
stringArray.push('Alamgir')

guitars[0] = 1982
guitars.unshift('Kabir')

let test = []
let bands: string[] = []
bands.push('Van Halen')

// tuple
let myTuple: [string, number, boolean] = ['Kabir', 42, true]

let mixed = ['alamgir', 1, false]

// mixed = myTuple // is possible
// myTuple = mixed // it is not possible because mixed could have fewer elements than myTuple

// myTuple[3] = 23 // is not possible because 4th pos is undefined
// myTuple[2] = 23 // is not possible because 3rd pos accept only boolean

// myTuple[1] = 23 // is possible because 2nd pos is also number

// objects
let myObj: object;
myObj = []
console.log(typeof myObj)

myObj = bands;
myObj = {}; // all above are fine

const exampleObj = {
    name: 'kabir',
    isStudent: true
}

//exampleObj.name = 12 // this is not ok because property name is string
exampleObj.isStudent = false // this is ok

// defining type of an object
// type Guitarist = {
//     name: string,
//     active?: boolean, // ? make it optional
//     albums: (string|number)[]
// }

// the code can be written by using keyword interface and without = operator 

interface Guitarist  {
  name?: string;
  active?: boolean; // ? make it optional
  albums: (string | number)[];
};

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums:[1984, 5150,'OU812']
}
let jp: Guitarist = {
  name: "Jimmy",
  albums: ['I', 5159, "IV"],
};

// evh = jp //is valid

// function to greet a guitarist

const greetGuitarist = (guitarist: Guitarist) => {
    if(guitarist.name)
        return `Hello ${guitarist.name.toUpperCase()}`
    return 'Hello!'
}

console.log(greetGuitarist(evh))

// Enums
enum Grade {
  U, // it will print 0 but if we assign U=1 then next one will automatically incremented
  D,
  C,
  B,
  A,
}
console.log(Grade.U) 

