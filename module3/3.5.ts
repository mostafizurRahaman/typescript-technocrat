{
   // access modifier:

   class BankAccount {
      readonly id: number;
      public name: string;
      protected _balance: number;

      constructor(id: number, name: string, _balance: number) {
         this.id = id;
         this.name = name;
         this._balance = _balance;
      }
   }

   class ChildrenBankAccount extends BankAccount {
      constructor(_id: number, name: string, _balance: number) {
         super(_id, name, _balance);
      }

      updateBalance(amount: number) {
         // protected type accessible into Derived class
         this._balance = this._balance + amount;
      }
   }

   const myBankAccount = new BankAccount(2, "Mostafizur Rahaman", 2000);

   const myChildrenAccount = new ChildrenBankAccount(
      4,
      "Mostafizur Rahaman",
      2000
   );

   // we cann't access proteched properties from outside of  Class
   myBankAccount._balance = 20; // Errors: Because '_balance' is private

   myChildrenAccount.updateBalance(400);
   console.log(myChildrenAccount);
}
