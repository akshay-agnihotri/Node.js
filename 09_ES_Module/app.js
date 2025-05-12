// • ES Modules (ECMAScript Modules) allow you to use import and export syntax.
// They have been available in Node.js since version 12.

// • To enable ES Modules, you can either: ☑
// • Name your file with the .mjs extension, or
// • Set "type": "module" in your package.json. (Recommended)

// • Use import and export instead of require and module.exports.

// • ES Modules are asynchronous and support top-level await.

// ? Es module import
// • ES Modules are not hoisted, so you need to declare them before using them.
// import add from "./math.js"; --> for default export
import { add, substract } from "./math.js"; // --> for named export

console.log(add(3, 4));
console.log(substract(5, 2));



//? gloabl and local packages
// 🔹 Local Package
// 📌 What it is:
// A local package is installed inside your project's directory (node_modules) and is only available to that project.

// ✅ Use case:
// Used when your project depends on the package (e.g., express, mongoose, react).

// 📦 How to install:
// npm install package-name

// 🔍 Where it goes:
// Installed in: ./node_modules/

// Reference in: package.json under dependencies

// 🛠️ How to use:
// In your project’s code:

// const express = require('express');


// 🔹 Global Package
// 📌 What it is:
// A global package is installed system-wide and can be used from the command line anywhere, not tied to any specific project.

// ✅ Use case:
// Used when the package provides CLI tools (e.g., nodemon, typescript, eslint).

// 📦 How to install:
// npm install -g package-name
// 🔍 Where it goes:
// Installed in: system-level npm directory (you can check with npm root -g)

// Not listed in your project's package.json

// 🛠️ How to use:
// Directly from terminal:

// nodemon app.js

