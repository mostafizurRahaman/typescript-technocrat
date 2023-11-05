{
   //  Basic on Promise in Typescript:

   type TSomeThing = { message: "something" };

   const createPromise = (): Promise<TSomeThing> => {
      return new Promise<TSomeThing>((resolve, reject) => {
         const data: TSomeThing = { message: "something" };
         if (data) {
            return resolve(data);
         } else {
            return reject("Promise not resolved");
         }
      });
   };

   const loadData = async (): Promise<TSomeThing> => {
      const data: TSomeThing = await createPromise();
      console.log(data);
      return data;
   };

   loadData();

   //  load external data and handle External Promise:

   interface ITodo {
      userId: number;
      id: number;
      title: string;
      completed: boolean;
   }

   const getTodo = async (): Promise<ITodo> => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
      const data: ITodo = await res.json();
      console.log(data); 
      return data;
   };


   getTodo(); 
}
