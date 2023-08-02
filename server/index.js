const express = require("express");
const app = express();

//for basic push
app.get("/", () => {
  console.log("homepage");
});

app.listen(3001, () => {
  console.log("server is running!");
});
