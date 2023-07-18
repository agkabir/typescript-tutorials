"use strict";
// More types in ts fx. array
let stringArray = ['one', 'two', 'three'];
let guitars = ['strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArray[0] = 'Kabir';
stringArray.push('Alamgir');
guitars[0] = 1982;
guitars.unshift('Kabir');
let test = [];
let bands = [];
bands.push('Van Halen');
// tuple
let myTuple = ['Kabir', 42, true];
let mixed = ['alamgir', 1, false];
// mixed = myTuple // is possible
// myTuple = mixed // it is not possible because mixed could have fewer elements than myTuple
// myTuple[3] = 23 // is not possible because 4th pos is undefined
// myTuple[2] = 23 // is not possible because 3rd pos accept only boolean
// myTuple[1] = 23 // is possible because 2nd pos is also number
// objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {}; // all above are fine
const exampleObj = {
    name: 'kabir',
    isStudent: true
};
//exampleObj.name = 12 // this is not ok because property name is string
exampleObj.isStudent = false; // this is ok
;
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: "Jimmy",
    albums: ['I', 5159, "IV"],
};
// evh = jp //is valid
// function to greet a guitarist
const greetGuitarist = (guitarist) => {
    if (guitarist.name)
        return `Hello ${guitarist.name.toUpperCase()}`;
    return 'Hello!';
};
console.log(greetGuitarist(evh));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
