{
   //  syntax :
   // function add(a: type , b : type):  returntype {
   //    return value
   // }

   // function add(a: number, b: number): number {
   //    return a + b;
   // }

   // add(2, 2);

   // add(3, "3"); // Errors : type string is not assignable to type number ;
   // add(true, 3); // Errors : type boolean is not assignable to type number

   // const add1 = (num1: number, num2: number): number => {
   //    return num1 + num2;
   // };

   // add1(2, 3);
   // add1(29, 29);

   // //  Errors Happens :
   // add1("2", 3); // Errors : Type string is not assignable to type number;
   // add(29, "mostafiuzr rahaman"); // Errors : Type String is not assignable to type number ;

   const newUser = {
      name: "mostafizur rahaman",
      balance: 0,
      addBalance(balance: number): void {
         this.balance = this.balance + balance;
         return;
      },
   };

   newUser.addBalance(90);
   newUser.addBalance(10);

   console.log(newUser);

   const numberArray: number[] = [1, 2, 3, 4, 5, 7];
   const squreArray: number[] = numberArray.map((i: number) => i * i);
   console.log(squreArray);
}
