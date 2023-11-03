{
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
}
