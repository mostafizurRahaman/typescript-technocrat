"use strict";
{
    const myProperty = "age";
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const a = getPropertyValue({
        name: "mostafiz",
        email: "ratul",
        skills: ["react", "javascript", "node js"],
        age: 20,
    }, "age");
}
