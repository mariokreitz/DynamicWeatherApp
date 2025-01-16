# Dynamic Weather App [![Netlify Status](https://api.netlify.com/api/v1/badges/e1798d2a-1c75-4acd-af3d-3ef701491dbd/deploy-status)](https://app.netlify.com/sites/dynamicweatherapp-mk/deploys)

A beautiful and dynamic weather application built with React, Vite, TypeScript, and TailwindCSS. This app allows users to search for weather data for various cities and displays information like temperature, weather description, humidity, and wind speed. The app features a clean UI with FontAwesome icons and supports light and dark themes.

### 🚀 Live Demo
You can try the live demo of the application deployed on Netlify:

[Live Demo on Netlify](https://dynamicweatherapp-mk.netlify.app/)

---

### 🛠️ Features

- **Real-time Weather Updates:** Get current weather information for any city.
- **Search Functionality:** Search for weather by city name.
- **Icon Representation:** Weather conditions are represented by beautiful icons from FontAwesome.
- **Responsive Design:** The app is fully responsive and works seamlessly on mobile and desktop.
- **Light & Dark Themes:** Toggle between light and dark modes for a better user experience.
- **LocalStorage Support:** The app stores user preferences (like theme choice) using LocalStorage.
- **Context API for State Management:** All state management is handled with React's Context API for a more scalable solution.

---

### ⚙️ Technologies Used

- **React**: Frontend JavaScript library.
- **Vite**: Build tool and development server for faster development.
- **TypeScript**: Strongly-typed JavaScript for better maintainability and safety.
- **TailwindCSS**: Utility-first CSS framework for custom styling.
- **FontAwesome**: For beautiful icons to represent weather conditions.
- **OpenWeatherMap API**: For fetching weather data.
- **Axios**: For making HTTP requests to the OpenWeatherMap API.
- **React Router**: For navigation between pages.
- **LocalStorage**: For storing user preferences.

---

### 📦 Installation

To get started with this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd weather-app
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

---

### 🌐 Deployment with Netlify

The app is deployed on Netlify. If you want to deploy it on your own Netlify account, follow these steps:

1. **Push your code to GitHub.**
2. **Create a new site on Netlify** and link your GitHub repository.
3. **Set the build command and publish directory**:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

Netlify will automatically build and deploy your app. Once done, you'll receive a public URL for your deployed app.

---

### 📝 Notes

- Make sure to create a `.env` file if you want to add your own API keys or environment variables.
- The app uses the **OpenWeatherMap API**, so you'll need an API key to get the weather data. You can sign up for an API key [here](https://openweathermap.org/api).

---

### 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
