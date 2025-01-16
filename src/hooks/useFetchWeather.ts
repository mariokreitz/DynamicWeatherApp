import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

type WeatherData = {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
};

const useFetchWeather = (cityName: string) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const params = cityName.includes(",") ? { lat: cityName.split(",")[0], lon: cityName.split(",")[1] } : { q: cityName };

        const response = await axiosInstance.get("weather", { params });
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch weather data. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [cityName]);

  return { weatherData, loading, error };
};

export default useFetchWeather;
