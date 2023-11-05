{
   // Generics wite Type Alias:

   type TPerson<T, K = undefined> = {
      name: string;
      email: string;
      mobile: {
         brand: string;
         model: string;
      };
      bike: T;
      car?: K;
   };

   const poorPerson: TPerson<{ brand: string; model: string; price: number }> =
      {
         name: "mostafizur rahaman",
         email: "mos@gmail.com",
         mobile: {
            brand: "oppo mobile",
            model: "f1",
         },
         bike: {
            brand: "Yamaha",
            model: "Y-120",
            price: 3000,
         },
      };

   const richUser: TPerson<
      { brand: string; model: string; price: number },
      { carName: string; price: number }
   > = {
      name: "ratul hossain",
      email: "ratul@gmail.com",
      mobile: {
         brand: "iphone 14 pro",
         model: "14 pro",
      },
      bike: {
         brand: "BMW S 1000 RR",
         model: "S 1000 RR",
         price: 20000000,
      },
      car: {
         carName: "Toyota",
         price: 50000000000,
      },
   };

   console.log(poorPerson, richUser);
}
