function WeatherCard({ weather }) {
    const { name, main, weather: conditions, timezone } = weather;
    const description = conditions[0].description;

    const cityTime = new Date(Date.now() + timezone * 1000).toLocaleTimeString("ru-RU", {
        timeZone: "UTC",
    });

    return (
        <div>
        <h2>{name}</h2>
        <p>{Math.round(main.temp)}°C</p>
        <p>{description}</p>
        <p>Время: {cityTime}</p>
        </div>
    );
}

export default WeatherCard;