// DailyForecast.js
const DailyForecast = {
  props: {
    dailyData: Array,
    useMetric: Boolean
  },
  methods: {
    formatDay(dateStr) {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', { weekday: 'short' });
    },
    formatDate(dateStr) {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    },
    getMaxTemp(day) {
      return this.useMetric 
        ? `${day.day.maxtemp_c.toFixed(1)}°C` 
        : `${day.day.maxtemp_f.toFixed(1)}°F`;
    },
    getMinTemp(day) {
      return this.useMetric 
        ? `${day.day.mintemp_c.toFixed(1)}°C` 
        : `${day.day.mintemp_f.toFixed(1)}°F`;
    }
  },
  template: `
    <div class="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg weather-card mb-6 fade-in">
      <h2 class="text-xl font-semibold mb-4">5-Day Forecast</h2>
      
      <div class="space-y-3">
        <div 
          v-for="(day, index) in dailyData" 
          :key="index"
          class="bg-white bg-opacity-5 rounded-lg p-4 flex items-center justify-between"
        >
          <div class="w-1/4 md:w-1/6">
            <p class="font-semibold">{{ formatDay(day.date) }}</p>
            <p class="text-sm text-white text-opacity-70">{{ formatDate(day.date) }}</p>
          </div>
          
          <div class="flex items-center justify-center flex-1">
            <img 
              :src="'images/' + day.day.condition.icon" 
              :alt="day.day.condition.text" 
              class="weather-icon-sm mr-3"
            >
            <span class="hidden md:inline">{{ day.day.condition.text }}</span>
          </div>
          
          <div class="text-right w-1/4 md:w-1/6">
            <p class="font-semibold">{{ getMaxTemp(day) }}</p>
            <p class="text-sm text-white text-opacity-70">{{ getMinTemp(day) }}</p>
          </div>
        </div>
      </div>
    </div>
  `
}