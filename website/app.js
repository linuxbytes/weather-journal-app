// Personal API Key for OpenWeatherMap API [0c0287eb61f14df9fc63debf39b1083e]
/* Global Variables */
const key = "&units=metric&APPID=0c0287eb61f14df9fc63debf39b1083e";
const baseURL = "http://api.openweathermap.org/data/2.5/weather?q=";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

document
  .getElementById("generate")
  .addEventListener("click", function callweatherData() {
    let zip = document.getElementById("zip").value;
    let feelings = document.getElementById("feelings").value;
    getweatherData(baseURL, zip, key).then(data => {
      postData("/addWeatherData", {
        date: newDate,
        temperature: data.main.temp,
        feelings: feelings
      }).then(entryUpdate());
    });
  });

const getweatherData = async function(baseURL, zip, key) {
  // asynchronous fetch openweathermap
  const res = await fetch(baseURL + zip + key);
  try {
    const data = await res.json();

    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// update last entry section of form
const entryUpdate = async function (){
  const req = await fetch("/all");
  try {
    const allData = await req.json();
    document.getElementById("date").innerHTML =
      "<p> Today Date: " + allData.newEntry.entryDate + "</p>";
    document.getElementById("temp").innerHTML =
      "<p> Temperature: " + allData.newEntry.temperature + "</p>";
    document.getElementById("content").innerHTML =
      "<p> How you Feeling Today:\n" + allData.newEntry.feelings + "</p>";
  } catch (error) {
    console.log("error", error);
  }
};
// console.log(getweatherData(baseURL, zip, key));
// let recentRecord = [];

// use to make a POST request to our route
const postData = async (url = "", data = {}) => {

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
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};


