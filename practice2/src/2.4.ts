{
   // Generics with Interface :

   interface IUser<T, Q = null> {
      name: string;
      email: string;
      contactInfo: T;
      bike?: Q;
   }

   //   create a generics to create an array:
   interface IGenericsArr<T> {
      [index: number]: T;
   }

   const stringArr: IGenericsArr<string> = [
      "mostafizur",
      "ratul",
      "roman",
      "rakib",
   ];
   const numArr: IGenericsArr<number> = [1, 2, 0];

   interface IContactInfo {
      phone: string;
   }
   interface IBike {
      brand: string;
      model: string;
      price: number;
   }

   const user1: IUser<IContactInfo, IBike> = {
      name: "Tamim hossain",
      email: "mos@gmail.com",
      contactInfo: {
         phone: "11111",
      },
      bike: {
         brand: "Yamaha",
         model: "Y-2020",
         price: 333333,
      },
   };
   console.log(user1);

   const user2: IUser<IContactInfo> = {
      name: "Rakib hossain",
      email: "rakib@gmail.com",
      contactInfo: {
         phone: "3333333333",
      },
   };

   console.log(user2);
}
