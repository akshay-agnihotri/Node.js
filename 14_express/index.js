import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello this is homepage");
});

app.get("/:username", (req, res) => {
  res.send(`hello ${req.params.username}`);
});

app.listen(process.env.PORT, (err) => {
  console.log("Server is running on http://localhost:3000");
});
