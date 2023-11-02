{
   //  Type Alias
   type TStudent = {
      name: string;
      age: number;
      contactNo?: string;
      gender: "male" | "female";
      address: string;
   };

   type TAdd = (num1: number, num2: number) => number;

   //  Type alias for array :
   type TFriends = string[];

   //  type alias for boolean :
   type TIsAdmin = boolean;

   const isAdmin: TIsAdmin = false;

   const friends: TFriends = [
      "ratul hossain",
      "hridoy hossain",
      "kamrul hasan",
   ];
   console.log(friends);

   //  Type for tuple :  length 2 name , age , isMarried
   type TUserData = [string, number, boolean];

   const user1: TUserData = ["mostafizur rahaman", 21, false];
   const user2: TUserData = ["ratul hossain", 20, false];
   console.log(user1, user2);

   //  Object Type :
   const student1: TStudent = {
      name: "Mostafiuzr rahaman",
      age: 20,
      contactNo: "01951976238",
      gender: "male",
      address: "lakshmipur",
   };

   const studnet2: TStudent = {
      name: "Ratul hossain",
      age: 20,
      gender: "male",
      address: "cumilla ",
   };

   const add: TAdd = (num1, num2) => {
      return num1 + num2;
   };

   add(20, 30); 
}
