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

// using interfaces
// interface mathFunction{
//   (a:number, b:number):number
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

let division: mathFunction = (c, d) => {
  return c / d;
};

logMsg(multiply(2, 2));
logMsg(division(5, 0));

// optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));

// Rest parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(3, 5, 7, 9)); // in this example 3 will be assigned to a and rest will be assigned to nums

// never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

// example of a never type
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    // this is a never return type because it goes infinitely to make it normal we have to terminate it
    if (i > 100) break; // now it is return type void
  }
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value==='number'?true:false
}

// use of type never
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string'
  if (isNumber(value)) return "number";
  return createError('This should never happen!')
}