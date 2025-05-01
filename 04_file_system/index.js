const { log } = require("console");
const fs = require("fs");
const path = require("path");

//synchronous way of reading and writng the file
// const dataFolderPath = path.join(__dirname, "data");

// if (!fs.existsSync(dataFolderPath)) {
//   fs.mkdirSync(dataFolderPath);
// }

// const filePath = path.join(dataFolderPath, "example.txt");

// fs.writeFileSync(filePath, "this is the content of my file");

// const example_file_data = fs.readFileSync(filePath, "utf-8");
// console.log(example_file_data);

// fs.appendFileSync(filePath, "appended");

// asynchronous way of reading and writng the file
const dataFolderPath = path.join(__dirname, "data");

if (!fs.existsSync(dataFolderPath)) {
  fs.mkdirSync(dataFolderPath);
}

const async_file_path = path.join(dataFolderPath, "async_example.txt");

fs.writeFile(async_file_path, "This is the async file data", (err) => {
  if (err) throw err;
  console.log("async File created successfully");
});

fs.readFile(async_file_path, "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.appendFile(async_file_path, "\n The data has been appended", (err) => {
  if (err) throw err;
  fs.readFile(async_file_path, "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
