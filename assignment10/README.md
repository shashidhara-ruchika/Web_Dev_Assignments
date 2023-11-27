# Weather App

This is a weather app built using React. It provides current weather information and a forecast for a specific city. The app uses the OpenWeatherMap API to fetch weather data.

## Components

### 1. AreaTime

- File: `AreaTime.js`
- Description: Displays the city name and country for the current weather.

### 2. Forecast

- File: `Forecast.js`
- Description: Displays the forecast for a specific day, including temperature highs and lows, and an icon representing the weather.

### 3. HourlyForecast

- File: `HourlyForecast.js`
- Description: Organizes the forecast into hourly segments, displaying the temperature highs and lows for each hour.

### 4. Input

- File: `Input.js`
- Description: Provides a search input to allow users to search for weather information for a specific city.

### 5. Temperature

- File: `Temperature.js`
- Description: Displays the current temperature, a brief description of the weather, and temperature highs and lows.

## Services

### 1. weather.js

- File: `weather.js`
- Description: Contains functions to fetch weather data from the OpenWeatherMap API, format the data, and find the timezone based on latitude and longitude.

## App

### 1. App

- File: `App.js`
- Description: The main component that integrates all the other components. It includes the main layout, input search, current weather display, daily forecast, and hourly forecast.

## Styling

### 1. tailwind.css

- File: `tailwind.css`
- Description: CSS file using Tailwind CSS for styling the application.

## Additional Files

### 1. fonts.css

- File: `fonts.css`
- Description: Imports the 'Poppins' font from Google Fonts.

### 2. API Key

- Description: The OpenWeatherMap API key is used for accessing weather data. It is recommended to keep the API key secure and not expose it in public repositories.

## Usage

1. Install dependencies using `npm install`.
2. Replace the placeholder API key in `weather.js` with your OpenWeatherMap API key.
3. Run the app using `npm start`.

Note: Make sure to comply with OpenWeatherMap's usage policies and terms.

## Tailwind CSS Configuration

### 1. tailwind.config.js

- File: `tailwind.config.js`
- Description: Configuration file for Tailwind CSS, extending its default settings.

## Font Configuration

### 1. fonts.css

- File: `fonts.css`
- Description: Imports the 'Poppins' font from Google Fonts to be used throughout the application.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize, enhance, and deploy this weather app as per your requirements!
