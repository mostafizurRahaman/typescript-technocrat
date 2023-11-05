{
   // Type Assertion in TypeScript :

   let random: any;

   random = "Mostafizur Rahaman";

   (random as string).toUpperCase();
   (random as string).toLocaleLowerCase();

   const convertKmToMeter = (
      a: string | number | undefined
   ): string | number | undefined => {
      if (typeof a === "string") {
         const converted = parseFloat(a) * 1000;
         return `convert ${a} km to ${converted} meter`;
      }
      if (typeof a === "number") {
         return a * 1000;
      }
   };

   const numberResult: number = convertKmToMeter(1000) as number;
   const stringResult: string = convertKmToMeter("1000") as string;
   const undefinedResult: undefined = convertKmToMeter(undefined) as undefined;

   type TCustomError = {
      name: string;
      message: string;
      stack: string;
   };

   try {
      throw new Error("Unauthorized User");
   } catch (error) {
      const err = error as TCustomError;
      console.log(err.name);
   }
}
