// HourlyForecast.js
const HourlyForecast = {
  props: {
    hourlyData: Array,
    useMetric: Boolean
  },
  methods: {
    getTime(timeStr) {
      // Extract just the time part from the time string
      return timeStr.split(' ')[1] || timeStr;
    },
    getTemp(hour) {
      return this.useMetric 
        ? `${hour.temp_c.toFixed(1)}°C` 
        : `${hour.temp_f.toFixed(1)}°F`;
    }
  },
  template: `
    <div class="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg weather-card mb-6 fade-in">
      <h2 class="text-xl font-semibold mb-4">Hourly Forecast</h2>
      
      <div class="flex overflow-x-auto hourly-container pb-2">
        <div 
          v-for="(hour, index) in hourlyData" 
          :key="index"
          class="flex-shrink-0 text-center mx-2 first:ml-0 last:mr-0 p-4 bg-white bg-opacity-5 rounded-lg min-w-[100px]"
        >
          <p class="font-medium mb-2">{{ getTime(hour.time) }}</p>
          <img 
            :src="'images/' + hour.condition.icon" 
            :alt="hour.condition.text" 
            class="weather-icon-sm mx-auto my-2"
          >
          <p class="font-semibold">{{ getTemp(hour) }}</p>
          <p class="text-sm text-white text-opacity-70">{{ hour.humidity }}%</p>
        </div>
      </div>
    </div>
  `
}