let now = new Date();
let currentDay = document.querySelector("#current-day");
let currentTime = document.querySelector("#current-time");

let Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
currentDay.innerHTML = Days[now.getDay()] + " - ";
currentTime.innerHTML =
  addZero(now.getHours()) + ":" + addZero(now.getMinutes());

let inputForm = document.querySelector("#input-form");
inputForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let inputCity = document.querySelector("#inputCity");
  let city = document.querySelector("span.city");
  city.innerHTML = `${inputCity.value}`;

  let apiKey = "3bb0c822ffbf8d7d00af7f1e1a4032dc";
  let apiCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${apiKey}&units=metric`;
  axios.get(apiCityUrl).then(showInput);

  function showInput(response) {
    let weather = response.data.weather[0].description;
    let temp = Math.round(response.data.main.temp);
    let currentWeather = document.querySelector("#current-weather");
    let currentTemp = document.querySelector("#current-temp");
    currentWeather.innerHTML = weather;
    currentTemp.innerHTML = temp;
    let humidity = response.data.main.humidity;
    let wind = Math.round(response.data.wind.speed);
    let precipitation = response.data.clouds.all;
    let currentPrecipitation = document.querySelector("#precipitation");
    let currentHumidity = document.querySelector("#humidity");
    let currentWind = document.querySelector("#wind");
    currentPrecipitation.innerHTML = precipitation;
    currentHumidity.innerHTML = humidity;
    currentWind.innerHTML = wind;
  }
});

// let currentTemp = document.querySelector("#current-temp");
// let temp1 = 12;
// let temp2 = 66;
// let tempC = document.querySelector("#tempc");
// let tempF = document.querySelector("#tempf");

// tempF.addEventListener("click", function (event) {
//   event.preventDefault();
//   currentTemp.innerHTML = temp2;
// });
// tempC.addEventListener("click", function (event) {
//   event.preventDefault();
//   currentTemp.innerHTML = temp1;
// });

let currentButton = document.querySelector(".btn-secondary");
currentButton.addEventListener("click", function (event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
  function retrievePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "3bb0c822ffbf8d7d00af7f1e1a4032dc";
    let apiCoordsUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiCoordsUrl).then(showInput);
    function showInput(response) {
      let weather = response.data.weather[0].description;
      let temp = Math.round(response.data.main.temp);
      let city = response.data.name;
      let currentCity = document.querySelector("span.city");
      let currentWeather = document.querySelector("#current-weather");
      let currentTemp = document.querySelector("#current-temp");
      currentCity.innerHTML = city;
      currentTemp.innerHTML = temp;
      currentWeather.innerHTML = weather;
      let humidity = response.data.main.humidity;
      let wind = Math.round(response.data.wind.speed);
      let precipitation = response.data.clouds.all;
      let currentPrecipitation = document.querySelector("#precipitation");
      let currentHumidity = document.querySelector("#humidity");
      let currentWind = document.querySelector("#wind");
      currentPrecipitation.innerHTML = precipitation;
      currentHumidity.innerHTML = humidity;
      currentWind.innerHTML = wind;
    }
  }
});
