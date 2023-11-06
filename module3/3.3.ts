{
   //   type guard:

   // write a function which get two parameter string or number  and return number if 2 parameter is number or return string if one or both parameter is string ;

   // type of:

   const getNumberAndString = (a: string | number, b: number | string) => {
      if (typeof a === "number" && typeof b === "number") {
         return a + b;
      } else {
         return a.toString() + b.toString();
      }
   };

   const res: number = getNumberAndString(20, 20) as number;
   const res1: string = getNumberAndString("20", 20) as string;
   const res2: string = getNumberAndString(20, "20") as string;
   const res3: string = getNumberAndString("20", "20") as string;
   console.log(res, res1, res2, res3);

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
}
