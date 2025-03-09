// AirQuality.js
const AirQuality = {
  props: {
    airQuality: Object
  },
  computed: {
    aqiPercentage() {
      // Calculate percentage (limit to max 100%)
      return Math.min((this.airQuality.aqi / 500) * 100, 100) + '%';
    },
    aqiStatus() {
      const aqi = this.airQuality.aqi;
      if (aqi <= 50) return { text: 'Good', color: 'text-green-400' };
      if (aqi <= 100) return { text: 'Moderate', color: 'text-yellow-400' };
      if (aqi <= 150) return { text: 'Unhealthy for Sensitive Groups', color: 'text-orange-400' };
      if (aqi <= 200) return { text: 'Unhealthy', color: 'text-red-400' };
      if (aqi <= 300) return { text: 'Very Unhealthy', color: 'text-purple-400' };
      return { text: 'Hazardous', color: 'text-purple-800' };
    }
  },
  template: `
    <div class="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg weather-card mb-6 fade-in">
      <h2 class="text-xl font-semibold mb-4">Air Quality</h2>
      
      <div class="flex flex-col md:flex-row items-center mb-6">
        <div class="w-full md:w-2/3 mb-4 md:mb-0 md:mr-6">
          <div class="aqi-gauge">
            <div class="aqi-fill" :style="{ width: aqiPercentage }"></div>
          </div>
        </div>
        <div class="text-center md:text-left">
          <p class="font-semibold text-lg">AQI: {{ airQuality.aqi }}</p>
          <p class="text-sm">Status: <span :class="aqiStatus.color">{{ aqiStatus.text }}</span></p>
        </div>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
        <div class="bg-white bg-opacity-5 p-3 rounded-lg text-center">
          <p class="text-xs text-white text-opacity-70 mb-1">PM2.5</p>
          <p class="font-semibold">{{ airQuality.pm2_5.toFixed(1) }}</p>
        </div>
        
        <div class="bg-white bg-opacity-5 p-3 rounded-lg text-center">
          <p class="text-xs text-white text-opacity-70 mb-1">PM10</p>
          <p class="font-semibold">{{ airQuality.pm10.toFixed(1) }}</p>
        </div>
        
        <div class="bg-white bg-opacity-5 p-3 rounded-lg text-center">
          <p class="text-xs text-white text-opacity-70 mb-1">NO2</p>
          <p class="font-semibold">{{ airQuality.no2.toFixed(1) }}</p>
        </div>
        
        <div class="bg-white bg-opacity-5 p-3 rounded-lg text-center">
          <p class="text-xs text-white text-opacity-70 mb-1">O3</p>
          <p class="font-semibold">{{ airQuality.o3.toFixed(1) }}</p>
        </div>
        
        <div class="bg-white bg-opacity-5 p-3 rounded-lg text-center">
          <p class="text-xs text-white text-opacity-70 mb-1">SO2</p>
          <p class="font-semibold">{{ airQuality.so2.toFixed(1) }}</p>
        </div>
      </div>
    </div>
  `
}