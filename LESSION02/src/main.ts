// Basic types in ts 

let myName: string = "Alamgir";
let meaningOfLife: number;
let isLoading: boolean;
let message: any;
let album: string | number; // union type

myName = "Kabir";
meaningOfLife = 42;
isLoading = true;
message = 1984; // it can hold any data type
album = 'Van Halen'; // it can hold both string and number


const sum = (a:number, b:string) => {
    return a+b
}

// more datatypes
let postId: string | number
let isActive: number | boolean

let re:RegExp = /\w+/g

//console.log(myName)
