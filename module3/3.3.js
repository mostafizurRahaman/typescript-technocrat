"use strict";
{
    //   type guard:
    // write a function which get two parameter string or number  and return number if 2 parameter is number or return string if one or both parameter is string ;
    // type of:
    const getNumberAndString = (a, b) => {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        else {
            return a.toString() + b.toString();
        }
    };
    const res = getNumberAndString(20, 20);
    const res1 = getNumberAndString("20", 20);
    const res2 = getNumberAndString(20, "20");
    const res3 = getNumberAndString("20", "20");
    console.log(res, res1, res2, res3);
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
