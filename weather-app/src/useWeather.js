import { useState } from "react";
import { fetchWeather } from "./api/weather";

export function useWeather() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function search(city) {
        setLoading(true);
        setError(null);
        setData(null);

        try {
        const result = await fetchWeather(city);
        setData(result);
        } catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    }
    return { data, loading, error, search };
}