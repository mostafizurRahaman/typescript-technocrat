//  implicitly get the type as string;
// const test = "Mostafizur rahaman ";

//  Basic Type In Typescript :
// let fullName: string = "Fahim";
// fullName = 40;

//  number type :
// let roll: number = 478889;
// roll = 478889;
// roll = '478889'   // gives error on editor because the variable allow only number;

// let isValid: boolean = false;
// isValid = true;
// isValid = [];

// let friends: string[];
// the array can store any type of data in every index
// friends = ["ratul hossain", "kabir"];
// friends = [20, 20]; //error
// friends = [false, "ratul hossaain", "rakib hossain", "fahim hossain"]; //error on first index.

// let isBoolean: boolean[];
//  only allows boolean type of array on this Variable :
// isBoolean = [false, true, false, true];
// isBoolean.push(true);

//  but other type of data is not assignable to array . Also Other type of data is not assignable to the variable.

// isBoolean.push(20); // Type number is not assignable to type boolean.
// isBoolean = 20; // Errors: Type number is not assignable to type boolean[];
// isBoolean = false; // Errors : Type 'boolean' is not assignable to type 'boolean[]'.
// isBoolean = "Mostafizur rahaman"; // Errors : type 'boolean' is not assignable to type boolean[].
// isBoolean = ["ratul hossain", "rakib hossain", 20];

// let friendsAge: number[];
// //  only array of number is assignable on this variable.
// //  others type of array or data isn't assignable to this variable.
// friendsAge = [20, 22, 50];
// friendsAge.push(40);

// //  Errors Happens:
// friendsAge.push(false); // Errors : Type boolean isn't assignable  to type number.
// friendsAge.push("rabby hossain"); // Errors : Type string  isn't assignable  to type number.
// friendsAge = "rabby hossaain"; // Error : Type string isn't assignable to type number[]
// friendsAge = [false, false]; // Errors : Type boolean isn't assignable to type number[];

let myTuple: [string, number, boolean];

myTuple = ["ratul hossain", 20, false];
myTuple[0] = "Mostafizur rahaman";
myTuple[1] = 20;
myTuple[2] = true;
myTuple[2] = true;

//  Error Happens :
//  first index of the tuple only allow string :
myTuple[0] = false; // Error : Type boolean is not assignable to type string;
myTuple[0] = 20; // Error : Type number is not assignable to type string;
myTuple[1] = "stirng"; // Error: Type string is not assignable to type number
myTuple[1] = false; // Error: Type boolean is not assignable to type number
myTuple[2] = "any string"; // Error: Type string is not assignable to type boolean
myTuple[2] = 20; // Error: Type number is not assignable to type boolean

//  can't include new index :
myTuple[3] = "Ratul hossain"; // Errors : Type '"Ratul hossain"' is not assignable to type 'undefined'.
