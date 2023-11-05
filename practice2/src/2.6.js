"use strict";
{
    function AttachedStudentWithCourse(student) {
        const course = "Next Level Development";
        return Object.assign({ course }, student);
    }
    const student1 = AttachedStudentWithCourse({
        name: "mostafizuar rahaman",
        email: "mos@gmail.com",
        isActive: "active",
    });
    const student2 = AttachedStudentWithCourse({
        name: "fahim hossain",
        email: "fahim@gmail.com",
        isActive: "active",
        age: 20,
    });
    const student3 = AttachedStudentWithCourse({
        name: "roman hossain",
        email: "roman@gmail.com",
        isActive: "in-active",
        emni: "emni",
    });
    console.log(student1, student2, student3);
}
