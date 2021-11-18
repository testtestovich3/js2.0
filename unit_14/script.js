const cities = {
  625144: "Minsk",
  1220988: "Moskva",
  703448: "Kyiv",
};

const param = {
  url: "https://api.openweathermap.org/data/2.5/",
  appid: "459f68c624f3b00df3e8d1194383e81c",
};

let selectElement = document.createElement("select");
selectElement.id = "city-two";
let selectOption = "";
for (let key in cities) {
  selectOption = document.createElement("option");
  let out = "";
  let out2 = "";
  for (let i = 0; i < cities[key].length; i++) {
    selectElement.appendChild(selectOption);
    out = key;
    out2 = cities[key];
    console.log(key + "->" + cities[key]);
  }

  selectOption.value = out;
  selectOption.innerHTML = out2;
}

document.body.append(selectElement);

function getWeather() {
  const cityId = document.querySelector("#city-two").value;
  fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeather);
}
function showWeather(data) {
  document.querySelector(".temperatura").innerHTML = `${Math.round(
    data.main.temp
  )} &deg;`;
  document.querySelector(".wind-speed").textContent = `${data.wind.speed} м/с`;
  document.querySelector(
    ".icon-class"
  ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
}

getWeather();
document.querySelector("#city-two").onchange = getWeather;
