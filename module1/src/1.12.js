"use strict";
{
    const userName = "Mostafizur Rahaman";
    const userName1 = null;
    console.log(userName, userName1);
    const search = (value) => {
        return value ? "searching " : "There is nothing search";
    };
    console.log(search(null));
    console.log(search("Mostafizur"));
    //  Unknown Type :
    const getConvertSpeedMeterPerSecond = (message) => {
        if (typeof message === "number") {
            const speed = (message * 1000) / 3600;
            console.log(`${speed} km^sec`);
        }
        else if (typeof message === "string") {
            let [result, unit] = message.split(" ");
            let speed = (parseFloat(result) * 1000) / 3600;
            console.log(`${speed} km^sec`);
        }
        else {
            console.log("Please Provide a correct value");
        }
    };
    getConvertSpeedMeterPerSecond(1000);
    getConvertSpeedMeterPerSecond("100 m^sec");
    // const getNumber = (num: number): never => {
    //    // this infinity loop that never stop
    //    // so the function can't reached it's end point;
    //    while (true) {
    //       console.log(num);
    //       num++;
    //    }
    // };
    // getNumber(21);
    const throwAnError = (message) => {
        throw new Error(message);
    };
    throwAnError("your are unAuthenticated user");
    //
}
