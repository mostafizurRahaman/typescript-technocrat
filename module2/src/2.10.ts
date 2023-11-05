{
   type TAreaNumber = {
      height: number;
      width: number;
   };

   // lookup Type in Typescript :
   type THeight = TAreaNumber["height"];

   // map to convert convert TAreaNumber to other type :

   // this type convert to  boolean type on . it's fixed . but we need more flexibility

   // type TAreaConverted = {
   //    [index in "height" | "width" | "depth"]: boolean;
   // };

   // use keyof and and provide a type
   // it converted only TAreaNumber key to boolean type
   // type TAreaConverted = {
   //    [key in keyof TAreaNumber]: TAreaNumber[key];
   // };

   type TAreaConverted<T> = {
      [key in keyof T]: T[key];
   };


   const AreaString : TAreaConverted<{height: string,  width: number, depth: boolean}> = {
      height: '10vh',
      width: 3000, 
      depth:""
   }
}
