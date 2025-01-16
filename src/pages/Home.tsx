import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { Link } from "react-router-dom";

const Home = () => {
  const weatherContext = useContext(WeatherContext);

  if (!weatherContext) return null;

  const { city, setCity } = weatherContext;

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Dynamic Weather App 🌤</h1>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={handleCityChange}
        className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-lg mb-4 w-64 text-center bg-gray-50 dark:bg-gray-800"
      />
      <Link to={`/city/${city}`} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg">
        Check Weather
      </Link>
    </div>
  );
};

export default Home;
