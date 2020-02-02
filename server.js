// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = new express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

const port = 3000;
// Setup Server
const server = app.listen(port, listening);
function listening() {
  //console.log(server);
  console.log(`running on localhost: ${port}`);
}

//make a GET request
app.get("/all", sendData);

function sendData(req, res) {
  res.send(projectData);
  // console.log(projectData);
}
//make a POST request
app.post('/add', saveData);
function saveData (req, res) {
  res.send('POST received');
  // console.log(req.body);
};

// Make POST to Weather Data

app.post('/addWeatherData', addWeatherData )
function addWeatherData (req, res){
  projectData.newEntry = {
    entryDate: req.body.date,
    temperature: req.body.temperature,
    feelings: req.body.feelings,
  }
}
