// Personal API Key for OpenWeatherMap API [0c0287eb61f14df9fc63debf39b1083e]
/* Global Variables */
const key = "&units=metric&APPID=0c0287eb61f14df9fc63debf39b1083e";
const baseURL = "http://api.openweathermap.org/data/2.5/weather?q=";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// get zip, feeling and country data for url
let zip = document.getElementById("zip").value;
let country = "," + document.getElementById("country").value + "&units=metric";
let feelings = document.getElementById("feelings").value;

const weatherData = async function(baseURL, zip, country, key) {
  // asynchronous fetch openweathermap
  const res = await fetch(baseURL + zip + country + key);
  try {
    const data = await res.json();
    console.log("api called!");
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// let recentRecord = [];

// use to make a POST request to our route
const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data)
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
