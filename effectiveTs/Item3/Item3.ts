//Item 3: Understand that code generation is independent of Types

//Part 1: Code with errors can produce output
// let x = "Hello";
// x = 123;   // Error - number is not assignable to type string

// console.log(x);

// Even though if you run $tsc effectiveTs/Item3/Item3.ts, it will produce an output
// as valid JS.

// Conclusion: That is why its not entirely correct to say: 'My Typescript is not
//             compiling'. Better is to say: "My code has type errors" or
//             "My code does not type check"

//Part2: You cannot check typescript types at Runtime

// interface Square {
//   width: number;
// }
// interface Rectangle extends Square {
//   height: number;
// }

// type Shape = Square | Rectangle;

// function calcularedArea(shape: Shape){
//     if (shape instanceof Rectangle){ //Error - Rectangle only refers to a type
//         return shape.width * shape.height // Property height does not exist on type Shape
//     }

//     return shape.width * shape.width
// }

// Types are ERASED: part of compilation to JS is simply to remove all the interfaces,
//                   types and type annotations from TS code.

// Possible soulutions:                        (** there are other possibilities)
// function calcularedArea(shape: Shape){
//     if ('height' in shape){ // Property check works in runtime
//         return shape.width * shape.height
//     }

//     return shape.width * shape.width
// }

//Part3: Types cannot affect runtime values
// function asNumber(val: number | string){
//     return val as number
// }

// In JS, it will become simply:
// function asNumber(val){
//     return val
// }

// There is no type conversion.
// The as number is a type operation, so it cannot affect runtime.

// Possible solution:
// function asNumber(val: number | string){
//     return typeof(val) === 'string' ? Number(val) : val;
// }

// Conclusion: Code generation is independent of the type system. This also means that TS types
//             cannot affect the runtime behavior or performance of your code.
//
