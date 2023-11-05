{
   //  mapped in type in typescript:

   interface IStudent1 {
      id: number;
      registration: number;
      class: string;
      school: string;
      isRegular: boolean;
   }

   // Number Array in TypeScript :
   const numberArr: number[] = [1, 2, 4, 5, 6, 7, 8, 9];
   const stringArr: string[] = numberArr.map((i) => i.toString());
   console.log(stringArr);

   // lookup type  property value:
   type IRegistration = IStudent1["registration"];

   // we can also mapped type with  in operator :
   type ConvertTypes<T> = {
      [index in keyof T]: T[index];
   };

   type newType = ConvertTypes<{
      id: number;
      class: number;
      school: boolean;
      isRegular: "active" | "in-active";
   }>;
}
