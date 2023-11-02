"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    //  spreed operator in javaScript with Typescript
    var friends = [
        "ratul hossain",
        "rakib hossain",
        "kabir hossain",
    ];
    var newFriends = [
        "rohim ullah",
        "robiul hasan",
        "nakib hossain",
        "arif",
    ];
    // friends.push(newFriends); //Errors:  Type string[] array is not assignable type string;
    friends.push.apply(friends, newFriends);
    console.log(friends);
    var frontend = {
        html: 100,
        css: 75,
        javaScript: 80,
        bootstrap: 86,
        tailwindCSS: 90,
        react: 96,
        nextJs: 98,
    };
    var backend = {
        nodeJs: 75,
        express: 70,
    };
    var database = {
        mongoDB: 80,
    };
    var tools = {
        mongoose: 89,
        typescript: 85,
        jwt: 100,
        firebase: 70,
    };
    var fullstack = __assign(__assign(__assign(__assign({}, frontend), backend), database), tools);
    console.log(fullstack);
    var sendGreetings = function () {
        var friends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friends[_i] = arguments[_i];
        }
        friends.forEach(function (i) {
            console.log("Hey, ".concat(i, ", Congratulation to join our team"));
        });
    };
    sendGreetings("ratul hossain", "kabir hossain", "kamal hossain", "roman hossain", "ratan");
}
