"use strict";
{
    var myInfo = {
        name: {
            firstName: "Mostafizur",
            middleName: "Rahaman",
            lastName: "Fahim",
        },
        age: 30,
        phoneNumber: "01951976238",
        email: {
            primaryEmail: "mostafizurrahaman0401@gmail.com",
            secondaryEmail: "fahim74@gmail.com",
        },
        bloodGroup: "B+",
    };
    var _a = myInfo.name, firstName = _a.firstName, middleName = _a.middleName, lastName = _a.lastName, age_1 = myInfo.age, phoneNumber = myInfo.phoneNumber, _b = myInfo.email, primaryEmail = _b.primaryEmail, secondaryEmail = _b.secondaryEmail, bloodGroup = myInfo.bloodGroup;
    console.log(firstName, middleName, lastName, age_1, phoneNumber, primaryEmail, secondaryEmail, bloodGroup);
    var friends = [
        "Roman Hossain",
        "Ratul Hossain",
        "Rahim Hossain",
        "Rakib hossain",
        "Rajjack Hossain",
        "rohomot ullah",
    ];
    var bestFriends = friends[2], others = friends.slice(3);
    console.log(bestFriends, others);
}
