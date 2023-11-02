"use strict";
{
    var user = null;
    user = {
        name: "Mostafiuzr",
        gender: "male",
        bloodGroup: "B+",
    };
    var user1 = null;
    user1 = {
        name: "mukta",
        gender: "female",
        bloodGroup: "B+",
    };
    console.log(user, user1);
    var fullStackDevleoper = {
        skills: ["html", "css", "javascript", "node js", "express"],
        designation1: "frontEndDeveloper",
        designation2: "backendDeveloper",
    };
    var owl = {
        eyes: 2,
        wings: 2,
        legs: 2,
        fly: function () {
            console.log("flying ......");
        },
        eat: function () {
            console.log("eating ..............");
        },
    };
    console.log(owl);
    owl.fly();
    owl.eat();
}
