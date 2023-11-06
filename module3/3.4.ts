{
   // type guard  instance of :

   // create a animal:
   class Animal {
      name: string;
      species: string;
      sound: string;

      constructor(name: string, species: string, sound: string) {
         this.name = name;
         this.species = species;
         this.sound = sound;
      }

      makeSound() {
         console.log(`The ${this.name} says ${this.sound}`);
      }
   }
   // create a  children class for dog by extending Animal
   class Dog extends Animal {
      constructor(name: string, species: string, sound: string) {
         super(name, species, sound);
      }

      // make dog sound:
      makeBark() {
         console.log(`The ${this.name} is Barking `);
      }
   }

   // create a children class for cat extending Animal:
   class Cat extends Animal {
      constructor(name: string, species: string, sound: string) {
         super(name, species, sound);
      }

      // make sound for cat;
      makeMeaw() {
         console.log(`The ${this.name} says ${this.sound}`);
      }
   }

   // create an instance for dog
   const dog = new Dog("Shadow Dog", "dog", "gew gew");

   // create an instance for cat:
   const cat = new Dog("Black Cat", "cat", "meaw meaw");

   // create another instance for pig:
   const pig = new Animal("Pink Pig", "pig", "make some sweet sounds");

   // we can handle smartly handle check type by using function:
   const isDog = (animal: Animal): animal is Dog => {
      return animal instanceof Dog;
   };

   const isCat = (animal: Animal): animal is Cat => {
      return animal instanceof Cat;
   };

   const getAnimalAndMakeSound = (animal: Animal) => {
      if (isDog(animal)) {
         animal.makeBark();
      } else if (isCat(animal)) {
         animal.makeMeaw();
      } else {
         animal.makeSound();
      }
   };

   getAnimalAndMakeSound(cat);
   getAnimalAndMakeSound(dog);
   getAnimalAndMakeSound(pig);
}

// const getAnimalAndMakeSound = (animal: Animal) => {
//    if (animal instanceof Dog) {
//       animal.makeBark();
//    } else if (animal instanceof Cat) {
//       animal.makeMeaw();
//    } else {
//       animal.makeSound();
//    }
// };

// getAnimalAndMakeSound(dog);
// getAnimalAndMakeSound(cat);
// getAnimalAndMakeSound(pig);
