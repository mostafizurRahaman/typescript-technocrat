{
   // Generics With Interface :
   interface IDeveloper<T, X = null> {
      name: string;
      computer: {
         brand: string;
         model: string;
         price: number;
      };
      smartWatch: T;
      bike?: X;
   }

   interface ISmartWatch {
      name: string;
      model: string;
      price: number;
   }

   interface IAppleWatch extends ISmartWatch {
      isSleepTracker: boolean;
      isPressureTacker: boolean;
   }

   type TBike = {
      model: string;
      speed: string;
   };

   //  poor developer Type :
   const poorDeveloper: IDeveloper<ISmartWatch> = {
      name: "Mostafizur",
      computer: {
         brand: "hp pavillion",
         model: "14 cetex",
         price: 75000,
      },
      smartWatch: {
         name: "smart watch 2.0",
         model: "something ",
         price: 1000,
      },
   };

   //  rich developer:
   const richDeveloper: IDeveloper<IAppleWatch, TBike> = {
      name: "Jhankar Mahbub",
      computer: {
         brand: "MAC BOOK ",
         model: "latest model",
         price: 2000000,
      },
      smartWatch: {
         name: "Apple watch",
         model: "latest model",
         price: 100000,
         isPressureTacker: true,
         isSleepTracker: true,
      },

      bike: {
         model: "YEMAHA",
         speed: "120CC",
      },
   };

   // here X default is null type
   type GenericUser<T, X = null> = {
      name: string;
      computer: T;
      bike?: X;
   };

   interface IComputer {
      model: string;
      price: number;
   }

   const user: GenericUser<IComputer> = {
      name: "Roman hossain",
      computer: {
         model: "HP Privillion",
         price: 75000,
      },
   };

   const user2: GenericUser<IComputer, TBike> = {
      name: "Jihad Hossain",
      computer: {
         model: "Apple Laptop",
         price: 2000000,
      },
      bike: {
         model: "Hero Bike122222",
         speed: "120cc",
      },
   };
}
