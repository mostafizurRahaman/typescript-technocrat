{
   // Getter & Setter :

   class Person {
      public name: string;
      public email: string;
      public age: number;

      constructor(name: string, email: string, age: number) {
         this.name = name;
         this.email = email;
         this.age = age;
      }

      // getter and setter :

      // getter with get : -
      get getAge() {
         return `${this.name}'s age is ${this.age}`;
      }

      set setAge(age: number) {
         this.age = this.age + age;
      }
   }

   const person1 = new Person("Mostafizur Rahaman", "mos@gmail.com", 20);
   const person2 = new Person("Ratul hossain", "ratul@gmail.com", 15);
   const person3 = new Person("Rakib Hossain", "m@gmail.com", 20);
   console.log(person1);
   console.log(person2);
   console.log(person3);

   // setter function in  javaScript :
   person1.setAge = 5;
   person1.setAge = 5;
   person2.setAge = 40; 
   person2.setAge = 30; 
   person3.setAge = 1; 
   person3.setAge = 50; 

   // create function to get instance age :

   function getPersonAge(person: Person) {
      // access getter function as property :
      return person.getAge;
   }

   const a1 = getPersonAge(person1);
   const b1 = getPersonAge(person2);
   const c1 = getPersonAge(person3);
   console.log(a1, b1, c1);
}
