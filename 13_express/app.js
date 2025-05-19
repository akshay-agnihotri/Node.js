import express from "express";
import path from "path";

const app = express();

// app.get("/", (req, res) => {
//   // res.setHeader('Content-Type', 'text/html');
//   // res.send("<h1> Hello World! </h1>");

//   // const dirPath = __dirname; //not work in ES module
//   // const filePath = __filename; //not work in ES module
//   const dirPath = import.meta.dirname;
//   const htmlFilePath = dirPath + "/public/index.html";
//   const cssFilePath = dirPath + "/public/style.css";
//   // sending both files as a response
//   // you cannot send two files in one response
//   // Your HTML file should reference the CSS file with a <link> tag,
//   // and the browser will request the CSS separately.
//   res.sendFile(htmlFilePath, (err) => {
//     if (err) {
//       console.log("Error sending file:", err);
//       res.status(err.status).end();
//     } else {
//       console.log("Sent:", dirPath + "/index.html");
//     }
//   });
// });

// Serve static files from 'public'
const dirPath = import.meta.dirname;
app.use(express.static(path.join(dirPath, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(dirPath, "public", "index.html"), (err) => {
    if (err) {
      console.log("Error sending file:", err);
      res.status(err.status).end();
    } else {
      console.log("Sent:", path.join(dirPath, "public", "index.html"));
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
