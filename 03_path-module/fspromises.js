const fs = require("fs");
const path = require("path");

const filePath = path.resolve("fspromises.txt");


// fs.promises
//   .readdir(__dirname)
//   .then((data) => console.log(data))
//   .catch((err) => {
//     throw err;
//   });

fs.promises
  .writeFile(filePath, "This is the data written!", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

fs.promises
  .readFile(filePath, "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
