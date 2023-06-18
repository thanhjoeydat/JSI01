let search_button = document.querySelector(".search_container button");
let search_place_value = document.querySelector(".search_place");
let place = document.querySelector(".place");
let current_weather = document.querySelector(".current_weather");
let temperature = document.querySelector(".temperature span");

search_place_value.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${search_place_value.value}`
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        place.innerText = capitalizeFirstLetter(search_place_value.value);
        console.log("longitude: " + data.results[0].longitude);
        console.log("latitude: " + data.results[0].latitude);

        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${data.results[0].latitude}&longitude=${data.results[0].longitude}&current_weather=true`
        )
          .then(function (res) {
            return res.json();
          })
          .then(function (data) {
            temperature.innerText = data.current_weather.temperature;
            console.log(data);
          });
      });
  }
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
