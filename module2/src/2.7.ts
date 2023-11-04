{
   // Generics Constraints with keyof operator :

   type TSkill = {
      html: number;
      css: number;
      bootstrap: number;
      tailwind: number;
      react: number;
      nextJS: number;
      javascript: number;
      typescript: number;
      express: number;
      nodejs: number;
      firebase: number;
   };

   type TSingleSkill =
      | "html"
      | "css"
      | "bootstrap"
      | "tailwind"
      | "react"
      | "nextJS"
      | "javascript"
      | "typescript"
      | "express"
      | "nodejs"
      | "firebase";

   type TSingleSkill2 = keyof TSkill;

   const skill: TSingleSkill = "javascript";

   const skill2: TSingleSkill2 = "nextJS";

   type IUser = {
      name: string;
      age: number;
      isVerified: boolean;
   };

   const user: IUser = {
      name: "Mostafizur Rahaman",
      age: 20,
      isVerified: true,
   };

   function getPropertyValue<T, K extends keyof T>(obj: T, key: K) {
      return obj[key];
   }

   const property1 = getPropertyValue(user, "isVerified");
   console.log(property1);
}
