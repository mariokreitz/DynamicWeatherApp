import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          🌦 WeatherApp
        </Link>
        <div>
          <Link to="/" className="text-white hover:text-blue-400 mx-2 transition">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
