"use strict";
{
    //  spreed operator in javaScript with Typescript
    const friends = [
        "ratul hossain",
        "rakib hossain",
        "kabir hossain",
    ];
    const newFriends = [
        "rohim ullah",
        "robiul hasan",
        "nakib hossain",
        "arif",
    ];
    // friends.push(newFriends); //Errors:  Type string[] array is not assignable type string;
    friends.push(...newFriends);
    console.log(friends);
    const frontend = {
        html: 100,
        css: 75,
        javaScript: 80,
        bootstrap: 86,
        tailwindCSS: 90,
        react: 96,
        nextJs: 98,
    };
    const backend = {
        nodeJs: 75,
        express: 70,
    };
    const database = {
        mongoDB: 80,
    };
    const tools = {
        mongoose: 89,
        typescript: 85,
        jwt: 100,
        firebase: 70,
    };
    const fullstack = Object.assign(Object.assign(Object.assign(Object.assign({}, frontend), backend), database), tools);
    console.log(fullstack);
    const sendGreetings = (...friends) => {
        friends.forEach((i) => {
            console.log(`Hey, ${i}, Congratulation to join our team`);
        });
    };
    sendGreetings("ratul hossain", "kabir hossain", "kamal hossain", "roman hossain", "ratan");
}
