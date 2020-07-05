const express = require("express");
const app = express();

app.get("/test", function(req, res) {
  res.send("Test method is connected...");
});

app.get("/api/whoami", headerInfo);

function headerInfo(req, res) {
  const obj = {
    ipaddress: req.headers["x-forwarded-for"].split(",")[0],
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  };
  res.json(obj);
}

module.exports = app;
