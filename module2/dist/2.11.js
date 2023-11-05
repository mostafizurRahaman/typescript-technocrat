"use strict";
{
    const user1 = {
        name: "mostafiur rahaman",
        email: "mos@gmail.com",
        isActive: false,
        phone: "01951976238",
        haveBike: false,
        skills: ["react", "javascript", "firebase"],
        friends: ["jahed hossain", "fahim hossain"],
    };
    // user1.name = "ratul hossain"; // Error: cannot assign to 'name' because it is a read-only property.
    // user1.email = 'most'  // Erorr: cannot assign to 'email; because it is a  readonly property
    console.log(user1);
    const person1 = {
        a: "Mostafizur",
        b: 2,
        age: 20,
        number: 20,
        boolean: false,
    };
    person1.bike = {
        brand: "Yamaha",
        model: "Y-222",
    };
    console.log(person1);
}
