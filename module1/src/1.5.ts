//  Reference Type In Typescript :
const user: {
   readonly firstName: string;
   middleName?: string;
   lastName: string;
   age: number;
   isVerified: boolean;
   readonly company: string;
} = {
   firstName: "Mostafizur",
   lastName: "Fahim",
   age: 20,
   isVerified: false,
   company: "universe It Institute",
};

user.firstName = "Fahim hossain";
user.company = "programming hero";
