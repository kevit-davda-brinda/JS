// /* //Deep Clonning starts

// For array object

// let studentName = ["Rajvi","Deep"];
// let EnrollNo = [200470116089,200470116088];

// Object.assign(studentName,EnrollNo);

// studentName[2] = 89554969

// console.log(studentName)

// Done in Object
// let StudentOne = {"name":"Deep","enrollNo":123456}
// let StudentTwo = {"name":"Raj","enrollNo":234394}

// Object.assign(StudentOne,StudentTwo)

// StudentOne.email = "raj@gmail.com";

// console.log(StudentOne);
// console.log(StudentTwo);

// //Deep Clonning end */

// // MarginObject starts

// // const o1 = { a: 1 };
// // const o2 = { b: 2 };
// // const o3 = { c: 3 };

// // const obj = Object.assign(o1, o2, o3);
// // console.log(obj); // { a: 1, b: 2, c: 3 }
// // console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.
// // console.log(o2); // as it is { b: 2 }
// // console.log(o3); // as it is { c: 3 }

// // MarginObject end */

// /* // MarginObject With some Properties starts

// const o1 = { a: 1, b: 1, c: 1 };
// const o2 = { b: 2, c: 2 };
// const o3 = { c: 3 };

// const obj = Object.assign({}, o1, o2, o3);
// console.log(obj); // { a: 1, b: 2, c: 3 }
// console.log(o1);
// console.log(o2);
// console.log(o3);

// // MarginObject With some Properties ends */

// /*// Copying Symbole type proprty start

// const o1 = { a: 1 };
// const o2 = { [Symbol("foo")]: 2 };

// const obj = Object.assign({}, o1, o2);
// console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
// Object.getOwnPropertySymbols(obj); // [Symbol(foo)]

// // Copying Symbole type proprty end */

// // properties_on_the_prototype_chain_and_
// // non-enumerable_properties_cannot_be_copied
// // const obj = Object.create(
// //     // foo is on obj's prototype chain.
// //     { foo: 1 },
// //     {
// //         bar: {
// //             value: 2, // bar is a non-enumerable property.
// //         },
// //         baz: {
// //             value: 3,
// //             enumerable: true, // baz is an own enumerable property.
// //         },
// //     },
// // );

// // const copy = Object.assign({}, obj);
// // console.log(copy); // { baz: 3 }

// // properties_on_the_prototype_chain_and_
// // non-enumerable_properties_cannot_be_copied

// //coping accessor 
// const obj = {
//     foo: 1,
//     get bar() {
//       return 2;
//     },
//   };

//   console.log(obj.bar)
  
//   let copy = Object.assign({}, obj);
// //   console.log(copy);
//   // { foo: 1, bar: 2 }
//   // The value of copy.bar is obj.bar's getter's return value.
  
//   // This is an assign function that copies full descriptors
//   function completeAssign(target, ...sources) {
//     sources.forEach((source) => {
//       const descriptors = Object.keys(source).reduce((descriptors, key) => {
//         descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
//         return descriptors;
//       }, {});
  
//       // By default, Object.assign copies enumerable Symbols, too
//       Object.getOwnPropertySymbols(source).forEach((sym) => {
//         const descriptor = Object.getOwnPropertyDescriptor(source, sym);
//         if (descriptor.enumerable) {
//           descriptors[sym] = descriptor;
//         }
//       });
//       Object.defineProperties(target, descriptors);
//     });
//     return target;
//   }
  
//   copy = completeAssign({}, obj);
//   console.log(copy);
//   // { foo:1, get bar() { return 2 } }

  
// //coping accessor
