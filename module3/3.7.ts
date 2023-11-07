{
   // Static in OOP :

   class Counter {
      // static modifier use one memory Reference for variable.
      // from any instance we can change value , it's will be change for every instance. This main after using static, static makes the variable only for Class.
      // After  make a variable static , we we need access the variable with className not this keyword.
      public static counter: number = 0;

      // increment() {
      //    this.counter = this.counter + 1;
      // }

      // decrement() {
      //    this.counter = this.counter - 1;
      // }

      static increment() {
         Counter.counter = Counter.counter + 1;
      }

      static decrement() {
         Counter.counter = Counter.counter - 1;
      }
   }

   // create an instance for counter :
   const one = new Counter();
   const two = new Counter();

   // increment counter for one instance:
   Counter.increment();
   Counter.increment();

   //  we need to call the increment with Class method not instance method. After making static it's only accessible with className.
   Counter.increment();

   console.log(Counter.counter);
   console.log(Counter.counter);

   class Sleep {
      public static sleepingHours: number = 8;

      // increment sleeping hours:
      static increment() {
         // when we use static variable we need access the variable with ClassName.propertyName
         Sleep.sleepingHours = Sleep.sleepingHours + 1;
      }

      // decrement Sleeping hours:
      static decrement() {
         Sleep.sleepingHours = Sleep.sleepingHours - 1;
      }
   }

   // we need to access the static variable as Class property . we can not find the property as  in instance.
   const hours: number = Sleep.sleepingHours;
   console.log(hours);

   // create two instance to update the static variable:
   // const sleep1 = new Sleep();
   // const sleep2 = new Sleep();

   // // here  we have two instance:
   // sleep1.increment(); // increment for sleep1; but it update for all instance or full class .
   // sleep2.increment();
}
