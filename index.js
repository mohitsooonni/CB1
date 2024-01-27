require("dotenv").config();

const express = require("express"); // module syntax
//import express from express (is also the same)

const app = express();
//using express you created a variable app

// computer has lots of ports <65530 ports (virtual ports)
// you can listen in any port ex- 4000, 5000 etc

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/meg", (req, res) => {
  res.send("I miss meg");
});

app.get("/really", (req, res) => {
  res.send(
    "Do you miss her or you are just being horny?"
  );
});

app.get("/huh", (req, res) => {
  res.send("<h1>Both, I guess.</h1>");
});

app.listen(process.env.port, () => {
  console.log(
    `Example app listening on port ${port}`
  );
});
