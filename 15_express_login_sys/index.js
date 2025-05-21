import express from "express";
import path from "path";
import fs from "fs";

const app = express();

// get current dir in express
const __dirname = path.resolve();

app.get("/", (req, res) => {
  // opening pop up window to show message appended to url
  if (req.query.message) {
    res.send(
      `<script>alert('${req.query.message}'); window.location.href = '/';</script>`
    );
  } else {
    res.send("hello this is homepage");
  }
});

// Middleware to serve static files on signup
app.use("/signup", express.static(path.join(__dirname, "public")));

app.get("/signup", (req, res) => {
  if (req.query.message) {
    res.send(
      `<script>alert('${req.query.message}'); window.location.href = '/signup';</script>`
    );
  } else res.sendFile(path.join(__dirname, "signup.html"));
});

// middleware for handling signup form data
app.use(express.urlencoded({ extended: true }));

app.post("/signup", (req, res) => {
  // Handle signup logic here
  console.log(req.body);
  // {
  //   username: 'akshay_agni_96',
  //   email: 'akshay@gmail.com',
  //   password: 'Akshay@1234',
  //   confirm_password: 'Akshay@1234'
  // }

  // if password and confirm password are not same
  if (req.body.password !== req.body.confirm_password) {
    // redirectig to signup page and sending "password not same" message
    return res.redirect("/signup?message=password not same");
  }

  // if users.json already contains the user then--
  // redirectig to signup page and sending "user already exists" message
  const users = JSON.parse(fs.readFileSync(path.join(__dirname, "users.json")));
  const userExists = users.some((user) => user.username === req.body.username);
  if (userExists) {
    return res.redirect("/signup?message=user already exists");
  }

  // redirectig to home page and sending "signup success" message
  // appendng newly created user data into users.json file
  // users data will be inside an array object
  users.push(req.body);
  fs.writeFileSync(
    path.join(__dirname, "users.json"),
    JSON.stringify(users),
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );

  res.redirect("/login?message=signup success");
});

// Middleware to serve static files on login
app.use("/login", express.static(path.join(__dirname, "public")));

app.get("/login", (req, res) => {
  // opening pop up window to show message appended to url
  if (req.query.message) {
    res.send(
      `<script>alert('${req.query.message} now you can login to your account'); window.location.href = '/login';</script>`
    );
  } else {
    res.sendFile(path.join(__dirname, "login.html"));
  }
});

// middleware for handling form data
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  // Handle login logic here
  // if username and password does not matches with any existing users then show user not found...
  const users = JSON.parse(fs.readFileSync(path.join(__dirname, "users.json")));
  const user = users.find(
    (user) =>
      user.username === req.body.username && user.password === req.body.password
  );
  if (!user) {
    // redirectig to login page and sending "user not found" message
    return res.redirect("/login?message=user not found");
  }
  // redirectig to home page and sending "login success" message
  res.redirect("/?message=login success");
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Server is running on http://localhost:3000");
  }
});
