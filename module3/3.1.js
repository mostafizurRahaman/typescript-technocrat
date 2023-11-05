"use strict";
// {
//    // OOP && Class & Object :
//    // class Animal {
//    //    public name: string;
//    //    public species: string;
//    //    public sound: string;
//    //    // initialize value with constructor
//    //    constructor(name: string, species: string, sound: string) {
//    //       this.name = name;
//    //       this.species = species;
//    //       this.sound = sound;
//    //    }
//    //    // function of class:
//    //    makeSound() {
//    //       console.log(`The ${this.name} says ${this.sound}`);
//    //    }
//    // }
//    //  create a class with parameter Properties in TypeScript:
//    class Animal {
//       constructor(
//          public name: string,
//          public species: string,
//          public sound: string
//       ) {}
//       makeSound() {
//          console.log(`The ${this.name} says ${this.sound} `);
//       }
//    }
//    // create an instance of Animal:
//    const men = new Animal("Mostafizur Rahaman", "men", "bok bok");
//    console.log(men);
//    men.makeSound();
//    const cat = new Animal("Pusi Cat", "cat", "meaw meaw");
//    console.log(cat);
//    cat.makeSound();
// }
{
    // class Animal {
    //    public name: string = "animal";
    //    public species: string = "animal";
    //    public sound: string = "sound";
    //    constructor(name: string, species: string, sound: string) {
    //       this.name = name;
    //       this.species = species;
    //       this.sound = sound;
    //    }
    //    makeSound() {
    //       console.log(`The ${this.name} says ${this.sound}`);
    //    }
    // }
    // write the same class code with Parameter Properties :
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound} `);
        }
    }
    const dog = new Animal("The ShadowBurger Dog", "dog", "gew gew");
    dog.makeSound();
    console.log(dog);
    const cat = new Animal("The Blackish Cat", "cat", "mew mew");
    console.log(cat);
    cat.makeSound();
}
