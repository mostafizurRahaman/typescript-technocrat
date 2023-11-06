"use strict";
{
    // create a common class for every person:
    class Person {
        constructor(name, age, email) {
            this.name = name;
            this.age = age;
            this.email = email;
        }
        sleeping(hour) {
            console.log(`I will sleeping for ${hour}`);
        }
    }
    // Create a student class:
    class Student extends Person {
        constructor(name, age, roll, email) {
            super(name, age, email);
            this.roll = roll;
        }
    }
    const student1 = new Student("mostafiuar", 2, 2, "mostafizur rahaman");
    student1.sleeping(2);
    console.log(student1);
    class Teacher extends Person {
        constructor(name, age, email, designation) {
            super(name, age, email);
            this.designation = designation;
        }
        teaching(subject) {
            console.log(`I am a teacher of ${subject}`);
        }
    }
    const teacher1 = new Teacher("Riaz Uddin", 35, "riaz@gmail.com", "head teacher");
    console.log(teacher1);
    teacher1.teaching("English");
    teacher1.sleeping(4);
    // create another children with by inheriting Person class
    class WebDev extends Person {
        constructor(name, age, email, skills) {
            super(name, age, email);
            this.skills = skills;
        }
        coding() {
            console.log(`${this.name} code with ${this.skills.join(" * ")}`);
        }
    }
    const webdev1 = new WebDev("Mostafizur Rahaman", 20, "mos@gmail.com", [
        "react",
        "nextJs",
        "javaScript",
        "TypeScript",
    ]);
    console.log(webdev1);
    webdev1.coding();
}
