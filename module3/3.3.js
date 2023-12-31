"use strict";
{
    //   type guard:
    // write a function which get two parameter string or number  and return number if 2 parameter is number or return string if one or both parameter is string ;
    // type of:
    const getAddNumberORString = (a, b) => {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        else {
            return a.toString() + b.toString();
        }
    };
    const normalPerson = { name: "Mostafizur rahaman " };
    const adminPerson = { name: "Mostafizur", email: "m@gmail.com" };
    const getAccess = (person) => {
        if ("email" in person) {
            return `Congratulations, ${person.name} you can get access`;
        }
        else {
            return `So Sad You can't get access `;
        }
    };
    const out1 = getAccess(normalPerson);
    const out2 = getAccess(adminPerson);
    console.log(out1);
    console.log(out2);
}
