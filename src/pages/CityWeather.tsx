import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

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

const CityWeather = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("", {
          params: { q: cityName },
        });
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FontAwesomeIcon icon={faSpinner} spin size="2x" />
        <p className="ml-4 text-lg">Loading weather data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      {weatherData && (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-80 text-center">
          <h2 className="text-2xl font-bold mb-4">{weatherData.name}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
            className="mx-auto"
          />
          <p className="text-lg capitalize">{weatherData.weather[0].description}</p>
          <p className="text-4xl font-bold mt-2">{weatherData.main.temp}°C</p>
          <p className="text-sm mt-2">Humidity: {weatherData.main.humidity}%</p>
          <p className="text-sm">Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default CityWeather;
