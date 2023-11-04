"use strict";
{
    //   Function with Generics:
    // const createArr = (a1: string): string[] => {
    //    return [a1];
    // };
    // const createNumberArr = (a1: number): number[] => {
    //    return [a1];
    // };
    // const createOJBArr = (a1: {
    //    name: string;
    //    email: string;
    // }): { name: string; email: string }[] => {
    //    return [a1];
    // };
    // console.log(createArr("mostafizur rahaman"));
    // console.log(createNumberArr(1));
    // console.log(createOJBArr({ name: "Mostafizur", email: "mos@gmail.com" }));
    const createArr = (num1) => {
        return [num1];
    };
    const stringArr = createArr("mostafizur");
    const numArr = createArr(20);
    const booleanArr = createArr(false);
    const UserArr = createArr({
        name: "Mostafizur Rahaman",
        age: 20,
        phone: "01951976238",
    });
    //  Write a function to create tuple:
    const createTuple = (param1, param2) => {
        return [param1, param2];
    };
    const tuple1 = createTuple(10, 20);
    const tuple2 = createTuple("Mostafizur Rahaman", 20);
    const tuple3 = createTuple({ name: "Mostafizur Rahaman", age: 20, phone: "0134443" }, 3);
    console.log(tuple1, tuple2);
    console.log(tuple3);
    const giveCourse = (student) => {
        const course = "Next Level Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = giveCourse({
        name: "mostafizur rahaman",
        email: "mos@gmail.com",
        devType: "Front End Developer",
    });
    const student2 = giveCourse({
        name: "robiul islam",
        email: "fahim@gmail.com",
        isDeveloper: false,
    });
    function createTuple2(a, b) {
        return [a, b];
    }
    const one = createTuple2("one", 1);
    const two = createTuple2(1, "one");
    console.log(one);
    console.log(two);
    console.log(stringArr, numArr, booleanArr, UserArr);
    console.log("student1", student1);
    console.log("student2", student2);
}
