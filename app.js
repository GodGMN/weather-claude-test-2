// Main App.js
const app = Vue.createApp({
  data() {
    return {
      location: weatherData.location,
      current: weatherData.current,
      forecast: weatherData.forecast,
      useMetric: true, // Default to metric units (Celsius)
      cities: [
        { name: "Madrid", country: "Spain" },
        { name: "London", country: "UK" },
        { name: "New York", country: "USA" },
        { name: "Tokyo", country: "Japan" },
        { name: "Sydney", country: "Australia" }
      ],
      isLoading: false
    };
  },

  computed: {
    todayHourlyForecast() {
      if (!this.forecast || !this.forecast.forecastday || this.forecast.forecastday.length === 0) {
        return [];
      }
      
      return this.forecast.forecastday[0].hour;
    },
    
    dailyForecast() {
      if (!this.forecast || !this.forecast.forecastday) {
        return [];
      }
      
      return this.forecast.forecastday;
    },
    
    todayAstro() {
      if (!this.forecast || !this.forecast.forecastday || this.forecast.forecastday.length === 0) {
        return { sunrise: '07:00 AM', sunset: '07:00 PM', moonphase: 'Unknown' };
      }
      
      return this.forecast.forecastday[0].astro;
    }
  },

  methods: {
    toggleUnit() {
      this.useMetric = !this.useMetric;
    },
    
    searchCity(query) {
      // This would normally make an API call to fetch weather data
      // For this demo, we'll just simulate loading and then pretend to update the city
      this.isLoading = true;
      
      setTimeout(() => {
        // Check if query matches any of our mock cities
        const foundCity = this.cities.find(city => 
          city.name.toLowerCase() === query.toLowerCase() ||
          query.toLowerCase().includes(city.name.toLowerCase())
        );
        
        if (foundCity) {
          // Update location with the "found" city
          this.location = {
            ...this.location,
            name: foundCity.name,
            country: foundCity.country
          };
        } else {
          // Just update with the searched query
          this.location = {
            ...this.location,
            name: query
          };
        }
        
        // In a real app, we would update weather data here
        this.isLoading = false;
        
        // Show a notification
        this.showNotification(`Weather data loaded for ${this.location.name}`);
      }, 1000);
    },
    
    showNotification(message) {
      // Simple notification (in a real app, we'd use a better notification system)
      alert(message);
    }
  },

  template: `
    <div class="max-w-6xl mx-auto px-4 py-8">
      <header class="mb-8 flex flex-col md:flex-row items-center justify-between">
        <div class="mb-4 md:mb-0">
          <h1 class="text-3xl font-bold mb-1">Weather Vue</h1>
          <p class="text-white text-opacity-70">Real-time weather using Vue.js & Tailwind CSS</p>
        </div>
        <div class="flex items-center">
          <button 
            @click="toggleUnit" 
            class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg mr-4 btn-transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {{ useMetric ? 'Switch to °F' : 'Switch to °C' }}
          </button>
        </div>
      </header>
      
      <search-bar :on-search="searchCity"></search-bar>
      
      <div v-if="isLoading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
      
      <div v-else>
        <current-weather 
          :location="location" 
          :current="current" 
          :use-metric="useMetric"
        ></current-weather>
        
        <weather-details 
          :current="current" 
          :use-metric="useMetric"
        ></weather-details>
        
        <air-quality 
          :air-quality="current.air_quality"
        ></air-quality>
        
        <hourly-forecast 
          :hourly-data="todayHourlyForecast" 
          :use-metric="useMetric"
        ></hourly-forecast>
        
        <daily-forecast 
          :daily-data="dailyForecast" 
          :use-metric="useMetric"
        ></daily-forecast>
        
        <sun-moon-info 
          :astro="todayAstro"
        ></sun-moon-info>
      </div>
      
      <footer class="mt-12 text-center text-white text-opacity-70">
        <p>Weather Vue | Created with ❤️ using Vue.js & Tailwind CSS | &copy; ${new Date().getFullYear()}</p>
      </footer>
    </div>
  `
});

// Register components
app.component('current-weather', CurrentWeather);
app.component('weather-details', WeatherDetails);
app.component('air-quality', AirQuality);
app.component('hourly-forecast', HourlyForecast);
app.component('daily-forecast', DailyForecast);
app.component('sun-moon-info', SunMoonInfo);
app.component('search-bar', SearchBar);

// Mount the app
app.mount('#app');