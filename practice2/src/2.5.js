"use strict";
{
    //  Function with Generics:
    // type GenericArrCreate<T> = (a: T) => T[];
    // create a function which get data and return an array of that data type:
    function createArr(a) {
        return [a];
    }
    // create Generics Object :
    const createObj = (a) => {
        return { a };
    };
    const numberArr = createArr(1);
    const stringArr = createArr("Mostafizur rahaman");
    console.log(numberArr, stringArr);
    //  Object created from here:
    const obj1 = createObj("mostafiuzr");
    const obj2 = createObj(1);
    console.log(obj1, obj2);
    // create a tuple  generics with function:
    const createTuple = (a, b) => {
        return [a, b];
    };
    // create tuple from here:
    const first1 = createTuple("mostafizur ", 2);
    const second1 = createTuple(undefined, false);
    console.log(first1, second1);
    const thirdOne = createTuple({ name: "mostafiuzr", email: "mos@gmail.com" }, [1, 2]);
    console.log(thirdOne);
    const AttachedStudentWithCourse = (student) => {
        const course = "Next Level Development Course";
        return Object.assign({ course }, student);
    };
    const student1 = AttachedStudentWithCourse({
        name: "mostafiur rahaman",
        email: "mostafizur rahaman",
        phone: "019561333333",
    });
    const student2 = AttachedStudentWithCourse({
        name: "ratul hossain",
        phone: "01951976238",
    });
    const student3 = AttachedStudentWithCourse("emni");
    console.log(student1, student2, student3);
}
