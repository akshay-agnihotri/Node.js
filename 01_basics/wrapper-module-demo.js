
// Wrapper Module in Node.js (Hinglish Explanation with Example)
// Node.js me Wrapper Module ek concept hai jisme har JavaScript file ko Node.js khud hi ek function ke andar wrap kar deta hai jab wo file run hoti hai. Ye wrapping ka purpose hai variables ko module scope me rakhna, taaki wo global scope me na chale jayein.

// 🔁 Kya hota hai Wrapper Function?
// Node.js har file ko is function me wrap karta hai:

// js
// Copy
// Edit
// (function (exports, require, module, __filename, __dirname) {
//   // Tumhara code yahan hota hai
// });
// 📦 Parameters ka matlab:
// exports: Module ka export object

// require: Function jo modules import karta hai

// module: Current module ka object

// __filename: Current file ka full path

// __dirname: Current directory ka path



const wrapper_module = require("./wrapper-module");

wrapper_module.func();

console.log("__filename", __filename);
console.log("__dirname", __dirname);
