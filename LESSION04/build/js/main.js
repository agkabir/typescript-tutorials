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
// default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(3, 5, 7, 9)); // in this example 3 will be assigen to a and rest will be assigned to nums
