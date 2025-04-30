const path = require("path");

// They typically give the same result.
// __dirname is built-in and simpler.
// path.dirname(__filename) is more verbose and useful if you're manipulating other file paths (not just the current file).

console.log("Directory name", path.dirname(__filename));

console.log("File name", path.basename(__filename));

console.log("extension name", path.extname(__filename));

const joinPath = path.join("C:", "Users", "AKSHAY", "OneDrive", "Node_folder");
console.log("joined Path", joinPath);

const resolvePath = path.resolve("01_basics", "first-module.js"); // path of .js file + 01_basics + first-module.js
console.log("resolvedPath", resolvePath);

const normalizePath = path.normalize(
  "C:/Users/AKSHAY/OneDrive/Desktop/Node_folder/Node.js_part_1/03_path-module/../01_basics"
);
console.log("normalizedPath " + normalizePath);
