{
   //  Ternary Operator || Optional Chaining || Nullish Coalescing Operator

   const age: number = 18;

   if (age >= 18) {
      console.log("adult");
   } else {
      console.log("not adult");
   }

   //  check with Ternary Operator :
   const isAdult = age >= 18 ? "adult" : "not adult";
   console.log({ isAdult });

   // check with Nullish Coalescing Operator:
   type TUser = {
      name: string;
      age?: number;
      address: {
         permanentAddress?: string;
         presentAddress: string;
         city: string;
      };
   };

   let user: TUser = {
      name: "Mostafizur Rahaman",
      age: 20,
      address: {
         permanentAddress: undefined,
         presentAddress: "Lakshmipur",
         city: "Lakshmipur",
      },
   };

   let myAge = user?.age ?? "Have no age";
   console.log(myAge);

   let havePermanentAddress =
      user?.address?.permanentAddress ?? "Have No Permanent Address";

   console.log({ havePermanentAddress });

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
}
