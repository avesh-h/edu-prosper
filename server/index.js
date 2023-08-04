const express = require("express");
const app = express();

//for basic push
app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(3001, () => {
  console.log("server is running!");
});
