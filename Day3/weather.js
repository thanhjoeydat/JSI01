fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=21.0245&longitude=105.84117&current_weather=true"
)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let html = "";
    console.log(data);
    for (let i = 0; i < 1; i++) {
      let object2 = data;
      html += `<body>
      <div class="container">
        <h2 class="country"><span>Hanoi</span></h2>
        <i class="fa-solid fa-cloud"></i>
        <h3 class="temp">${object2.current_weather.temperature}°C</h3>
        <hr>
        <br>
        <i class="icofont-wind"></i>
        <i class="fa-duotone fa-windsock"></i>
        <h3 class="windDirection">Wind direction: ${object2.current_weather.winddirection}°</h3>
        <h3 class="windSpeed">Wind speed: ${object2.current_weather.windspeed}</h3>
        <h4 class="time"><i>Time: ${object2.current_weather.time}</i></h4>
      </div>`;
    }
    let UppeR = document.querySelector(".UPPER");
    UppeR.innerHTML = html;
  })
  .catch(function (e) {
    console.log(e);
  });
