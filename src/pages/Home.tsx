import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const weatherContext = useContext(WeatherContext);

  if (!weatherContext) return null;

  const { city, setCity } = weatherContext;

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const geoCity = `${latitude},${longitude}`;
          setCity(geoCity);
        },
        (error) => {
          alert("Unable to retrieve your location");
          console.error(error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Dynamic Weather App 🌤</h1>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={handleCityChange}
        className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-lg mb-4 w-64 text-center bg-gray-50 dark:bg-gray-800"
      />
      <div className="mb-4">
        <Link to={`/city/${city}`} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg">
          Check Weather
        </Link>
      </div>
      <button
        onClick={handleGeolocation}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg flex items-center">
        <FontAwesomeIcon icon={faLocationArrow} className="mr-2" />
        Use My Location
      </button>
    </div>
  );
};

export default Home;
