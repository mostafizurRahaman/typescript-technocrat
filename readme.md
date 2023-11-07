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

-  ### `String` : We can explicitly Define a type of a variable in `Typescript` as `string`

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

-  ### `Number` : We can explicitly Define a type of a variable in `Typescript` as `number`

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

-  ### `Boolean` : We can explicitly Define a type of a variable in `Typescript` as `boolean`

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

-  ### `Array` : we Can explicitly Define a type of a variable in `Typescript` as `[]`.
   -  This type of variable allows only `array` type of data.
   -  If we try to store others type of data, gets an `error` like
      `Type 'string' is not assignable to type '[]'`
   -  There are many type of array `string[], number[], boolean[], tuple ` etc.

## `string[]`: we can explicitly Define a type of a variable in `TypeScript` as `string[]`

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

## `boolean[]`: we can explicitly Define a type of a variable in `TypeScript` as `Boolean[]`

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

## `number[]`: we can explicitly Define a type of a variable in `TypeScript` as `number[]`

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

## Literal Type In TypeScript :

-  The literal types in TypeScript allow you to create types that express
   specific values. There are three sets of literal types available in
   TypeScript: strings, numbers, and booleans.
-  Literal Type contain fixed value.
-  Example:
   ```ts
   type Easing = "ease-in" | "ease-out" | "ease-in-out";
   type OneToFive = 1 | 2 | 3 | 4 | 5;
   ```

## Object Types:

-  Typescript has two main ways to define `object types`: using
   `anonymous object types` or using `named interfaces or types`.

-  ### Anonymous Object Type :

   -  `Anonymous object types` are defined `inline` when declaring a `variable`
      or `function` parameter.

   -  syntax :
      ```ts
      const variableName: { propertyName: type; propertyName: type  , ...} = {
         propertyName: "value",
         propertyName: "value",
      }
      ```
   -  Example :

   ```ts
   const car: { type: string; model: string; year: number } = {
      type: "Toyota",
      model: "Corolla",
      year: 2009,
   };
   ```

## Optional Type `(?)`:

-  to make a property in `TypeScript` optional, you can place a question mark
   after the property name.
-  Then optional property type will be specific types | undefined
-  Example:

```ts
interface userProps {
   name: string;
   company?: string; // the type will be string | undefined
}

let user: userProps = {
   name: "Mostafizur Rahaman",
   company: "Universe It Institute",
};

user = {
   name: "Ratul hossain",
};
```

## Readonly Modifier In TypeScript:

-  `Readonly` modifier makes properties `immutable`.
-  After using readonly on a property we can only assign data on an object.
-  we can't update the value after assigning.
-  Syntax:

```ts
const user: { readonly name: string; readonly age: number } = {
   name: 'Mostafizur Rahaman"
   age: 20
};

//  Errors;

user.name 'ratul hossain' // Errors: Cannot assign to 'name' because it is a read-only
user.age = 22 // Errors : Cannot assign to 'age' because it is a read-only

```

## Function Type in TypeScript :

### Explicit Function Type write:

-  #### Normal Function :

   -  syntax:

   ```ts
   function add(parameter1: type, parameter2: type): returnType {
      // other calculation code here
      return value;
   }
   ```

   -  Example :

   ```js
   function add(a: number, b: number): number {
      return a + b;
   }

   add(2, 2);

   add(3, "3"); // Errors : type string is not assignable to type number ;
   add(true, 3); // Errors : type boolean is not assignable to type number
   ```

-  #### Arrow Function :

   -  syntax:

   ```ts
   const functionName (parameter1: type, parameter2: type): returnType => {
      return parameter1 + parameter2
   }


   ```

-  Example:

   ```ts
      const add1 = (num1: number, num2: number): number => {
         return num1 + num2;
      };


      add1(2, 3); add1(29, 29);

      // Errors Happens : add1("2", 3); // Errors : Type string is not assignable to
      type number; add(29, "mostafiuzr rahaman"); // Errors : Type String is not
      assignable to type number ;

   ```

# Spreed Operator In TypeScript :

-  By using `JavaScript` `spreed operator ` we can spreed or copy any object or
   array

   ```ts
   const friends: string[] = [
      "Ismail hossain",
      "Redowan Shawon",
      "ratul hossain",
   ];
   const others: string[] = ["Ratul santo", "sifat hossain ", "nayeam hossain"];

   // friends.push(others);
   // Errors : Argument of type 'string[]' is not assignable to parameter of type 'string'

   friends.push(...others);
   console.log(friends);

   const mentor1 = {
      typescript: "Mezbaul abedin",
      redux: "mir hossain",
      dbs: "mizan hossain",
   };

   const mentor2 = {
      next: "tanmay",
      prizma: "firoz vai",
      cloud: "nahid hassan bulbul vai",
   };

   const mentorList = {
      ...mentor1,
      ...mentor2,
   };
   console.log(mentorList);
   ```

### Rest operator in Typescript:

-  By using rest operator we can receive array of parameter in rest parameter :

```ts
function sendGreetingToFriends(...friends: string[]): void {
   friends.forEach((i) => {
      console.log(
         `Hey ${i}, Congratulation in our typescript technocrat course `
      );
   });
}

sendGreetingToFriends(
   "ismail fahim",
   "jahed hossain",
   "hridoy hossain",
   "ratul hossain"
);
```

## Object `Destructuring` In JavaScript :-

-  When we try to destructure any variable we can not define type in destructure
   object or array ;

```js
const myInfo = {
   name: {
      firstName: "Mostafizur",
      middleName: "Rahaman",
      lastName: "Fahim",
   },
   age: 30,
   phoneNumber: "01951976238",
   email: {
      primaryEmail: "mostafizurrahaman0401@gmail.com",
      secondaryEmail: "fahim74@gmail.com",
   },
   bloodGroup: "B+",
};

const {
   name: { firstName, middleName, lastName },
   age,
   phoneNumber,
   email: { primaryEmail, secondaryEmail },
   bloodGroup,
} = myInfo;

console.log(
   firstName,
   middleName,
   lastName,
   age,
   phoneNumber,
   primaryEmail,
   secondaryEmail,
   bloodGroup
);
```

## Array `Destructuring` in TypeScript:-

```ts
const friends = [
   "Roman Hossain",
   "Ratul Hossain",
   "Rahim Hossain",
   "Rakib hossain",
   "Rajjack Hossain",
   "rohomot ullah",
];

const [, , bestFriends, ...others] = friends;
console.log(bestFriends, others);
```

## `Type alias` -> "টাইপের উপনাম" in TypeScript

-  In TypeScript, type aliases can be used to give a type `new name`.
-  They are similar to `interfaces`,
-  But they are more flexible as They can not only `alias` only object type but
   also primitive types aliases and `others types` aliases
-  Syntax :

```ts
//  if primitive data
type TPrimitive = type;
//  object type :
type TObject = {
   propertyName: type;
   propertyName: type;
};
//  array type :
type typeName = string[];
type TRoll = number[];
type TBoolean = boolean[];

// tuple type: example
type typeName = [string, boolean, string, number];


//  function type in Type alias :
type TFunctionName = (parameter: type, parameter: type): number
```

-  ### String in Type Alias:

   -  we can define `type alias` for string :
   -  Syntax:

   ```ts
   type TUserName = string;
   ```

-  ### Number in Type Alias:

   -  we can define `type alias` for number :
   -  Syntax:

   ```ts
   type TUserRoll = number;
   ```

   -  Example:

   ```ts
   type TUserRoll = number;
   let roll: TUserRoll = 10;
   ```

-  ### Boolean in Type Alias:

   -  we can define `type alias` for boolean :
   -  Syntax:

   ```ts
   type TIsAdmin = boolean;
   ```

   -  Example:

   ```ts
   //  type alias for boolean :
   type TIsAdmin = boolean;

   const isAdmin: TIsAdmin = false;
   ```

-  ### Object in Type Alias:

   -  we can define `type alias` for Object :
   -  syntax :

   ```ts
   //  object type :
   type TObject = {
      propertyName: type;
      propertyName: type;
   };
   ```

   -  Example :

   ```ts
   //  Type Alias
   type TStudent = {
      name: string;
      age: number;
      contactNo?: string;
      gender: "male" | "female";
      address: string;
   };
   // use type here
   const student1: TStudent = {
      name: "Mostafiuzr rahaman",
      age: 20,
      contactNo: "01951976238",
      gender: "male",
      address: "lakshmipur",
   };

   // reuse same type here
   const studnet2: TStudent = {
      name: "Ratul hossain",
      age: 20,
      gender: "male",
      address: "cumilla ",
   };
   ```

-  ### Array in Type Alias:

   -  we can define array in type alias:
   -  syntax:

   ```js
   type TTypeName = type[];
   ```

   -Example :

   ```ts
   //  Type alias for array :
   type TFriends = string[];

   const friends: TFriends = [
      "ratul hossain",
      "hridoy hossain",
      "kamrul hasan",
   ];
   console.log(friends);
   ```

-  ### Tuple in Type Alias:

   -  We can declare tuple in Type alias :
   -  syntax :

   ```ts
      type TTypeName = [type, type, type, ...]
   ```

   -  example:

   ```ts
   //  Type for tuple :  length 2 name , age , isMarried
   type TUserData = [string, number, boolean];

   const user1: TUserData = ["mostafizur rahaman", 21, false];
   const user2: TUserData = ["ratul hossain", 20, false];
   console.log(user1, user2);
   ```

-  ### Arrow function Type In Type Alias

   -  we can declare arrow function in type alias.
   -  syntax:

   ```ts
   type TArrowFunc = (parameter: type, parameter: type, ...) => returnType;
   ```

   -  Example:

   ```ts
   // Type Addition :
   type TAdd = (num1: number, num2: number) => number;

   // addition function :
   const add: TAdd = (num1, num2) => {
      return num1 + num2;
   };

   add(20, 30);
   ```

## Union Type: Union type allows a value to be more than one type.

-  We can define multiple type by using union type.
-  Union type can used to define a variable that can be different types.
-  Union type define by using `pipe ( | )`.
-  syntax :

```ts
type TypeName = type | type | type;
```

-  Example :

```ts
// literal type with union type :
type TUserName = "Mostafizur" | "Fahim" | "Roman";

const userName: TUserName = "Mostafizur";

//  for primitive type :

type TAge = string | age | undefined;
const age: TAge = "tweenty";
const age1: TAge = 20;
const age3: TAge = undefined;

// type objectType & null:
type User = {
   name: string;
   gender: "male" | "female";
   bloodGroup: "B+" | "A+" | "A-" | "B-" | "O+" | "O-" | "AB-" | "AB+";
};
```

-  Example 2:

```js
type TUser = {
   name: string,
   gender: "male" | "female",
   bloodGroup: "B+" | "B-" | "A+" | "A-" | "AB+" | "AB-" | "O-" | "O+",
};
let user: TUser | null = null;
user = {
   name: "Mostafiuzr",
   gender: "male",
   bloodGroup: "B+",
};

let user1: TUser | null = null;
user1 = {
   name: "mukta",
   gender: "female",
   bloodGroup: "B+",
};

console.log(user, user1);
```

## Intersection Type :

-  Intersection types are way to combine multiple types into a single type.
-  Intersection types contain all features of every single types which combined.
-  We can define Intersection type by using `&` operator .
-  syntax :

```ts
type TypeOne = {
   name: string;
   age: number;
};
type TypeTwo = {
   profession: string;
};
type typeThree = typeOne & TypeTwo;

// here typeThree contains name, age , profession property
```

-  Example :

```ts
type TBird = {
   eyes: number;
   wings: number;
   fly: TFly;
};

type TEat = () => void;
type TFly = () => void;
type TMen = {
   legs: number;
   eat: TEat;
};

// intersection type is here: The TOwl contains all features of TBird & TMen
type TOwl = TBird & TMen;

const owl: TOwl = {
   eyes: 2,
   wings: 2,
   legs: 2,
   fly: () => {
      console.log("flying ......");
   },
   eat: () => {
      console.log("eating ..............");
   },
};

console.log(owl);
owl.fly();
owl.eat();
```

## `?` Changed Name With Use Case :

-  ### Ternary Operator : "? "

   -  Ternary operator is a conditional operator.
   -  Ternary Operator get three operands.
   -  Syntax: `condition ? expression : expression`
   -  If the condition is `truthy` Ternary operator execute the first
      `expression`.
   -  Otherwise execute the second `expression`

   ```ts
   type TAge = number;

   const age: TAge = 20;

   const isAdult: boolean = age >= 18 ? "Adult" : "Not Adult";
   console.log(isAdult);
   ```

-  ### Nullish Coalescing Operator: (??)
-  Nullish Coalescing Operator is a Logical Operator.
-  Nullish Coalescing Operator `return` it's `right hand Operand` if
   its` left hand side operand` is `null` or `undefined`
-  It's worked based on `null` or `undefined`.
-  Syntax : `operand ?? "default value"`
-  Example :

   ```ts
   type TUserName = string | null | undefined;

   const user1 : TUserName = 'Mostafizur Rahaman";
   const user2: TUserName = '';
   const user2: TUserName= null;

   const isAvail1 = user1 ?? "User One doesn't Exist";
   const isAvail2 = user2 ?? "User Two doesn't Exist"
   const isAvail3 = user3 ?? "User Three doesn't Exist"
   // output1: isAvail1 =Mostafizur Rahaman
   // output2: isAvail2 = User Two doesn't Exist
   // output3: isAvail3 = User Three doesn't Exist.


   const value = null ?? "default value";
   console.log(value);
   // output: value = "default value"
   ```

-  ### Optional Chaining : (?.)

   -  Optional chaining is a feature introduced in ES2020 that allows for safe
      and concise access to nested object properties. It uses the ?. operator to
      check if a reference to the left is undefined or null, and if so, it short
      circuits and returns undefined. Otherwise, it continues the chain of
      access checks.
   -  Syntax: `obj?.propertyName?.properTyeName?.propertyName`
   -  Example:

   ```ts
   //  Optional Chaining :
   type TStudent = {
      name: string;
      age: number;
      address: {
         permanentAddress?: string;
         presentAddress: string;
      };
      roll: number;
   };

   const student: TStudent = {
      name: "Mostafizur Rahaman",
      age: 20,
      address: {
         presentAddress: "Lakshmipur",
      },
      roll: 478889,
   };

   console.log(student?.address?.permanentAddress);
   ```

## Nullable Type In TypeScript :

-  `Nullable` type helps us to define a type for variable either `specific type`
-  Union type helps us to define nullable type. or `null`.
-  syntax:

```ts
type TNullAbleString = string | null;

const userName: TNullAbleString = "Mostafizur Rahaman";
const userName1: TNullAbleString = null;

console.log(userName, userName1);

const search = (value: string | null): string => {
   return value ? "searching " : "There is nothing search";
};

console.log(search(null));
console.log(search("Mostafizur"));
```

## `unknown` type in typeScript:

-  unknown which is the type-safe counterpart of any
-  Anything else assignable to unknown.

```ts
let random: unknown;
random = "Hello World!";
random = {};
random = 7;
random = null;
random = Math.random();
random = ["USA", "Colombia", "India", "Canada"];
random = new Country();
random = undefined;
```

-  unknown is not assignable to others types. It's is the main different between
   unknown and any.

```ts
let random: unknown;
let foo: unknown;
let bar: any;
foo = random; // Correct
bar = random; // Correct

let stringValue: string;
let numberValue: number;
let arrayValue: [];
let countryValue: Country;
stringValue = random; // Error: Type 'unknown' is not assignable to type 'string'
numberValue = random; // Error: Type 'unknown' is not assignable to type 'number'
arrayValue = random; // Error: Type 'unknown' is not assignable to type '[]'
countryValue = random; // Error: Type 'unknown' is not assignable to type 'Country'
```

-  Example :

```ts
//  Unknown Type :

const getConvertSpeedMeterPerSecond = (message: unknown): void => {
   if (typeof message === "number") {
      const speed = (message * 1000) / 3600;
      console.log(`${speed} km^sec`);
   } else if (typeof message === "string") {
      let [result, unit] = message.split(" ");
      let speed = (parseFloat(result) * 1000) / 3600;
      console.log(`${speed} km^sec`);
   } else {
      console.log("Please Provide a correct value");
   }
};

getConvertSpeedMeterPerSecond(1000);
getConvertSpeedMeterPerSecond("100 m^sec");
```

### Never Type In TypeScript :

-  TypeScript introduced a new type never, which indicates the values that will
   never occur.

-  The never type is used when you are sure that something is never going to
   occur.
-  For example, you write a function which will not return to its end point or
   always throws an exception.

-  Type `never` has no value. Otherwise type `void` have value `undefined` or
   `null`.

```js
function throwError(errorMsg: string): never {
   throw new Error(errorMsg);
}

throw new Error("Your are unauthenticated user");
```

### Type `Assertion` in TypeScript: with `as`

-  Type assertion in TypeScript is a way to explicitly specify the type of a
   value, even when TypeScript cannot infer it automatically.
-  If developer have more information about type of a variable , he can
   explicitly define a type with `as` type ;
-  syntax :

```ts
// use value as type

variableName as type;
```

-  Example :

   ```ts
   // Type Assertion : as

   let random: any;

   // assign string :
   random = "next level Development";
   // random. // its not show the suggestion or properties of string when use include . (dot)

   // so we can use here type assertion to declare the type string

   const upperCase: string = (random as string).toUpperCase();
   console.log(upperCase);

   // assign number :
   random = 22;
   //  convert floated number:
   const precision = (random as number).toFixed();
   console.log(precision);

   // assign array :
   random = ["mostafizur rahaman", "ratul hossain", 20, 40];
   (random as []).forEach((i) => console.log(i));

   type TUser = {
      name: string;
      age: number;
   };

   random = { name: "mostafizur", age: 27 };
   const age = (random as TUser).age;
   const name = (random as TUser).name;
   console.log(name, age);
   ```

-  Example 2: With A function ;

   ```ts
   const getKgToGm = (value?: string | number): string | number | undefined => {
      if (typeof value === "string") {
         const convertedValue = parseFloat(value) * 1000;
         return `converted value : ${convertedValue}`;
      }

      if (typeof value === "number") {
         return value * 1000;
      }
   };

   const result1: string = getKgToGm("10") as string;
   const result2: number = getKgToGm(20) as number;
   const result3: undefined = getKgToGm(undefined) as undefined;
   console.table([result1, result2, result3]);
   ```

-  Example : For Error Handling :

   ```ts
   type TCustomError = {
      name: string;
      stack: string;
      message: string;
   };

   try {
      throw new Error("UnAuthenticated User");
   } catch (error) {
      const err = error as TCustomError;
      console.table([err.name, err.message]);
   }
   ```

## `Interface` in TypeScript :

-  Interfaces, on the other hand , define a contract must be object adhere to.
-  Interface are also be used to represent type definition of an object.
-  Interface only used for `object`, `array` and `function` type definition.
-  Interface are `extends` single or multiple `interface` or `type alias`

```ts
type TUser = {
   name: string;
   email: string;
};

interface IUser {
   roll: number;
   age: number;
}

interface ICommonUser extends IUser, TUser {
   contactNo?: string;
   address: {
      permanent: string;
      present: string;
   };
}
```

-  Syntax:

```ts
interface IInterFaceName {
   propertyName: type;
   propertyName: type;
}
```

-  ### `Object` Type with `Interface `:

   ```ts
   interface IPersonal {
      name: string;
      dob: Date;
   }

   interface IContact {
      email: string;
      phone: string;
   }

   interface IAddress {
      permanent: string;
      present: string;
      city: string;
      post: number;
   }

   interface IUser extends IPersonal, IContact {
      status: "active" | "in-active";
      address: IAddress;
   }

   const user: IUser = {
      name: "mostafizur",
      dob: new Date(),
      email: "most@gmail.com",
      phone: "1111111111",
      address: {
         permanent: "lakshmipur",
         present: "lakshmipur",
         city: "lakshmipur",
         post: 3701,
      },
      status: "active",
   };
   ```

-  ### `Array` Type In TypeScript:

   -  We can define array type in typeScript with `interface`;
   -  syntax :

   ```ts
   interface IArray {
      [index: number]: number;
   }

   interface IStringArray {
      [index: number]: string;
   }
   ```

   -  Example :

   ```ts
   interface INumber {
      [index: number]: number;
   }

   const numArr1: INumber = [1, 3, 4, 5];
   ```

-  ### `Function` Type with `Interface` :

   -  We can define a type for function with `interface`.
   -  syntax:

   ```ts
   interface TAdd {
      (parameter: type, parameter: type): returnType;
   }
   ```

   -  Example:

   ```ts
   interface IAdd {
      (num1: number, num2: number): number;
   }

   const add1: IAdd = function add1(num1, num2) {
      return num1 + num2;
   };
   ```

## `Interface extends` & `Type alias Intersection`

-  We can Extends any `interface ` and `type` which we define previously
-  we can premix type and interface with `extends` in `interface` and
   `intersection` in `type` & `interface`
-  ### Extends and Intersection:
-  Example:

```ts
type TUser = {
   name: {
      firstName: string;
      lastName: string;
   };
};

interface IUser extends TUser {
   roll: number;
}

type TUserWithStatus = IUser & { status: "active" | "in-active" };

interface INewUser extends TUserWithStatus {
   address: string;
}

//  implement whole type here:

const newUser: INewUser = {
   name: {
      firstName: "mostafizur",
      lastName: "rahaman",
   },
   roll: 3,
   address: "laskhmipur",
   status: "active",
};
```

## `Generics` In TypeScript : -

-  TypeScript generics allow us to create reusable components or functions that
   can handle multiple types.
-  With generics, we can parameterize types and create type-safe and reusable
   code.
-  We can create generics for `function`, `array`, `object` and `classes`
-  syntax :

```ts
type GenericsName<parameter, parameter> = GeneralType<arg, arg>;
type GenerisName<parameter, parameter> = [parameter, parameter];
```

-  ### Generics For Array :

   -  We can use generics for array to normalize or generalize and make
      reuseable array type
   -  To normalize array we can use capital `Array` in javaScript
   -  for `string[] ` we can use `Array<string>`
   -  for `number[]` we can ues `Array<number>`
   -  for `boolean[]`, we can use `Array<boolean>`
   -  for `IInterface[]`, we can use `Array<Interface>`
   -  Syntax:

   ```ts
   // Generics Array:
   type GenericName<parameter> = Array<parameter>;

   // resuse the generics as need:

   //for Boolean: just pass boolean as parameter:
   const boolArr: GenericName<boolean> = [false, true];

   // for String: just pass string :
   const strArr: GenericsName<string> = ["one", "two", "three"];

   // for number: just pass number as parameter:
   const numArr: GenericsName<number> = [1, 2, 3, 4, 5, 6];

   // for object : just pass the pattern or Interface or type :
   const studentArr: GenericsName<{
      name: string;
      age: number;
      isPresent: boolean;
   }> = [
      { name: "mostafiz", age: 20, isPresent: true },
      { name: "mostafiz", age: 20, isPresent: true },
   ];
   ```

   -  Example :

   ```ts
   //  Generics Type:
   type GenericsArr<T> = Array<T>;

   //Interface :
   interface IUser {
      name: string;
      roll: number;
   }

   const numberArr: GenericsArr<number> = [1, 2, 3, 4, 5, 5];
   //use generics for string []
   const friendsArr: GenericsArr<string> = [
      "Mostafizur rahaman",
      "ratul hossain",
      "hridoy hossain",
   ];

   // generalize for boolean
   const booleanArr: GenericsArr<boolean> = [
      false,
      true,
      false,
      true,
      false,
      true,
   ];

   // generalize for User
   const studentArr: GenericsArr<IUser> = [
      { name: "Mostafizur rahaman ", roll: 2 },
      { name: "Fahim hossain ", roll: 3 },
      { name: "Roman hossain ", roll: 4 },
      { name: "hridoy hossain ", roll: 5 },
   ];
   ```

-  ### `Tuple` in Generics :

   -  We can normalize or generalize any `Tuple` type with Generics;
   -  Know the length of tuple and specify type and order.
   -  syntax:

   ```ts
   // this tuple get only three parameter
   type GenericsTuple<parameter1, parameter2, parameter2> = [
      parameter1,
      parameter2,
      parameter3
   ];

   const tuple1: GenericsTuple<boolean, string, boolean> = [
      false,
      "one",
      false,
   ];
   ```

-  ### `Interface` in Generics:

   -  We can define `interface` generics ;
   -  syntax :

   ```ts

      // here T  & X are parameter
   interface IInterfaceName<T, X> = {
      name: string;
      computer: parameter1,
      bike: parameter2
   }
   ```

   -  Example:

   ```ts
   // Generics With Interface :
   interface IDeveloper<T, X = null> {
      name: string;
      computer: {
         brand: string;
         model: string;
         price: number;
      };
      smartWatch: T;
      bike?: X;
   }

   interface ISmartWatch {
      name: string;
      model: string;
      price: number;
   }

   interface IAppleWatch extends ISmartWatch {
      isSleepTracker: boolean;
      isPressureTacker: boolean;
   }

   type TBike = {
      model: string;
      speed: string;
   };

   //  poor developer Type :
   const poorDeveloper: IDeveloper<ISmartWatch> = {
      name: "Mostafizur",
      computer: {
         brand: "hp pavillion",
         model: "14 cetex",
         price: 75000,
      },
      smartWatch: {
         name: "smart watch 2.0",
         model: "something ",
         price: 1000,
      },
   };

   //  rich developer:
   const richDeveloper: IDeveloper<IAppleWatch, TBike> = {
      name: "Jhankar Mahbub",
      computer: {
         brand: "MAC BOOK ",
         model: "latest model",
         price: 2000000,
      },
      smartWatch: {
         name: "Apple watch",
         model: "latest model",
         price: 100000,
         isPressureTacker: true,
         isSleepTracker: true,
      },

      bike: {
         model: "YEMAHA",
         speed: "120CC",
      },
   };
   ```

-  ### Default value of `parameter in Generics`:

   -  we can use default If `user` not provided the parameter value;
   -  syntax:

   ```ts
   // here i pass the default type for X parameter

   interface IUser<T, X = null> {
      name: string;
      computer: T;
      bike?: X;
   }

   // here X default is null type
   type GenericUser<T, X = null> = {
      name: string;
      computer: T;
      bike?: X;
   };

   interface IComputer {
      model: string;
      price: number;
   }

   const user: GenericUser<IComputer> = {
      name: "Roman hossain",
      computer: {
         model: "HP Privillion",
         price: 75000,
      },
   };

   const user2: GenericUser<IComputer, TBike> = {
      name: "Jihad Hossain",
      computer: {
         model: "Apple Laptop",
         price: 2000000,
      },
      bike: {
         model: "Hero Bike122222",
         speed: "120cc",
      },
   };
   ```

-  ### `Function` with `Generics`:

   -  we can define generic `function` type with `Generics`.
   -  Which helps to reuse `function` type.
   -  syntax:

   ```ts
   /**
    * it's a function which return an array depends on data type
    * @T : is type params which receive dynamic type for function
    */
   const getArr = <T>(parameter: T): T[] => {
      return [parameter];
   };

   const stringArr: string[] = getArr<string>("one"); // returns ['one']
   const numberArr: number[] = getArr<number>(20); // returns [2]
   const boolean: boolean[] = getArr<boolean>(false); // returns [false]
   /**
    * Write function which get two data and return a tuple:
    * @T : T is a type params which receive dynamic  type as param
    * @K : K is a another params which also work like @T .
    *
    */

   function createTuple2<T, Q>(a: T, b: Q): [T, Q] {
      return [a, b];
   }

   const one: [string, number] = createTuple2<string, number>("one", 1);
   const two: [number, string] = createTuple2<number, string>(1, "one");
   console.log(one);
   console.log(two);
   ```

-  ### `Constraint` in Generics :

   -  With can `generics` `constraint` we can force to `provide` some specific
      property.
   -  Constraints are used to limit the kinds of types that a type parameter can
      accept.
   -  Constraints ensure that the properties accessed within the function are
      available and compatible with the type parameter.
   -  By using `extends` keyword we can `ensure` types which must need to assign
   -  আমরা যখন Generics তৈরী করি তখন যদি কিছু নিদিষ্ট প্রোপ্রটি বা টাইপের ডাটা
      আমরা পেতে চাই তখন আমরা extends keyword ব্যবহার করে কোনো টাইপ এলিয়াস বা
      ইন্টারফেইসকে extends করতে পারি।
   -  এর মাধ্যমে আমরা ইউজারকে কিছু নিদিষ্ট প্রোপ্রারটি নিশ্চিত করতে বাধ্য করতে
      পারি।

   -  Example:

   ```ts
   // Constraints IN Generics:

   function addStudent<T extends { name: string; email: string; roll: number }>(
      student: T
   ) {
      const course = "Next Level Development";
      return {
         ...student,
         course,
      };
   }

   //  student one :

   const student1 = addStudent({
      name: "mostafizur rahaman",
      email: "mostafizur@gmail.com",
      roll: 22,
      age: 20,
      haveWatch: true,
   });

   const student2 = addStudent({
      name: "Ratul hossain",
      email: "ratul@gmail.com",
      roll: 21,
      isCar: false,
   });

   const student3 = addStudent({
      name: "redowan shawon",
      email: "redowan@gmail.com",
      roll: 3,
      emni: "emni",
   });
   ```

-  ### Constraints `keyof` in TypeScript:

   -  The `keyof` keyword is used in TypeScript to extract the key type from an
      object type.
   -  `keyof` operator returns an union type :
   -  Example with `function`:

   ```ts
   type IUser = {
      name: string;
      age: number;
      isVerifed: boolean;
   };

   type key = keyof IUser; // return  key = 'name' | 'age' | 'isVerified'
   ```

   -  Example:

   ```ts
   const user: IUser = {
      name: "Mostafizur Rahaman",
      age: 20,
      isVerified: true,
   };
   // here use the keyof and extends the  T to make limit the type with constraint.
   function getPropertyValue<T, K extends keyof T>(obj: T, key: K) {
      return obj[key];
   }

   const property1 = getPropertyValue(user, "isVerified");
   console.log(property1);
   ```

-  ## Promise In TypeScript:

   -  Promises in TypeScript are used to handle asynchronous operations and
      provide better control over the flow of code.
   -  ### Creating a New Promise: to create a promise use `new Promise() ` constructor. it's get a `callback` function as parameter, which get two parameter `resolve` & `reject`.

   ```ts
   const myPromise = new Promise((resolve, reject) => {
      // Asynchronous code here
   });
   ```

   -  ### Type of promise :

      -  we can pass types `generically` afther `Promise` with `<type>` format:

      ```ts
      const myPromise = new Promise<string>((resolve, reject) => {
         // asynchronous code is here.
      });
      ```

   -  Type of Promise in TypeScript with Example :

   ```ts
   // type of promise
   type TSomeThing = { message: "something" };

   const createPromise = (): Promise<TSomeThing> => {
      return new Promise<TSomeThing>((resolve, reject) => {
         const data: TSomeThing = { message: "something" };
         if (data) {
            return resolve(data);
         } else {
            return reject("Promise not resolved");
         }
      });
   };

   const loadData = async (): Promise<TSomeThing> => {
      const data: TSomeThing = await createPromise();
      console.log(data);
      return data;
   };

   loadData();
   ```

   -  ### Load Data from `external server`:

      -  We can load data from external server and the data return a `promise`
         when we try to `fetch`
      -  Example:

      ```ts
      interface ITodo {
         userId: number;
         id: number;
         title: string;
         completed: boolean;
      }

      const getTodo = async (): Promise<ITodo> => {
         const res = await fetch(
            `https://jsonplaceholder.typicode.com/todos/1`
         );
         const data: ITodo = await res.json();
         console.log(data);
         return data;
      };

      getTodo();
      ```

## <p style="color:#f00 ">Condition Type In typeScript </p>

-  we can create conditional type in `typescript`. by using `ternary operator.`
-  syntax :

```ts
type typeName = type1 extends type2 ? type3 : type4;
```

-  ### Nestd Condition :
-  syntax:

```ts
// conditional type in typeScript :
type a1 = string;
type b1 = number;
type c1 = undefined;

type TUser = {
   name: string;
   email: string;
};

interface IUser {
   name: string;
   age: number;
   phone: string;
}

// nested condition in typescript:
type d = a1 extends b1 ? TUser : a1 extends c1 ? IUser : undefined; // type is undefined
```

-  ### `Conditional Type with` Generics:
-  Example :

```ts
interface IUser {
   name: string;
   age: number;
   phone: string;
}

//  checkPropertyExits

type checkPropertyExits<T, Q> = T extends keyof Q ? true : false;

type hasName = checkPropertyExits<"email", IUser>;
```

## `Lookup type` or `get Propertype` in typescript

-  we can get any property in typescript of object by using `type alias` or
   `interface`
-  syntax:

```ts
interface IUser {
   name: string;
   email: string;
   phone: number;
}

//  type getPropertyType = typeName['propertyName']

type getProperType = IUser["name"]; // type is string
type getEmailType = IUser["email"]; // type is string
type getPhoneType = IUse["phone"]; // type is number
```

## `Mapped type ` - in TypeScript

-  By using mapped type in typescript we can mapped every property
   of` type alias` or `interface`.
-  mapping syntax :

```ts
type TAreaConverted<T> = {
   [key in keyof T]: T[key];
};
```

-  Example :

```ts
type TAreaNumber = {
   height: number;
   width: number;
};

// lookup Type in Typescript :
type THeight = TAreaNumber["height"];

// map to convert convert TAreaNumber to other type :

// this type convert to  boolean type on . it's fixed . but we need more flexibility

// type TAreaConverted = {
//    [index in "height" | "width" | "depth"]: boolean;
// };

// use keyof and and provide a type
// it converted only TAreaNumber key to boolean type
// type TAreaConverted = {
//    [key in keyof TAreaNumber]: TAreaNumber[key];
// };

type TAreaConverted<T> = {
   [key in keyof T]: T[key];
};

const AreaString: TAreaConverted<{
   height: string;
   width: number;
   depth: boolean;
}> = {
   height: "10vh",
   width: 3000,
   depth: "",
};
```

-  ## `Utility` type in TypeScript :

   -  ### 1. `Pick`: `Pick<objectType, unionOfObjectTypeKey>`: By using `Pick` uitily , we

      can `pick` specific type from an exitings objectType.

      -  Pick get two parameter.
      -  `First Parameter:` get an `Object Type`
      -  `second parameter` : get an `union` of keys `name`
      -  Syntax:

      ```ts
      // extings object type :
      interface IPerson {
         name: string;
         email: string;
         age: number;
         blood: "B+" | "B-" | "A+" | "A-" | "O+" | "O-" | "AB+" | "AB-";
      }

      // create a new type by picking specific key type from exitings object type

      type IModifiedPerson = Pick<IPerson, "name" | "email" | "age">;
      //  the type will be   ->   { name: string;  email: string;  age: number;  }
      ```

   -  ### 2. `Omit<objectType, unionOfObjectKeyName>` : By using `Omit` we can create a new Type by removing `some sepecific keys` from `objecttype`

      -  `Omit` is opposite of `Pick`.
      -  syntax:

      ```ts
      // exiting type :
      interface IPerson {
         name: string;
         email: string;
         age: number;
         blood: "B+" | "B-" | "A+" | "A-" | "O+" | "O-" | "AB+" | "AB-";
      }

      // create a new type with omit:
      type IModifiedPerson = Omit<IPerson, "name" | 'email" >;
      // it's remove 'name' and 'email' key from new Type;
      // The new type will be:
        /*
         {
            age: number,
            blood: "B+" | "B-" | "A+" | "A-" | "O+" | "O-" | "AB+" | "AB-";
         }
         */
      ```

   -  ### 3. `Partail<objectType>` : `Partial` make all properties `optional`.

      -  syntax:

      ```ts
      // exiting type:
      interface prevType {
         name: string;
         age: number;
         email: string;
         isValid: boolean;
      }

      // new type after use Partial :
      type partialType = Partial<prevType>;
      // the partialType will be like below:

      /* 
         type partialType = {
            name: string | undefined;
            age: number | undefined;
            email: string | undefined;
            isValid: boolean | undefined;
         };
      */
      ```

   -  ### 4. `Required<objectType>` : `Required` utility makes all properties `required`.

      -  It is the oposite of `Partial` utility.
      -  Syntax:

      ```ts
      // exiting type:
      interface prevType {
         name?: string;
         age?: number;
         email: string;
         isValid?: boolean;
      }

      // convert all properties required with Required uitility:

      type RequiredType = Required<prevType>;
      // the new type will be like below:

      /* 
      
          {
               name: string;
               age: number;
               email: string;
               isValid: boolean;
         }       
      
      */
      ```

   -  ### 5. `Readonly<prevType>`: `Readonly` utilites convert all properties `readonly`

      -  `readonly` only `assignable` when we declare the variable.
      -  `but` we cann't modified `readonly` property.
      -  syntax:

      ```ts
      // exiting type  :
      interface IUser {
         name: string;
         age: number;
         email: string;
         isValid: boolean;
      }

      // make all properties readonly :
      type ReadonlyUser = Readonly<IUser>;
      // the type will be :
      /*
            type ReadonlyUser = {
               readonly name : string; 
               readonly age  : number; 
               readonly email: string;
               readonly isValid: boolean;
      
            }       
         */

      const user1: ReadonlyUser = {
         name: "mostafizur rahaman",
         email: "m@gmail.com",
         age: 2,
         isValid: true,
      };

      // try to modify :
      user1.name = "ratul hossain"; // Error: cann't assign 'name' because it's readonly property.
      ```

   -  ### 6. `Record<keyType, valueType>`: `Record` properties helps us to create a `flexiable` object type

      -  ##### Example: 1. `Record<string, string>` Here all properties will be string

         because we `fixed` the type for value is `string`

         ```ts
         type TUser = Record<string, string>;

         let user: TUser = {
            a: "mostafizur",
            b: "ratul hossain",
            c: "ismail",
         };

         user.age = 2; // Errors: Type 'number' cann't assignable to type "string"
         ```

      -  ##### Example: 2. `Record<string, number>` Here all properties will be number

         because we `fixed` the type for value is `number`

         ```ts
         type TUser = Record<string, number>;

         let user: TUser = {
            a: 20,
            b: 30,
            c: 21,
         };

         user.d = "thirty"; // Errors: Type 'string' cann't assignable to type "number"
         ```

      -  ##### Example 3: `Record<string, unknown>`: the object properties allows all types of data.

         ```ts
         type TUser = Record<string, unknown>;
         const user1: TUser = {
            name: "mostafizur rahaman",
            email: "m@gmal.com",
            age: 20,
            isValid: true,
            haveMoney: undefined,
         };

         user1.bike = { brand: "Yamaha", model: "Y-222" };
         ```

---

---

---

# Object Oreinted Programming In TypeScript(OOP)

## What is OOP?

-  A Programming Paradiam That organizes and models Software.
-  Object-oriented programming (OOP) is a programming paradigm that organizes
   software design around objects, which are instances of classes.

## What is Paradiam?

-  Paradiam is a `model` or `style` to write and organize code.

## How many types paradiams in Programming ?

-  There a several types of paradiam in Programming.
   1. Procudural Programming Paradiam.
   2. Declarative Programming.
   3. Functional Programming
   4. Object Oriented Programming
   5. Event Driven programming

## Building Block of OOP:

-  Inheritance
-  Polymorphism
-  Abstruction
-  Encampsulation

## Class In JavaScript & TypeScript :

-  create a `class` by using `class` keyword.
-  classname startwith `Capitalital Letter`
-  in class body define the class `variable` and we also initilize them
-  then `create` a `contructor` which helps dynamically initilize or `assign`
   value
-  we can update any `variale` of class in `contructor` with `this.variable` =
   `contructorParameter`
-  Then out side of `constructor`, we can define `common function for class `
-  we also access any `variable` of `class` into `function` with
   `this.variableName`
-  Example :

```ts
class Animal {
   public name: string;
   public species: string;
   public sound: string;

   // initialize value with constructor
   constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
   }

   // function of class:
   makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
   }
}
```

-  Now We can create an instance of class and use that :
-  Example:

```ts
// create an isntance for men:
const men = new Animal("Mostafizur Rahaman", "men", "bok bok");
men.makeSound();
console.log(men);

// create an instance for cat:
const cat = new Animal("Pusi Cat", "cat", "meaw meaw");
console.log(cat);
cat.makeSound();
```

## Use `Parameter properties` in Class:

-  `Parameter properties` in `TypeScript` allow us to `simplify` our
   `property declarations` by `initializing` them `directly` in the
   `class constructor`
-  when we add an ` access modifier` `in front of parameter` of
   `constructor parameter` `typeScript compiler` will automatically initialize
   the `corresponding property` with the provided value.
-  And we don't need use `this.variable = parameter`.
   `TypeScript automitically initialize the value `
-  Example:

```ts
// the previous class and this one works same:
class Animal {
   constructor(
      public name: string,
      public species: string,
      public sound: string
   ) {}

   makeSound() {
      console.log(`The ${this.name} says ${this.sound} `);
   }
}
```

## `Inheritance` In `JavaScript & TypeScript`-

-  JavaScript uses `prototype based inheritance`. Every object has a prototype,
   and when a method of the object is called then JavaScript tries to find the
   right function to execute from the prototype obj.

-  The `JavaScript inheritance` is a `mechanism` that allows us to
   `create new classes` on the basis of `already existing classes`.
-  It provides `flexibility` to the `child class `to reuse the `methods` and
   `variables` of a `parent class`

-  We don't need to `initialize` `Parent` class variable in `children class`
-  But we need to define a new `constructor` for children with `every` parameter
   of `parent` and `chlidren`
-  we use `extends` `keyword` to `inherit` any `class`
-  call `super` to send the `children` `constructor` value to `parenet`
-  Example :

```ts
// create a common class for every person:
class Person {
   name: string;
   age: number;
   email: string;

   constructor(name: string, age: number, email: string) {
      this.name = name;
      this.age = age;
      this.email = email;
   }

   sleeping(hour: number) {
      console.log(`I will sleeping for ${hour}`);
   }
}

// Create a student class:
class Student extends Person {
   roll: number;

   constructor(name: string, age: number, roll: number, email: string) {
      super(name, age, email);
      this.roll = roll;
   }
}

const student1 = new Student("mostafiuar", 2, 2, "mostafizur rahaman");
student1.sleeping(2);

console.log(student1);

class Teacher extends Person {
   designation: string;

   constructor(name: string, age: number, email: string, designation: string) {
      super(name, age, email);
      this.designation = designation;
   }

   teaching(subject: string) {
      console.log(`I am a teacher of ${subject}`);
   }
}

const teacher1 = new Teacher(
   "Riaz Uddin",
   35,
   "riaz@gmail.com",
   "head teacher"
);
console.log(teacher1);
teacher1.teaching("English");
teacher1.sleeping(4);

// create another children with by inheriting Person class
class WebDev extends Person {
   skills: string[];

   constructor(name: string, age: number, email: string, skills: string[]) {
      super(name, age, email);
      this.skills = skills;
   }

   coding() {
      console.log(`${this.name} code with ${this.skills.join(" * ")}`);
   }
}

const webdev1 = new WebDev("Mostafizur Rahaman", 20, "mos@gmail.com", [
   "react",
   "nextJs",
   "javaScript",
   "TypeScript",
]);

console.log(webdev1);

webdev1.coding();
```

## `Type Guard` In typeScript:

-  ### `typeof` guard:

   -  The ` typeof`` type guard ` checks whether a `variable` is of a `certain`
      `primitive type`, such as `string`, `number`, `boolean`, or `symbol`.
   -  Example :

   ```ts
   const getAddNumberORString = (
      a: number | string,
      b: number | string
   ): number | string => {
      if (typeof a === "number" && typeof b === "number") {
         return a + b;
      } else {
         return a.toString() + b.toString();
      }
   };
   ```

-  ### `in` guard:

   -  The `in` type guard check when we need to check a property is avialble
      into an `object`.
   -  `in` guard used to check , is the `specific property` aviable into
      `object` or `not`?
   -  Example:

   ```ts
   // type guard in :

   type TNormalPerson = {
      name: string;
   };

   type TBipPerson = {
      email: string;
   } & TNormalPerson;

   const normalPerson: TNormalPerson = { name: "Mostafizur rahaman " };
   const adminPerson: TBipPerson = { name: "Mostafizur", email: "m@gmail.com" };

   const getAccess = (person: TBipPerson | TNormalPerson): string => {
      if ("email" in person) {
         return `Congratulations, ${person.name} you can get access`;
      } else {
         return `So Sad You can't get access `;
      }
   };

   const out1: string = getAccess(normalPerson);
   const out2: string = getAccess(adminPerson);

   console.log(out1);
   console.log(out2);
   ```

-  `instanceof` guard:

   -  `instanceof` guard used when dealing with classes or their instance.
   -  Example:

   ```ts
   class Animal {
      name: string;
      species: string;
      sound: string;

      constructor(name: string, species: string, sound: string) {
         this.name = name;
         this.species = species;
         this.sound = sound;
      }

      makeSound() {
         console.log(`The ${this.name} says ${this.sound}`);
      }
   }
   // create a  children class for dog by extending Animal
   class Dog extends Animal {
      constructor(name: string, species: string, sound: string) {
         super(name, species, sound);
      }

      // make dog sound:
      makeBark() {
         console.log(`The ${this.name} is Barking `);
      }
   }

   // create a children class for cat extending Animal:
   class Cat extends Animal {
      constructor(name: string, species: string, sound: string) {
         super(name, species, sound);
      }

      // make sound for cat;
      makeMeaw() {
         console.log(`The ${this.name} says ${this.sound}`);
      }
   }

   // create an instance for dog
   const dog = new Dog("Shadow Dog", "dog", "gew gew");

   // create an instance for cat:
   const cat = new Dog("Black Cat", "cat", "meaw meaw");

   // create another instance for pig:
   const pig = new Animal("Pink Pig", "pig", "make some sweet sounds");

   const getAnimalAndMakeSound = (animal: Animal) => {
      if (animal instanceof Dog) {
         animal.makeBark();
      } else if (animal instanceof Cat) {
         animal.makeMeaw();
      } else {
         animal.makeSound();
      }
   };

   getAnimalAndMakeSound(dog);
   getAnimalAndMakeSound(cat);
   getAnimalAndMakeSound(pig);
   ```

## `is` predicate in typeScript.

-  `is` predicate is used to define a user defined type when the `function`
   `return type` is boolean.

-  syntax:

```ts
variable as Type;
```

-  Example :

```ts
// create a animal:
class Animal {
   name: string;
   species: string;
   sound: string;

   constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
   }

   makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
   }
}
// create a  children class for dog by extending Animal
class Dog extends Animal {
   constructor(name: string, species: string, sound: string) {
      super(name, species, sound);
   }

   // make dog sound:
   makeBark() {
      console.log(`The ${this.name} is Barking `);
   }
}

// create a children class for cat extending Animal:
class Cat extends Animal {
   constructor(name: string, species: string, sound: string) {
      super(name, species, sound);
   }

   // make sound for cat;
   makeMeaw() {
      console.log(`The ${this.name} says ${this.sound}`);
   }
}

// create an instance for dog
const dog = new Dog("Shadow Dog", "dog", "gew gew");

// create an instance for cat:
const cat = new Dog("Black Cat", "cat", "meaw meaw");

// create another instance for pig:
const pig = new Animal("Pink Pig", "pig", "make some sweet sounds");

// we can handle smartly handle check type by using function:
const isDog = (animal: Animal): animal is Dog => {
   return animal instanceof Dog;
};

// here used is predicate:
const isCat = (animal: Animal): animal is Cat => {
   return animal instanceof Cat;
};

const getAnimalAndMakeSound = (animal: Animal) => {
   if (isDog(animal)) {
      animal.makeBark();
   } else if (isCat(animal)) {
      animal.makeMeaw();
   } else {
      animal.makeSound();
   }
};

getAnimalAndMakeSound(cat);
getAnimalAndMakeSound(dog);
getAnimalAndMakeSound(pig);
```

## Access Modifire in `Class`

-  ### Public Modifier:

   -  `Public`: Generally all `class` properties are `public`.
   -  `public` properties are `accessiable` outside of class.
   -  we don't need `use` explicitly `public` modifier.
   -  Example :

   ```ts
   class BankAccount {
      public id: number;
      public name: string;
      public balance: number;

      constructor(id: number, name: string, balance: number) {
         this.id = id;
         this.name = name;
         this.balance = balance;
      }
   }

   const myBankAccount = new BankAccount(2, "Mostafizur Rahaman", 2000);

   // public properties are changeable from outside of class .
   myBankAccount.id = 20;
   myBankAccount.balance = 20;
   console.log(myBankAccount);
   ```

-  ### `Readonly` modifier : Readonly `modifier ` makes properties readonly.

   -  `readonly` properties only assignable when we create `new instance`.
   -  we cann't modified the `property`.
   -  Example :

   ```ts
   class BankAccount {
      public readonly id: number;
      public name: string;
      public balance: number;

      constructor(id: number, name: string, balance: number) {
         this.id = id;
         this.name = name;
         this.balance = balance;
      }
   }

   const myBankAccount = new BankAccount(2, "Mostafizur Rahaman", 2000);

   // public properties are changeable from outside of class .

   myBankAccount.id = 20; //cannot assign to 'id' because it is a read-only property.

   myBankAccount.balance = 20;
   console.log(myBankAccount);
   ```

   -  ### `Private`:

      -  `Private` modifier makes properties `unaccesable` from `outside` of
         `class`
      -  `private` property only `accessable` into `class`
      -  we can access private property from `derived class` or
         `inherited class `
      -  conbention: start private property name with `_` like :
         `private _balance : number`
      -  Example :

      ```ts
      class BankAccount {
         private readonly id: number;
         public name: string;
         private _balance: number;

         constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
         }
      }

      const myBankAccount = new BankAccount(2, "Mostafizur Rahaman", 2000);

      // we cann't access private properties from outside of  Class

      myBankAccount._balance = 20; // Errors: Because '_balance' is private

      console.log(myBankAccount);
      ```

   -  ### `Protected:`

      -  `protected` property also don't accessiable from outside of `class`
      -  `protected` property only `assiable` on class on `derived class ` or
         `inherited class`
      -  Example:

      ```ts
      class BankAccount {
         readonly id: number;
         public name: string;
         protected _balance: number;

         constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
         }
      }

      class ChildrenBankAccount extends BankAccount {
         constructor(_id: number, name: string, _balance: number) {
            super(_id, name, _balance);
         }

         updateBalance(amount: number) {
            // protected type accessible into Derived class
            this._balance = this._balance + amount;
         }
      }

      const myBankAccount = new BankAccount(2, "Mostafizur Rahaman", 2000);

      const myChildrenAccount = new ChildrenBankAccount(
         4,
         "Mostafizur Rahaman",
         2000
      );

      // we cann't access proteched properties from outside of  Class
      myBankAccount._balance = 20; // Errors: Because '_balance' is private

      myChildrenAccount.updateBalance(400);
      console.log(myChildrenAccount);
      ```

## `Getter` & `Setter` in JavaScript `Class`:

-  If we define any `function` `getter` & `setter` method, we can access the
   `function` from class `instance` as property.
-  ### Getter : `getter function` start with `get` keyword:

   -  By using getter we can get data from class.
   -  we can access getter functon as `property of class instance`
   -  Example:

   ```ts
   // Getter & Setter :

   class Person {
      public name: string;
      public email: string;
      public age: number;

      constructor(name: string, email: string, age: number) {
         this.name = name;
         this.email = email;
         this.age = age;
      }

      // getter and setter :

      // getter with get : -
      get getAge() {
         return `${this.name}'s age is ${this.age}`;
      }

      // setter function
      set setAge(age: number) {
         this.age = this.age + age;
      }
   }

   const person1 = new Person("Mostafizur Rahaman", "mos@gmail.com", 20);
   const person2 = new Person("Ratul hossain", "ratul@gmail.com", 15);
   const person3 = new Person("Rakib Hossain", "m@gmail.com", 20);

   // create function to get instance age :

   function getPersonAge(person: Person) {
      // access getter function as property :
      return person.getAge;
   }

   const a1 = getPersonAge(person1);
   const b1 = getPersonAge(person2);
   const c1 = getPersonAge(person3);
   console.log(a1, b1, c1);
   ```

-  ### `Setter`: setter function start with `set function` keyword.

   -  we can access the setter `function` as property of `class instance`
   -  Example:

   ```ts
   // Getter & Setter :

   class Person {
      public name: string;
      public email: string;
      public age: number;

      constructor(name: string, email: string, age: number) {
         this.name = name;
         this.email = email;
         this.age = age;
      }

      // getter and setter :

      // getter with get : -
      get getAge() {
         return `${this.name}'s age is ${this.age}`;
      }

      set setAge(age: number) {
         this.age = this.age + age;
      }
   }

   const person1 = new Person("Mostafizur Rahaman", "mos@gmail.com", 20);
   const person2 = new Person("Ratul hossain", "ratul@gmail.com", 15);
   const person3 = new Person("Rakib Hossain", "m@gmail.com", 20);

   // setter function in  javaScript :
   person1.setAge = 5;
   person1.setAge = 5;
   person2.setAge = 40;
   person2.setAge = 30;
   person3.setAge = 1;
   person3.setAge = 50;

   console.log(person1.age);
   console.log(person2.age);
   console.log(person3.age);
   ```

-  ## `Static` :
-  To create a `static variable` in `javaScript class` , you can use
   `static keywrod` before `variable name`
-  `Static method` convert the variable only for class .
-  `static variables ` are accessiable directly as `Class Property`. You can not
   access the `variable` with `instance`

   ```ts
   class Sleep {
      public static sleepingHours: number = 8;

      increment() {
         // when we use static variable we need access the variable with ClassName.propertyName
         Sleep.sleepingHours = Sleep.sleepingHours + 1;
      }
   }
   ```

-  when update `static` variable of `class` with `one` instance its will update
   the property for all `instance` of that class.
-  Static `variable ` allocate the `same memory location`
-  // we need to access the static variable as Class property . we can not find
   the property as in instance. const hours: number = Sleep.sleepingHours;
   console.log(hours);

   ```ts
   class Sleep {
      public static sleepingHours: number = 8;

      // increment sleeping hours:
      increment() {
         // when we use static variable we need access the variable with ClassName.propertyName
         Sleep.sleepingHours = Sleep.sleepingHours + 1;
      }

      // decrement Sleeping hours:
      decrement() {
         Sleep.sleepingHours = Sleep.sleepingHours - 1;
      }
   }

   // we need to access the static variable as Class property . we can not find the property as  in instance.
   const hours: number = Sleep.sleepingHours;
   console.log(hours);

   // create two instance to update the static variable:
   const sleep1 = new Sleep();
   const sleep2 = new Sleep();

   // here  we have two instance:
   sleep1.increment(); // increment for sleep1; but it update for all instance or full class .
   sleep2.increment();
   ```

-  To create a static method in a JavaScript class, you can use the static
   keyword before the method name.
-  Static methods are called directly on the class itself, without creating an
   instance of the class.

   ```ts
   class Counter {
      // static modifier use one memory Reference for variable.
      // from any instance we can change value , it's will be change for every instance. This main after using static, static makes the variable only for Class.
      // After  make a variable static , we we need access the variable with className not this keyword.
      public static counter: number = 0;

      static increment() {
         Counter.counter = Counter.counter + 1;
      }

      static decrement() {
         Counter.counter = Counter.counter - 1;
      }
   }

   // create an instance for counter :
   const one = new Counter();
   const two = new Counter();

   // increment counter for one instance:
   Counter.increment();
   Counter.increment();

   //  we need to call the increment with Class method not instance method. After making static it's only accessible with className.
   Counter.increment();

   console.log(Counter.counter);
   console.log(Counter.counter);
   ```
