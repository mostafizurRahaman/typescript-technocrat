{
   //Interface :
   interface IUser {
      name: string;
      roll: number;
   }

   //  Generics Type:
   type GenericsArr<T> = Array<T>;

   const numberArr: GenericsArr<number> = [1, 2, 3, 4, 5, 5];
   const friendsArr: GenericsArr<string> = [
      "Mostafizur rahaman",
      "ratul hossain",
      "hridoy hossain",
   ];
   const booleanArr: GenericsArr<boolean> = [
      false,
      true,
      false,
      true,
      false,
      true,
   ];

   const studentArr: GenericsArr<IUser> = [
      { name: "Mostafizur rahaman ", roll: 2 },
      { name: "Fahim hossain ", roll: 3 },
      { name: "Roman hossain ", roll: 4 },
      { name: "hridoy hossain ", roll: 5 },
   ];

   //  Tuple Generics:

   type GenericTuple<T, K> = [T, K];

   //   user and status tuple
   const userTuple: GenericTuple<IUser, boolean> = [
      { name: "Mostafizur", roll: 2 },
      true,
   ];

   console.log(userTuple);
}
