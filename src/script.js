const weatherForm = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const weatherResult = document.getElementById("weather-result");
const dateEl = document.querySelector(".weather--date");

function renderDate() {
  const today = new Date();
  const formatted = today.toLocaleDateString("en-US", { day: "numeric", month: "long" });
  dateEl.textContent = `Today, ${formatted}`;
}

async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=29fc82ae5a4520338fa5eb62b3737d0d&units=metric&lang=ru`);
    
    if (!response.ok) {
        throw new Error("Город не найден");
    }
    
    const data = await response.json();
    return data;
}

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();
    try {
        const data = await getWeather(city);
        console.log(data);
        renderWeather(data);
    } catch (error) {
        console.error(error);
        weatherResult.textContent = "Город не найден";
    }
});

function renderWeather(data) {
    weatherResult.innerHTML = "";

    const cityEl = document.createElement("h2");
    cityEl.className = "weather--city";
    cityEl.textContent = data.name;

    const tempEl = document.createElement("p");
    tempEl.className = "weather--temp";
    tempEl.textContent = `${Math.round(data.main.temp)}°C`;

    const iconEl = document.createElement("img");
    iconEl.className = "weather--icon";
    iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    iconEl.alt = data.weather[0].description;

    const mainEl = document.createElement("div");
    mainEl.className = "weather--main";
    mainEl.append(tempEl, iconEl);

    const windEl = document.createElement("p");
    windEl.className = "weather--wind";
    windEl.textContent = `Wind | ${data.wind.speed} m/s`;

    const humEl = document.createElement("p");
    humEl.className = "weather--hum";
    humEl.textContent = `Hum | ${data.main.humidity} %`;

    weatherResult.append(cityEl, mainEl, windEl, humEl);
}

renderDate();