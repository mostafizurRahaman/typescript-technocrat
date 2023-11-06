"use strict";
// {
//    // type guard  instance of :
//    // create a animal:
//    class Animal {
//       name: string;
//       species: string;
//       sound: string;
//       constructor(name: string, species: string, sound: string) {
//          this.name = name;
//          this.species = species;
//          this.sound = sound;
//       }
//       makeSound() {
//          console.log(`The ${this.name} says ${this.sound}`);
//       }
//    }
//    // create a  children class for dog by extending Animal
//    class Dog extends Animal {
//       constructor(name: string, species: string, sound: string) {
//          super(name, species, sound);
//       }
//       // make dog sound:
//       makeBark() {
//          console.log(`The ${this.name} is Barking `);
//       }
//    }
//    // create a children class for cat extending Animal:
//    class Cat extends Animal {
//       constructor(name: string, species: string, sound: string) {
//          super(name, species, sound);
//       }
//       // make sound for cat;
//       makeMeaw() {
//          console.log(`The ${this.name} says ${this.sound}`);
//       }
//    }
//    // create an instance for dog
//    const dog = new Dog("Shadow Dog", "dog", "gew gew");
//    // create an instance for cat:
//    const cat = new Dog("Black Cat", "cat", "meaw meaw");
//    // create another instance for pig:
//    const pig = new Animal("Pink Pig", "pig", "make some sweet sounds");
//    // const getAnimalAndMakeSound = (animal: Animal) => {
//    //    if (animal instanceof Dog) {
//    //       animal.makeBark();
//    //    } else if (animal instanceof Cat) {
//    //       animal.makeMeaw();
//    //    } else {
//    //       animal.makeSound();
//    //    }
//    // };
//    // getAnimalAndMakeSound(dog);
//    // getAnimalAndMakeSound(cat);
//    // getAnimalAndMakeSound(pig);
//    // we can handle smartly handle check type by using function:
//    const isDog = (animal: Animal): animal is Dog => {
//       return animal instanceof Dog;
//    };
//    const isCat = (animal: Animal): animal is Cat => {
//       return animal instanceof Cat;
//    };
//    const getAnimalAndMakeSound = (animal: Animal) => {
//       if (isDog(animal)) {
//          animal.makeBark();
//       } else if (isCat(animal)) {
//          animal.makeMeaw();
//       } else {
//          animal.makeSound();
//       }
//    };
//    getAnimalAndMakeSound(cat);
//    getAnimalAndMakeSound(dog);
//    getAnimalAndMakeSound(pig);
// }
{
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }
    class Cat extends Animal {
        constructor(name, species, sound) {
            super(name, species, sound);
        }
        makeMew() {
            console.log(`The ${this.name} is meaw meaw`);
        }
    }
    class Cow extends Animal {
        constructor(name, species, sound) {
            super(name, species, sound);
        }
        makeHamba() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }
    // create instanceof cow :
    const cow = new Cow("Red Cow", "cow", "hamba hamba");
    // create instanceof cat:
    const cat = new Cat("white cat", "cat", "mew mew");
    console.log(cow, cat);
    // create a pig form 'Animal instance'
    const pig = new Animal("Pink pig", "pig", "sweet sounds");
    //  get sound with instanceof operator :
    const getAnimalSound = (animal) => {
        if (animal instanceof Cat) {
            animal.makeMew();
        }
        else if (animal instanceof Cow) {
            animal.makeHamba();
        }
        else {
            animal.makeSound();
        }
    };
    getAnimalSound(cow);
    getAnimalSound(cat);
    getAnimalSound(pig);
    // we can also do type guarding or narrowing by defining function
    // here we need to sepecify with `is` predicate
    const isCow = (animal) => {
        return animal instanceof Cow;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimalAndMakeSound = (animal) => {
        if (isCat(animal)) {
            animal.makeMew();
        }
        else if (isCow(animal)) {
            animal.makeHamba();
        }
        else {
            animal.makeSound();
        }
    };
    // call the getAnimalAndMakeSound function and get sounds;
    getAnimalAndMakeSound(cat);
    getAnimalAndMakeSound(cow);
    getAnimalAndMakeSound(pig);
}
