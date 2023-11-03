"use strict";
{
    // Type Assertion : as
    let random;
    // assign string :
    random = "next level Development";
    // random. // its not show the suggestion or properties of string when use include . (dot)
    // so we can use here type assertion to declare the type string
    const upperCase = random.toUpperCase();
    console.log(upperCase);
    // assign number :
    random = 22;
    //  convert floated number:
    const precision = random.toFixed();
    console.log(precision);
    // assign array :
    random = ["mostafizur rahaman", "ratul hossain", 20, 40];
    random.forEach((i) => console.log(i));
    random = { name: "mostafizur", age: 27 };
    const age = random.age;
    const name = random.name;
    console.log(name, age);
    const getKgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `converted value : ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = getKgToGm("10");
    const result2 = getKgToGm(20);
    const result3 = getKgToGm(undefined);
    console.table([result1, result2, result3]);
    try {
        throw new Error("UnAuthenticated User");
    }
    catch (error) {
        const err = error;
        console.table([err.name, err.message]);
    }
}
