{
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

   // conditional type checking syntax:
   //   type typeName = condition ? typeOne : typeTwo
   type typeName = a1 extends b1 ? TUser : IUser;

   //  nested Type :
   type d = a1 extends b1 ? TUser : a1 extends c1 ? IUser : undefined; // type is undefined

   //  checkPropertyExits

   type checkPropertyExits<T, Q> = T extends keyof Q ? true : false;

   type hasName = checkPropertyExits<'email', IUser> 
}
