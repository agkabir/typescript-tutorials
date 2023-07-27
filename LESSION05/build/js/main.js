"use strict";
// convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
// angle bracket representation
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Obs ! TS sees no problem here but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
// use cases of Assertion THE DOM
const img = document.querySelector('img');
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
img.src;
myImg.src;
