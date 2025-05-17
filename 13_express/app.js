import express from "express";


const app = express();

app.get("/", (req, res) => {
  // res.setHeader('Content-Type', 'text/html');
  res.send("<h1> Hello World! </h1>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
