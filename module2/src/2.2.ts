{
   // // Learn Interface :
   // type TUser1 = {
   //    name: string;
   //    age: number;
   // };

   // type TUserRole1 = TUser1 & { roll: number };

   // interface IUser1 {
   //    name: string;
   //    age: number;
   // }

   // interface IUserRole1 extends IUser1 {
   //    roll: number;
   // }

   // const user: TUserRole1 = {
   //    name: "mostafizur",
   //    age: 20,
   //    roll: 20,
   // };

   // const user1: IUserRole1 = {
   //    name: "ratul hossain",
   //    age: 2,
   //    roll: 2,
   // };

   // //  combine Interface with type and type with interface

   // type TBird = {
   //    isFly: boolean;
   //    wings: number;
   // };

   // interface IBird {
   //    isEat: () => void;
   //    legs: number;
   // }

   // type TCommonBird = TBird & IBird;
   // interface ICommonBird extends TBird, IBird {
   //    haveEyes: boolean;
   // }

   // const bird: ICommonBird = {
   //    isFly: true,
   //    wings: 2,
   //    isEat: () => console.log("eating ............."),
   //    legs: 2,
   //    haveEyes: true,
   // };

   // console.log(bird);

   // //  Function with interface an type alias :
   // type TAdd = (a: number, b: number) => number;

   // const add: TAdd = (num1, num2) => num1 + num2;
   // add(1, 2);

   // interface IAdd {
   //    (num1: number, num2: number): number;
   // }

   // const add1: IAdd = function add1(num1, num2) {
   //    return num1 + num2;
   // };

   // // add1(2, 3);

   // // // Array Type in interface :

   // interface INumber {
   //    [index: number]: number;
   // }

   // const numArr1: INumber = [1, 3, 4, 5];

   // type TUser = {
   //    name: {
   //       firstName: string;
   //       lastName: string;
   //    };
   // };

   // interface IUser extends TUser {
   //    roll: number;
   // }

   // type TUserWithStatus = IUser & { status: "active" | "in-active" };

   // interface INewUser extends TUserWithStatus {
   //    address: string;
   // }

   // const newUser: INewUser = {
   //    name: {
   //       firstName: "mostafizur",
   //       lastName: "rahaman",
   //    },
   //    roll: 3,
   //    address: "laskhmipur",
   //    status: "active",
   // };

   // interface IAddition {
   //    (num1: number, num2: number): number;
   // }

   // const Addition: IAddition = function (num1, num2) {
   //    return num1 * num2;
   // };

   interface IStrArr {
      [index: number]: string;
   }

   const friendsArray: IStrArr = [
      "faruk hossain",
      "ratul hossain",
      "tarik hossaain",
   ];
   console.log(friendsArray);
}
