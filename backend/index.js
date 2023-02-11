const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const students = require("./db");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/search", (req, res) => {
  const status = students.some((student) => student.value === req.body.student);
  if (status) {
    res.send("exists in the database");
  } else {
    res.send("Student is not in our database");
  }
  res.send(`recieved name is:${req.body.student}`);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(3000, function () {});
