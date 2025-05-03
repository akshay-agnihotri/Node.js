
console.log("function call starts here");
const greet = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`hello ${name}`);
    }, 1000);
  });
};
console.log("function call ends here");

greet("akshay")
  .then((response) => console.log(response))
  .catch((err) => console.log(err));


// why can't you just write greet("akshay") by itself?
// answer

// greet("akshay")
// ``> 
// **returns a Promise**, because `greet` is an asynchronous function using `new Promise`.

// But just calling `greet("akshay")` **doesn't automatically display the result** — it schedules something to happen in the future (after 1 second), but JavaScript won’t know what to do with the result unless you **tell it what to do when the Promise resolves**.

// ---

// ### ✅ So, to actually **see** or **use** the result, you need to:

// #### 1. Use `.then()` and `.catch()` like you did:
// ```js
// greet("akshay")
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));

// You won’t see any output, because you're not doing anything with the returned Promise.

// question-since i have written async keyword in greet function why it become async
// answer-You did not use the async keyword in your greet function.

// You wrote:

// js

// const greet = (name) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`hello ${name}`);
//     }, 1000);
//   });
// };

// You're manually returning a Promise, which makes greet return a Promise, but you did not use the async keyword.

// 🔍 So what does the async keyword do?
// If you had written:

// const greet = async (name) => {
//   return `hello ${name}`;
// };

// Then JavaScript would automatically wrap the return value in a Promise. That means:

// greet("akshay"); // Returns a Promise that resolves to "hello akshay"

// So in your original example, the function is "asynchronous by behavior" (it returns a Promise), but it is not marked async, and doesn't use await internally.
