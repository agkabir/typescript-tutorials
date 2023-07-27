type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three // more specific

// angle bracket representation
let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => { 
    if (c === 'add') return a + b
    return ''+a+b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string
// Obs ! TS sees no problem here but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

