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
