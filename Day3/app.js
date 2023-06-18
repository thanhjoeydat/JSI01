let search = document.getElementById("search");
search.addEventListener("click", function () {
  let location = document.getElementById("searcH").value;
  // console.log(location);
  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // console.log(data.results[0].longitude);
      // console.log(data.results[0].latitude);
      console.log(data);
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${data.results[0].latitude}&longitude=${data.results[0].longitude}&current_weather=true`
      )
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          console.log(data);
          let temp = document.getElementById("temperature");
          // console.log(data.current_weather.temperature);
          temp.innerHTML = `${data.current_weather.temperature} <sup> o</sup>`;
          let place = document.getElementById("place");
          place.innerHTML = location;
          let d = new Date();
          console.log(d);
        });
    });
});
