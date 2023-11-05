{
   //  Function with Generics:
   // type GenericArrCreate<T> = (a: T) => T[];

   // create a function which get data and return an array of that data type:
   function createArr<T>(a: T): T[] {
      return [a];
   }

   // create Generics Object :
   const createObj = <T>(a: T): { a: T } => {
      return { a };
   };

   const numberArr = createArr<number>(1);
   const stringArr = createArr<string>("Mostafizur rahaman");
   console.log(numberArr, stringArr);

   //  Object created from here:
   const obj1 = createObj<string>("mostafiuzr");
   const obj2 = createObj<number>(1);
   console.log(obj1, obj2);

   // create a tuple  generics with function:
   const createTuple = <T, K>(a: T, b: K): [T, K] => {
      return [a, b];
   };

   // create tuple from here:
   const first1 = createTuple<string, number>("mostafizur ", 2);

   const second1 = createTuple<undefined, boolean>(undefined, false);
   console.log(first1, second1);

   interface IUser {
      name: string;
      email: string;
   }

   interface IArr {
      [index: number]: number;
   }

   const thirdOne = createTuple<IUser, IArr>(
      { name: "mostafiuzr", email: "mos@gmail.com" },
      [1, 2]
   );

   console.log(thirdOne);

   //  attached a course with generics user:
   interface IStudent1 {
      name: string;
      email?: string;
      phone: string;
   }

   interface IStudent2 {
      name: string;
      phone: "01951976238";
   }

   const AttachedStudentWithCourse = <T>(student: T) => {
      const course: string = "Next Level Development Course";

      return {
         course,
         ...student,
      };
   };

   const student1 = AttachedStudentWithCourse<IStudent1>({
      name: "mostafiur rahaman",
      email: "mostafizur rahaman",
      phone: "019561333333",
   });

   const student2 = AttachedStudentWithCourse<IStudent2>({
      name: "ratul hossain",
      phone: "01951976238",
   });

   const student3 = AttachedStudentWithCourse("emni");
   console.log(student1, student2, student3);


}
