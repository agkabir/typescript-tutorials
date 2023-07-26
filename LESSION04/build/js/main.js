"use strict";
// literal types
let myName;
// myName = 'Alamgir' // will not work. it is similar to const but can be used as follows
let userName;
userName = "Abdullah"; // it is possible but not something else which is not defined in the userName
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 8));
let subtract = function (c, d) {
    return c - d;
};
// using interfaces
// interface mathFunction{
//   (a:number, b:number):number
// }
let multiply = function (c, d) {
    return c * d;
};
let division = (c, d) => {
    return c / d;
};
logMsg(multiply(2, 2));
logMsg(division(5, 0));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
