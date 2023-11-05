"use strict";
{
    // Type Assertion in TypeScript :
    let random;
    random = "Mostafizur Rahaman";
    random.toUpperCase();
    random.toLocaleLowerCase();
    const convertKmToMeter = (a) => {
        if (typeof a === "string") {
            const converted = parseFloat(a) * 1000;
            return `convert ${a} km to ${converted} meter`;
        }
        if (typeof a === "number") {
            return a * 1000;
        }
    };
    const numberResult = convertKmToMeter(1000);
    const stringResult = convertKmToMeter("1000");
    const undefinedResult = convertKmToMeter(undefined);
    try {
        throw new Error("Unauthorized User");
    }
    catch (error) {
        const err = error;
        console.log(err.name);
    }
}
