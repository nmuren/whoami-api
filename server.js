// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

//Mount the logger middleware
app.use(appLogger);

//Mount the running application
//challenge doesn't accept this when you it from the js file
/*const myApp = require("./app");
app.use(myApp);*/

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function(req, res) {
  res.json({ greeting: "hello API" });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

// Root-level Middleware - A logger
function appLogger(req, res, next) {
  console.log(req.method, req.path, "-", req.ip);
  next();
}

app.get("/test", function(req, res) {
  res.send("Test method is connected...");
});

//Running application from the app.js
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
