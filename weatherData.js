// Mock weather data stored as a JavaScript variable
const weatherData = {
  location: {
    name: "Madrid",
    region: "Madrid",
    country: "Spain",
    lat: 40.42,
    lon: -3.7,
    timezone: "Europe/Madrid"
  },
  current: {
    temp_c: 18.5,
    temp_f: 65.3,
    condition: {
      text: "Partly cloudy",
      icon: "partly-cloudy.svg"
    },
    wind_kph: 15.1,
    wind_mph: 9.4,
    wind_dir: "NE",
    humidity: 62,
    feelslike_c: 17.2,
    feelslike_f: 63.0,
    uv: 5,
    air_quality: {
      pm2_5: 8.4,
      pm10: 12.6,
      no2: 10.2,
      o3: 68.3,
      so2: 3.1,
      aqi: 48
    }
  },
  forecast: {
    forecastday: [
      {
        date: "2025-03-09",
        date_epoch: 1725830400,
        day: {
          maxtemp_c: 21.3,
          maxtemp_f: 70.3,
          mintemp_c: 10.2,
          mintemp_f: 50.4,
          avgtemp_c: 15.6,
          avgtemp_f: 60.1,
          condition: {
            text: "Partly cloudy",
            icon: "partly-cloudy.svg"
          },
          uv: 5.2,
          rain_chance: 10
        },
        astro: {
          sunrise: "07:43 AM",
          sunset: "07:12 PM",
          moonphase: "Waning Gibbous"
        },
        hour: [
          {
            time: "00:00",
            temp_c: 12.4,
            temp_f: 54.3,
            condition: {
              text: "Clear",
              icon: "clear-night.svg"
            },
            humidity: 71
          },
          {
            time: "03:00",
            temp_c: 11.2,
            temp_f: 52.2,
            condition: {
              text: "Clear",
              icon: "clear-night.svg"
            },
            humidity: 75
          },
          {
            time: "06:00",
            temp_c: 10.8,
            temp_f: 51.4,
            condition: {
              text: "Clear",
              icon: "clear-night.svg"
            },
            humidity: 78
          },
          {
            time: "09:00",
            temp_c: 14.5,
            temp_f: 58.1,
            condition: {
              text: "Sunny",
              icon: "sunny.svg"
            },
            humidity: 65
          },
          {
            time: "12:00",
            temp_c: 18.2,
            temp_f: 64.8,
            condition: {
              text: "Sunny",
              icon: "sunny.svg"
            },
            humidity: 55
          },
          {
            time: "15:00",
            temp_c: 21.3,
            temp_f: 70.3,
            condition: {
              text: "Partly cloudy",
              icon: "partly-cloudy.svg"
            },
            humidity: 48
          },
          {
            time: "18:00",
            temp_c: 18.7,
            temp_f: 65.7,
            condition: {
              text: "Partly cloudy",
              icon: "partly-cloudy.svg"
            },
            humidity: 58
          },
          {
            time: "21:00",
            temp_c: 15.1,
            temp_f: 59.2,
            condition: {
              text: "Clear",
              icon: "clear-night.svg"
            },
            humidity: 68
          }
        ]
      },
      {
        date: "2025-03-10",
        date_epoch: 1725916800,
        day: {
          maxtemp_c: 23.7,
          maxtemp_f: 74.7,
          mintemp_c: 12.5,
          mintemp_f: 54.5,
          avgtemp_c: 18.1,
          avgtemp_f: 64.6,
          condition: {
            text: "Sunny",
            icon: "sunny.svg"
          },
          uv: 6.4,
          rain_chance: 0
        },
        astro: {
          sunrise: "07:41 AM",
          sunset: "07:13 PM",
          moonphase: "Waning Gibbous"
        },
        hour: [
          {
            time: "00:00",
            temp_c: 13.2,
            temp_f: 55.8,
            condition: {
              text: "Clear",
              icon: "clear-night.svg"
            },
            humidity: 72
          },
          {
            time: "06:00",
            temp_c: 12.5,
            temp_f: 54.5,
            condition: {
              text: "Clear",
              icon: "clear-night.svg"
            },
            humidity: 75
          },
          {
            time: "12:00",
            temp_c: 20.6,
            temp_f: 69.1,
            condition: {
              text: "Sunny",
              icon: "sunny.svg"
            },
            humidity: 50
          },
          {
            time: "18:00",
            temp_c: 19.8,
            temp_f: 67.6,
            condition: {
              text: "Clear",
              icon: "clear-night.svg"
            },
            humidity: 55
          }
        ]
      },
      {
        date: "2025-03-11",
        date_epoch: 1726003200,
        day: {
          maxtemp_c: 25.1,
          maxtemp_f: 77.2,
          mintemp_c: 13.8,
          mintemp_f: 56.8,
          avgtemp_c: 19.5,
          avgtemp_f: 67.1,
          condition: {
            text: "Sunny",
            icon: "sunny.svg"
          },
          uv: 6.8,
          rain_chance: 0
        },
        astro: {
          sunrise: "07:40 AM",
          sunset: "07:14 PM",
          moonphase: "Last Quarter"
        },
        hour: []
      },
      {
        date: "2025-03-12",
        date_epoch: 1726089600,
        day: {
          maxtemp_c: 24.8,
          maxtemp_f: 76.6,
          mintemp_c: 14.2,
          mintemp_f: 57.6,
          avgtemp_c: 19.5,
          avgtemp_f: 67.1,
          condition: {
            text: "Partly cloudy",
            icon: "partly-cloudy.svg"
          },
          uv: 6.5,
          rain_chance: 20
        },
        astro: {
          sunrise: "07:38 AM",
          sunset: "07:15 PM",
          moonphase: "Last Quarter"
        },
        hour: []
      },
      {
        date: "2025-03-13",
        date_epoch: 1726176000,
        day: {
          maxtemp_c: 22.3,
          maxtemp_f: 72.1,
          mintemp_c: 15.1,
          mintemp_f: 59.2,
          avgtemp_c: 18.7,
          avgtemp_f: 65.7,
          condition: {
            text: "Cloudy",
            icon: "cloudy.svg"
          },
          uv: 5.1,
          rain_chance: 35
        },
        astro: {
          sunrise: "07:37 AM",
          sunset: "07:16 PM",
          moonphase: "Waning Crescent"
        },
        hour: []
      }
    ]
  }
};