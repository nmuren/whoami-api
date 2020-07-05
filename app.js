const express = require("express");
const app = express();

app.get("/test", function(req, res) {
  res.send("Test method is connected...");
});

const basePath = "/api/timestamp/";
//Get input from client with Route parameters
const endpoint = `${basePath}:date_string`;
//Mount the date method to the endpoint
app.get(endpoint, function(req, res) {
  console.log(typeof req.params.date_string, req.params.date_string);
  res.json(dateParser(req.params.date_string));
});

app.get(basePath, function(req, res) {
  res.json(dateParser(Date.now()));
});

function dateParser(time) {
  let date = new Date(time);

  if (isInvalid(date)) {
    date = new Date(Number(time));
    if (isInvalid(date)) {
      return { error: "Invalid Date" };
    }
  }
  return {
    unix: date.getTime(),
    utc: date.toUTCString()
  };
}

function isInvalid(date) {
  return date.toString() === "Invalid Date";
}

module.exports = app;
