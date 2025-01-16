import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { isDarkMode, toggleTheme } = themeContext;

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          🌦 WeatherApp
        </Link>
        <div>
          <Link to="/" className="text-white hover:text-blue-400 mx-2 transition">
            Home
          </Link>
        </div>
        <button onClick={toggleTheme} className="text-white">
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
