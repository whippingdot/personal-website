const express = require("express");
const app = express();

console.log(__dirname);

app.get("/", (req, res) => {
  console.log("A user connected!");

  res.sendFile(`${__dirname}/html/index.html`);
});
app.get("/css", (req, res) => {
  res.sendFile(`${__dirname}/css/style.css`);
});
app.get("/js", (req, res) => {
  res.sendFile(`${__dirname}/javascript/index.js`);
});
app.get("/pfp", (req, res) => {
  res.sendFile(`${__dirname}/ProfilePicture.png`);
});

app.listen(8000, () => {
  console.log("The server is running!");
});
