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
