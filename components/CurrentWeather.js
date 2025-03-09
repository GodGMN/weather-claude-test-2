// CurrentWeather.js
const CurrentWeather = {
  props: {
    location: Object,
    current: Object,
    useMetric: Boolean
  },
  computed: {
    formattedDate() {
      const now = new Date();
      return now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      });
    },
    temperature() {
      return this.useMetric ? `${this.current.temp_c}°C` : `${this.current.temp_f}°F`;
    },
    feelsLike() {
      return this.useMetric ? `${this.current.feelslike_c}°C` : `${this.current.feelslike_f}°F`;
    }
  },
  template: `
    <div class="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg weather-card mb-6 fade-in">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h1 class="text-3xl font-semibold">{{ location.name }}</h1>
          <p class="text-white text-opacity-70">{{ formattedDate }}</p>
        </div>
        <div class="flex items-center">
          <div class="text-right mr-5">
            <div class="text-5xl font-bold">{{ temperature }}</div>
            <div class="text-sm text-white text-opacity-70">Feels like: {{ feelsLike }}</div>
          </div>
          <div class="flex flex-col items-center">
            <img :src="'images/' + current.condition.icon" :alt="current.condition.text" class="weather-icon">
            <p class="mt-1">{{ current.condition.text }}</p>
          </div>
        </div>
      </div>
    </div>
  `
}