"use strict";
var _a, _b, _c, _d;
{
    //  Ternary Operator || Optional Chaining || Nullish Coalescing Operator
    const age = 18;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    //  check with Ternary Operator :
    const isAdult = age >= 18 ? "adult" : "not adult";
    console.log({ isAdult });
    let user = {
        name: "Mostafizur Rahaman",
        age: 20,
        address: {
            permanentAddress: undefined,
            presentAddress: "Lakshmipur",
            city: "Lakshmipur",
        },
    };
    let myAge = (_a = user === null || user === void 0 ? void 0 : user.age) !== null && _a !== void 0 ? _a : "Have no age";
    console.log(myAge);
    let havePermanentAddress = (_c = (_b = user === null || user === void 0 ? void 0 : user.address) === null || _b === void 0 ? void 0 : _b.permanentAddress) !== null && _c !== void 0 ? _c : "Have No Permanent Address";
    console.log({ havePermanentAddress });
    const student = {
        name: "Mostafizur Rahaman",
        age: 20,
        address: {
            presentAddress: "Lakshmipur",
        },
        roll: 478889,
    };
    console.log((_d = student === null || student === void 0 ? void 0 : student.address) === null || _d === void 0 ? void 0 : _d.permanentAddress);
}
