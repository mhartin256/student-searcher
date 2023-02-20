const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const students = require("./db");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/search", (req, res) => {
  const student = students.find((student) => student.value === req.body.student);
  res.send(student);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(3000, function () {});
