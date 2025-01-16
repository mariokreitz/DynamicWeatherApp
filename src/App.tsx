import { WeatherProvider } from "./context/WeatherContext";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CityWeather from "./pages/CityWeather";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <WeatherProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/city/:cityName" element={<CityWeather />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </WeatherProvider>
  );
};

export default App;
