{
   // constraints in typeScript :
   interface IPerson {
      name: string;
      email: string;
      skills: string[];
      age: number;
   }

   type skills = IPerson["skills"];
   // get type keys :
   type IPersonPropertyType = keyof IPerson;

   const myProperty: IPersonPropertyType = "age";

   const getPropertyValue = <T, Q extends keyof T>(obj: T, key: Q): T[Q] => {
      return obj[key];
   };

   const a = getPropertyValue<IPerson, "age">(
      {
         name: "mostafiz",
         email: "ratul",
         skills: ["react", "javascript", "node js"],
         age: 20,
      },
      "age"
   );
}
