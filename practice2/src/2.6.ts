{
   // constraints in typeScript:

   interface IUser {
      name: string;
      email: string;
      isActive: "active" | "in-active";
   }

   function AttachedStudentWithCourse<T extends IUser>(student: T) {
      const course = "Next Level Development";
      return {
         course,
         ...student,
      };
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
