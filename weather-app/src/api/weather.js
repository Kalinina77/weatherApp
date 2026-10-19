const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeather(city) {
    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=ru`;
    const response = await fetch(url);

    if (!response.ok) {
        if (response.status === 404) {
        throw new Error("Город не найден");
        }
        throw new Error("Не удалось загрузить погоду. Попробуйте позже");
    }

    return await response.json();
}