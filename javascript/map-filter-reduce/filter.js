//code is running through nodemon command
//to install nodemon go to working directory in cmd and run command 'npm i nodemon'
let marks = [34, 54, 66, 33, 23, 54, 77, 88, 65];

// function foo(mark, i) {
//   if (mark < 35) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let failedStud = marks.filter(foo);

let failedStud = marks.filter((mark) => {
  if (mark < 35) return true;
});

let evens = marks.filter((num) => {
  if (num % 2 === 0) {
    return true;
  }
});

console.log(evens);
