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
