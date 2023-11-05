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

   type hasName = checkPropertyExits<"email", IUser>;

   function find_max(nums: number[]) {
      let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
      console.log(max_num);
      for (let num of nums) {
         if (num > max_num) {
            max_num = num;
         }
      }
      return max_num;
   }

   console.log(find_max([5,10,0,40])); 
}
