# <p style="color: blue">Be A TypeScript Technocrat: <p>

## What It TypeScript:

-  ##### TypeScript is a language for application-scale JavaScript
-  ##### Typescript is an object oriented Programming Language that build on top of JavaScript with Extra Feature.
-  ##### Typescript is superset of JavaScript developed by microsoft.
-  ##### Typescript is strongly Typed programming Languages.
-  ##### Typescript Designed By Andres Hejlsberg with c# or .net specification .
-  ##### Typescript can be transpiled older versions of javaScript

## Whats Wrong with JavaScript ?

-  ##### JavaScript is an Dynamically Typed Language.
-  ##### JavaScript is not suitable for Large scale application.
-  ##### Lack of Strong Typing.
-  ##### only errors during runtime.
-  ##### Suffers type correction.
-  ##### Hard to find bugs.
-

## Can Browser Recognize TypeScript Code ?

-  ##### No, We need to `transpiled` typeScript by using complier like `babel, swc etc.`
-  ##### Typescript convert into javaScript then Browser can read the code.

## Benefits of TypeScript:

-  Support all JS Types.
   -  String
   -  Number
   -  Boolean
   -  Null
   -  Undefined
   -  Object
   -  Symbol
-  Give Some new types :
   -  Interface
   -  void
   -  Array
   -  Tuple
   -  Enum
   -  Union
   -  InterSection
-  Type Safety
-  Support Older Browser
-  Less Bugs
-  Increase Developer Productivity
-  Less Bugs && Less Testing.
-  Best Intelligence support.
-  Typescript give us an complier name `tsc` or `typescript complier`

## TypeScript Installation :

```ts
 npm i -g typescript
```

## TypeScript Configs or `tsconfig.js` Command:

```ts
   tsc --init
```

## TypeScript File Run:

1. ```ts
      tsc filename.ts
   ```
2. ```ts
      tsc --w file.ts
   ```
3. after include configs only use :

```ts
tsc - watch;
```

## How Many Types of Annotation In TypeScript ?

-  There are two types of annotation in TypeScript.
   -  Explicit
   -  Implicit

## What is Implicit Type In TypeScript ?

-  Implicit Types are types That Typescript infers based on the initial Value of
   the variable.
-  If we can declare and assign value in same line `typescript` infers the
   correct type.
-  Example:

```ts
// implicitly infers as string
const name = "Mostafizur Rahaman";

// implicitly infers as number:
const age = 19;
```

-  When we declared a variable but not assign type of the variable `typescript`
   infers the `type` as `any`. It's not recommended.
-  We can assign `any type of data ` on this variable.
-  Example :

```ts
// implicitly infer as  any
let a;

//  we can assign any type of data  to the variable like below:
a = 5; // number
a = "Mostafizur Rahaman ";
a = false;
```

## What is Explicit Type in TypeScript ?

-  Explicitly Types are `types` when we manually provided the type by using
   `typescript syntax.`
-  If you try to store others type data on that variable `typescript ` shows
   `errors`. which helps developers to solve `development errors`
-  Explicitly Type Syntax:

```ts
const variableName: type = value;
//  or
let age: type;
age = value;
```

-  Example:

```ts
//  one line
const name: string = "mostafizur rahaman";

//  multiple line :
let age: number;
age = 20;
age = 30;

//  if we try to assign string to age variable typescript give errors:
age = "20"; // show errors on code editor ;
```

## Basic Types In TypeScript :

-  ### `String` : We can implicitly Define a type of a variable in `Typescript` as `string`

   -  This type of variable on allows `string` type of data.
   -  If we try to store others type of data, gets an `error` like
      `Type 'number' is not assignable to type 'string'`
   -  Example:

   ```ts
   let fullName: string = "Mostafizur rahaman";

   // held errors:
   fullName = 40; // give an errors : type number is not assignable in type string.
   fullName = false; // type boolean is not assignable in type string
   fullName = []; // array is not assignable to type string .
   ```

-  ### `Number` : We can implicitly Define a type of a variable in `Typescript` as `number`

   -  This type of variable on allows only `number` type of data.
   -  If we try to store others type of data, gets an `error` like
      `Type 'string' is not assignable to type 'number'`
   -  Example:

   ```ts
   let age: number = 20;

   age = 50;
   age = 40;
   // held errors:
   age = "40"; // give an errors : type string is not assignable in type number.
   age = false; // type boolean is not assignable in type number
   age = []; // array is not assignable to type number .
   ```

-  ### `Boolean` : We can implicitly Define a type of a variable in `Typescript` as `boolean`

   -  This type of variable on allows only `boolean` type of data.
   -  If we try to store others type of data, gets an `error` like
      `Type 'string' is not assignable to type 'boolean'`
   -  Example:

   ```ts
   let isValid: boolean = false;

   isValid = true;

   // held errors:
   age = "40"; // give an errors : type string is not assignable in type number.
   age = false; // type boolean is not assignable in type number
   age = []; // array is not assignable to type number .
   ```

-  ### `Array` : we Can Implicitly Define a type of a variable in `Typescript` as `[]`.
   -  This type of variable allows only `array` type of data.
   -  If we try to store others type of data, gets an `error` like
      `Type 'string' is not assignable to type '[]'`
   -  There are many type of array `string[], number[], boolean[], tuple ` etc.

## `string[]`: we can implicitly Define a type of a variable in `TypeScript` as `string[]`

-  This type of variable allows only `string type data on array `. We can't
   store others type of data on array.Also we can't store other type of data on
   the variable.
-  Example:

```ts
let friends: string[];
//  string [] : only allows string
friends = ["mostafizur rahaman", "ratul hossain"];
friends.push("ratul hossain");

// we can't store other type data on string[]
friends = "mostafizur"; // Error: `Type string is not assignable to type string[]`
friends = 29; // Error: `Type number is not assignable to type string[]`
friends = [20, 29]; // Error: `Type number is not assignable to type string`
friends = [false, false, true]; // Error: `Type boolean is not assignable to type string`
friends.push(false); // Error: `Type boolean is not assignable to type string`
```

## `boolean[]`: we can implicitly Define a type of a variable in `TypeScript` as `Boolean[]`

-  This type of variable allows only `boolean type data on array `. We can't
   store others type of data on array.Also we can't store other type of data on
   the variable.
-  Example:

```ts
let isBoolean: boolean[];
//  only allows boolean type of array on this Variable :
isBoolean = [false, true, false, true];
isBoolean.push(true);

//  but other type of data is not assignable to array . Also Other type of data is not assignable to the variable.

isBoolean.push(20); // Type number is not assignable to type boolean.
isBoolean = 20; // Errors: Type number is not assignable to type boolean[];
isBoolean = false; // Errors : Type 'boolean' is not assignable to type 'boolean[]'.
isBoolean = "Mostafizur rahaman"; // Errors : type 'boolean' is not assignable to type boolean[].
isBoolean = ["ratul hossain", "rakib hossain", 20]; // Errors : Type 'string & number' is not assignable to type boolean
```

## `number[]`: we can implicitly Define a type of a variable in `TypeScript` as `number[]`

-  This type of variable allows only `number type data on array `. We can't
   store others type of data on array.Also we can't store other type of data on
   the variable.
-  Example:

```ts
let friendsAge: number[];
//  only array of number is assignable on this variable.
//  others type of array or data isn't assignable to this variable.
friendsAge = [20, 22, 50];
friendsAge.push(40);

//  Errors Happens:
friendsAge.push(false); // Errors : Type boolean isn't assignable  to type number.
friendsAge.push("rabby hossain"); // Errors : Type string  isn't assignable  to type number.
friendsAge = "rabby hossaain"; // Error : Type string isn't assignable to type number[]
friendsAge = [false, false]; // Errors : Type boolean isn't assignable to type number[];
```

## `Tuple` : Tuples in TypeScript are a special type of array that allow you to define a fixed number of elements with specific types in a specific order.

-  ### The rule of tuple :
   -  fixed length
   -  specific type
   -  specific order
-  Example:

```js
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
```
