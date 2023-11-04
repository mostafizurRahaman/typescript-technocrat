{
   // Constraints IN Generics:

   function addStudent<T extends { name: string; email: string; roll: number }>(
      student: T
   ) {
      const course = "Next Level Development";
      return {
         ...student,
         course,
      };
   }

   //  student one :

   const student1 = addStudent({
      name: "mostafizur rahaman",
      email: "mostafizur@gmail.com",
      roll: 22,
      age: 20,
      haveWatch: true,
   });

   const student2 = addStudent({
      name: "Ratul hossain",
      email: "ratul@gmail.com",
      roll: 21,
      isCar: false,
   });

   const student3 = addStudent({
      name: "redowan shawon",
      email: "redowan@gmail.com",
      roll: 3,
      emni: "emni",
   });

   console.log(student1, student2, student3);
}
