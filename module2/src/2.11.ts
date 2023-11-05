{
   // Utility Type In TypeScript :

   //  Pick: Pick method helps us to pick some specific property type  from interface or type alias object:

   interface IPerson {
      name: string;
      email: string;
      isActive: boolean;
      phone: string;
      haveBike: boolean;
      skills: string[];
      friends?: string[];
   }

   // Pick  is a predefine generics ,
   // pick method gets two parameter.
   // <Interface or Type alias, union of key that interface
   type newType = Pick<IPerson, "email" | "friends" | "isActive" | "phone">;

   // Omit : helps us to remove specific property type :
   type TOmit = Omit<
      IPerson,
      "name" | "email" | "phone" | "friends" | "isActive" | "skills"
   >;

   // Partial : make optional Every property :
   type TPartial = Partial<IPerson>;

   // make all Properties Required:
   type TRequired = Required<IPerson>;

   // make object readonly  with readonly Utility:
   type TReadonly = Readonly<IPerson>;

   const user1: TReadonly = {
      name: "mostafiur rahaman",
      email: "mos@gmail.com",
      isActive: false,
      phone: "01951976238",
      haveBike: false,
      skills: ["react", "javascript", "firebase"],
      friends: ["jahed hossain", "fahim hossain"],
   };

   // user1.name = "ratul hossain"; // Error: cannot assign to 'name' because it is a read-only property.

   // user1.email = 'most'  // Erorr: cannot assign to 'email; because it is a  readonly property
   console.log(user1);

   // Record :
   // Record have two parameter : one is key type and other is value type.

   type TPerson = Record<string, unknown>;
   const person1: TPerson = {
      a: "Mostafizur",
      b: 2,
      age: 20,
      number: 20,
      boolean: false,
   };

   person1.bike = {
      brand: "Yamaha",
      model: "Y-222",
   };

   console.log(person1);
}
