const PORT = process.env.PORT || "7000";
const express = require("express");
const app = express();

app.listen(parseInt(PORT, 10), () => {
  console.log(`Listening for requests on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

app.get("/rolldice", (req, res) => {
  res.send(getRandomNumber(1, 6).toString());
});

app.get("/date", (req, res) => {
  res.json({ today: new Date() });
});