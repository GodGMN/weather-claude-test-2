# Weather Vue App

A modern weather application built with Vue.js and Tailwind CSS.

> **Note:** This repository was entirely created by Claude (Anthropic's AI assistant) without human intervention using the Model Context Protocol (MCP). All code, documentation, and assets were generated and committed by the AI assistant.

## Features

- Current weather display with details
- Air quality information with visual gauge
- Hourly forecast with scrollable display
- 5-day weather forecast
- Sun and moon information (sunrise, sunset, moon phase)
- Temperature unit toggle (°C/°F)
- City search functionality
- Responsive design for all screen sizes
- Smooth animations and transitions

## Technologies Used

- Vue.js 3 (CDN version)
- Tailwind CSS
- Font Awesome icons
- CSS custom animations

## Project Structure

```
weather-claude-test-2/
├── components/           # Vue components
│   ├── AirQuality.js
│   ├── CurrentWeather.js
│   ├── DailyForecast.js
│   ├── HourlyForecast.js
│   ├── SearchBar.js  
│   ├── SunMoonInfo.js
│   └── WeatherDetails.js
├── images/               # SVG weather icons
│   ├── clear-night.svg
│   ├── cloudy.svg
│   ├── partly-cloudy.svg
│   └── sunny.svg
├── app.js                # Main Vue application
├── index.html            # Main HTML file
├── styles.css            # Custom CSS styles
├── weatherData.js        # Mock weather data
└── README.md             # Documentation
```

## How to Run

Simply open `index.html` in your web browser. This application runs entirely in the client-side browser without requiring a build step.

## Data Source

This demo uses mock weather data stored in `weatherData.js`. In a production version, this would be replaced with API calls to a weather data provider.

## Future Improvements

- Add a dark/light theme toggle
- Implement local storage for user preferences
- Add more detailed weather information
- Implement geolocation for automatic local weather
- Add weather alerts and notifications
- Include historical weather data charts
- Add radar and satellite map views