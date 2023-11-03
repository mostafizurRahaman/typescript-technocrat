"use strict";
{
    let user = null;
    user = {
        name: "Mostafiuzr",
        gender: "male",
        bloodGroup: "B+",
    };
    let user1 = null;
    user1 = {
        name: "mukta",
        gender: "female",
        bloodGroup: "B+",
    };
    console.log(user, user1);
    const fullStackDevleoper = {
        skills: ["html", "css", "javascript", "node js", "express"],
        designation1: "frontEndDeveloper",
        designation2: "backendDeveloper",
    };
    const owl = {
        eyes: 2,
        wings: 2,
        legs: 2,
        fly: () => {
            console.log("flying ......");
        },
        eat: () => {
            console.log("eating ..............");
        },
    };
    console.log(owl);
    owl.fly();
    owl.eat();
}
