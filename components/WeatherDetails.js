// WeatherDetails.js
const WeatherDetails = {
  props: {
    current: Object,
    useMetric: Boolean
  },
  computed: {
    windSpeed() {
      return this.useMetric ? `${this.current.wind_kph} km/h` : `${this.current.wind_mph} mph`;
    }
  },
  template: `
    <div class="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg weather-card mb-6 fade-in">
      <h2 class="text-xl font-semibold mb-4">Weather Details</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="flex items-center">
          <div class="bg-blue-500 bg-opacity-20 p-3 rounded-lg mr-3">
            <i class="fas fa-wind text-lg"></i>
          </div>
          <div>
            <p class="text-sm text-white text-opacity-70">Wind Speed</p>
            <p class="font-semibold">{{ windSpeed }}</p>
          </div>
        </div>
        
        <div class="flex items-center">
          <div class="bg-blue-500 bg-opacity-20 p-3 rounded-lg mr-3">
            <i class="fas fa-compass text-lg"></i>
          </div>
          <div>
            <p class="text-sm text-white text-opacity-70">Wind Direction</p>
            <p class="font-semibold">{{ current.wind_dir }}</p>
          </div>
        </div>
        
        <div class="flex items-center">
          <div class="bg-blue-500 bg-opacity-20 p-3 rounded-lg mr-3">
            <i class="fas fa-tint text-lg"></i>
          </div>
          <div>
            <p class="text-sm text-white text-opacity-70">Humidity</p>
            <p class="font-semibold">{{ current.humidity }}%</p>
          </div>
        </div>
        
        <div class="flex items-center">
          <div class="bg-blue-500 bg-opacity-20 p-3 rounded-lg mr-3">
            <i class="fas fa-sun text-lg"></i>
          </div>
          <div>
            <p class="text-sm text-white text-opacity-70">UV Index</p>
            <p class="font-semibold">{{ current.uv }}</p>
          </div>
        </div>
      </div>
    </div>
  `
}