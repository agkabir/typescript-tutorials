// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name: string;
  active?: boolean; // ? make it optional
  // albums: (string|number)[]
  album: stringOrNumberArray;
};

type UserId = stringOrNumber;

// literal types
let myName: "Kabir";
// myName = 'Alamgir' // will not work. it is similar to const but can be used as follows

let userName: "Alamgir" | "kabir" | "Abdullah";
userName = "Abdullah"; // it is possible but not something else which is not defined in the userName

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello!");
logMsg(add(2, 8));

let subtract = function (c: number, d: number): number {
  return c - d;
};

// usisng type alises
type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};

let division: mathFunction = (c, d) => {
  return c / d;
};

logMsg(multiply(2, 2));
logMsg(division(5, 0));
