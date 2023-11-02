{
   const myInfo = {
      name: {
         firstName: "Mostafizur",
         middleName: "Rahaman",
         lastName: "Fahim",
      },
      age: 30,
      phoneNumber: "01951976238",
      email: {
         primaryEmail: "mostafizurrahaman0401@gmail.com",
         secondaryEmail: "fahim74@gmail.com",
      },
      bloodGroup: "B+",
   };

   const {
      name: { firstName, middleName, lastName },
      age,
      phoneNumber,
      email: { primaryEmail, secondaryEmail },
      bloodGroup,
   } = myInfo;

   console.log(
      firstName,
      middleName,
      lastName,
      age,
      phoneNumber,
      primaryEmail,
      secondaryEmail,
      bloodGroup
   );

   const friends = [
      "Roman Hossain",
      "Ratul Hossain",
      "Rahim Hossain",
      "Rakib hossain",
      "Rajjack Hossain",
      "rohomot ullah",
   ];

   const [, , bestFriends, ...others ] = friends;
   console.log(bestFriends, others );
}
