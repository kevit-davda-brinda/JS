//Example - 1 sart

// const c = 1;
// {
//    const c = 2;
// }
// console.log(c); // 1; does not throw SyntaxError

//Example - 1 end


//Example - 2 start

// "use strict";

// {
//   foo(); // Logs "foo"
//   function foo() {
//     console.log("foo");
//   }
// }

// foo(); // ReferenceError: foo is not defined

//Example - 2 end

//Example - 3 start

let sector;
{
  // These variables are scoped to this block and are not
  // accessible after the block
  const angle = Math.PI / 3;
  const radius = 10;
  sector = {
    radius,
    angle,
    area: (angle / 2) * radius ** 2,
    perimeter: 2 * radius + angle * radius,
  };
}
console.log(sector);
// {
//   radius: 10,
//   angle: 1.0471975511965976,
//   area: 52.35987755982988,
//   perimeter: 30.471975511965976
// }
console.log(typeof radius); // "undefined"

//Example - 3 end
