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

   const createArr = <T>(num1: T): T[] => {
      return [num1];
   };

   const stringArr: string[] = createArr<string>("mostafizur");
   const numArr: number[] = createArr<number>(20);
   const booleanArr: boolean[] = createArr<boolean>(false);

   //  type user
   type IUser = {
      name: string;
      age: number;
      phone: string;
   };

   const UserArr: IUser[] = createArr<IUser>({
      name: "Mostafizur Rahaman",
      age: 20,
      phone: "01951976238",
   });

   //  Write a function to create tuple:
   const createTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
      return [param1, param2];
   };

   const tuple1 = createTuple<number, number>(10, 20);
   const tuple2 = createTuple<string, number>("Mostafizur Rahaman", 20);
   const tuple3 = createTuple<IUser, number>(
      { name: "Mostafizur Rahaman", age: 20, phone: "0134443" },
      3
   );
   console.log(tuple1, tuple2);
   console.log(tuple3);

   // Create A Function which have fixed property get student as parameter and merge the student & specific type :

   type TStudent = {
      name: string;
      email: string;
      devType: "Front End Developer" | "Backend Developer ";
   };

   interface IStudent {
      name: string;
      email: string;
      isDeveloper: boolean;
   }

   const giveCourse = <T>(student: T) => {
      const course = "Next Level Development";
      return {
         ...student,
         course,
      };
   };

   const student1 = giveCourse<TStudent>({
      name: "mostafizur rahaman",
      email: "mos@gmail.com",
      devType: "Front End Developer",
   });

   const student2 = giveCourse<IStudent>({
      name: "robiul islam",
      email: "fahim@gmail.com",
      isDeveloper: false,
   });

   function createTuple2<T, Q>(a: T, b: Q): [T, Q] {
      return [a, b];
   }

   const one: [string, number] = createTuple2<string, number>("one", 1);
   const two: [number, string] = createTuple2<number, string>(1, "one");
   console.log(one);
   console.log(two);

   console.log(stringArr, numArr, booleanArr, UserArr);

   console.log("student1", student1);
   console.log("student2", student2);
}
