const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/usermodel");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/user-data", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database");
  });
app.post("/api/register", async (req, res) => {
  // console.log(req.body);
  const { name, email, password } = req.body;
  try {
    await User.create({
      name,
      email,
      password,
    });
    res.json({ status: "ok", data: "user created!" });
  } catch (err) {
    // console.log(err);
    res.json({ status: "user Already Exists", data: "user already exists" });
  }
});

app.post("/api/login", async (req, res) => {
  var { email, password } = req.body;
  // console.log(email, password);
  var user = await User.findOne({ email });
  if (user) {
    const token = jwt.sign(
      {
        email,
        password,
      },
      "secret12345"
    );
    console.log(password, " : ", user.password);
    if (password == user.password) {
      console.log({ status: "user match", user: token });
      res.json({ status: "ok", data: "Login Successfull!", user: token });
    } else {
      res.send({ status: "not ok", data: "Invalid Credentials" });
    }
  } else {
    // console.log(res.send({ status: "error", user: false }));

    res.send({ status: "not ok", data: "User doesn't exist" });
  }
});

app.get("/", async (req, res) => {
  const data = await User.find({});
  res.send(data);
});
app.listen(5150, () => {
  console.log("server started at 5151");
});
