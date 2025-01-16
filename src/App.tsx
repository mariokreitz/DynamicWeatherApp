import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WeatherProvider } from "./context/WeatherContext";
import Home from "./pages/Home";
import CityWeather from "./pages/CityWeather";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <WeatherProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/city/:cityName" element={<CityWeather />} />
          </Routes>
        </div>
      </Router>
    </WeatherProvider>
  );
};

export default App;
