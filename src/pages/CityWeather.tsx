import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import useFetchWeather from "../hooks/useFetchWeather";

const CityWeather = () => {
  const { cityName } = useParams<{ cityName: string }>();

  const { weatherData, loading, error } = useFetchWeather(cityName || "");

  if (!cityName) {
    return (
      <div className="flex items-center justify-center ">
        <p className="text-red-500 text-lg">City name is required.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center ">
        <FontAwesomeIcon icon={faSpinner} spin size="2x" />
        <p className="ml-4 text-lg">Loading weather data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center ">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center  px-4">
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
