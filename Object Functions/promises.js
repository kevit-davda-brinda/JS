const promise1 = Promise.reject(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'foo');
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(reject, 100, 'foo');
// });
// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 300, 'foo');
// });

Promise.race([promise1, promise2, promise3 , promise4]).then((values) => {
  console.log(values);
});