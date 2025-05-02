//this is callback hell
// setTimeout(() => {
//   setTimeout(() => {
//     console.log("hello world!");
//   }, 1000);
// }, 1000);

const fs = require("fs");

fs.readFile("./input.txt", "utf-8", (err, data) => {
  if (err) throw err;

  fs.appendFile("./input.txt", "\nthis is the content of input.txt", (err) => {
    if (err) throw err;
    fs.readFile("./input.txt", "utf-8", (err, data) => {
      console.log(data);
    });
  });

});
