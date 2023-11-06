"use strict";
{
    // access modifier:
    class BankAccount {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
    }
    class ChildrenBankAccount extends BankAccount {
        constructor(_id, name, _balance) {
            super(_id, name, _balance);
        }
        updateBalance(amount) {
            // protected type accessible into Derived class
            this._balance = this._balance + amount;
        }
    }
    const myBankAccount = new BankAccount(2, "Mostafizur Rahaman", 2000);
    const myChildrenAccount = new ChildrenBankAccount(4, "Mostafizur Rahaman", 2000);
    // we cann't access proteched properties from outside of  Class
    myBankAccount._balance = 20; // Errors: Because '_balance' is private
    myChildrenAccount.updateBalance(400);
    console.log(myChildrenAccount);
}
