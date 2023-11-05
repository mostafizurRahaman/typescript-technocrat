{
   type TUser = {
      name: string;
      email: string;
   };

   // intersection type in typescript:
   type TPoorUser = {
      phone: string;
   } & TUser;

   // Interface In typeScript :

   interface IUser {
      name: string;
      email: string;
   }

   interface IPoorUser extends IUser {
      phone: string;
   }

   interface IRichUser extends IPoorUser {
      money: number;
      bike: boolean;
      laptop: boolean;
      car: boolean;
   }

   const user1: IUser = {
      name: "MOstafizur  rahaman",
      email: "fahim@gmail.com",
   };

   const poorUser: IPoorUser = {
      name: "Mostafizur rahaman",
      email: "mos@gmail.com",
      phone: "01951976238",
   };

   const richUser: IRichUser = {
      name: "Mostafizur rahaman",
      email: "fahim@gmail.com",
      phone: "019",
      money: 200000000000,
      bike: true,
      car: true,
      laptop: true,
   };

   //  Array with interface :

   interface IStrArr {
      [index: number]: string;
   }

   // Generics Array with Interface :
   interface GenericIStrArr<T> {
      [index: number]: T;
   }

   const stringArr: IStrArr = ["mostafizur", "ratul", "rahaman"];
   console.log(stringArr);

   const numberArr: GenericIStrArr<number> = [1, 2, 3, 4];
   const booleanArr: GenericIStrArr<boolean> = [false, true];
   const userArr: GenericIStrArr<IUser> = [
      {
         name: "mostafizur",
         email: "mos@gmail.com",
      },
      {
         name: "Roman Hossain",
         email: "roman@gmail.com",
      },
   ];
}
