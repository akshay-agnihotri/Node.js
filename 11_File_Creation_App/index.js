//File creation app
// as i run node index.js the prompt is shown as follows:

// 1. Enter file name
// 2. Enter file content

import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter file name: ", (fileName) => {
  rl.question("Enter file content: ", (fileContent) => {
    const filePath = path.join(__dirname, `${fileName}.txt`);
    console.log(`Creating file at: ${filePath}`);
    
    fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        console.error("Error creating file:", err);
      } else {
        console.log(`File "${fileName}" created successfully.`);
      }
      rl.close();
    });
  });
});
