{
   //  union type :

   // type TFrontEndDeveloper = "fakibazDeveloper" | "joniorFrontDeveloper";
   // type TBackendDeveloper = "fakibazDeveloper" | "joniorBackendDeveloper";
   // type TDeveloper = TFrontEndDeveloper | TBackendDeveloper;
   // type TFullStackDev = TFrontEndDeveloper & TBackendDeveloper;

   // const Developer1: TFrontEndDeveloper = "fakibazDeveloper";

   type TUser = {
      name: string;
      gender: "male" | "female";
      bloodGroup: "B+" | "B-" | "A+" | "A-" | "AB+" | "AB-" | "O-" | "O+";
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

   //  Intersection Type:  with & operator
   type TFrontEndDeveloper = {
      skills: string[];
      designation1: "frontEndDeveloper";
   };

   type TBackendDeveloper = {
      skills: string[];
      designation2: "backendDeveloper";
   };

   type FullStackDeveloper = TFrontEndDeveloper & TBackendDeveloper;

   const fullStackDevleoper: FullStackDeveloper = {
      skills: ["html", "css", "javascript", "node js", "express"],
      designation1: "frontEndDeveloper",
      designation2: "backendDeveloper",
   };

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
}
