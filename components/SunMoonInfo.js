// SunMoonInfo.js
const SunMoonInfo = {
  props: {
    astro: Object
  },
  template: `
    <div class="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg weather-card mb-6 fade-in">
      <h2 class="text-xl font-semibold mb-4">Sun & Moon</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="flex items-center">
          <div class="bg-yellow-500 bg-opacity-20 p-4 rounded-lg mr-4">
            <i class="fas fa-sun text-yellow-300 text-xl"></i>
          </div>
          <div>
            <p class="text-sm text-white text-opacity-70">Sunrise</p>
            <p class="font-semibold">{{ astro.sunrise }}</p>
          </div>
        </div>
        
        <div class="flex items-center">
          <div class="bg-indigo-500 bg-opacity-20 p-4 rounded-lg mr-4">
            <i class="fas fa-moon text-indigo-300 text-xl"></i>
          </div>
          <div>
            <p class="text-sm text-white text-opacity-70">Sunset</p>
            <p class="font-semibold">{{ astro.sunset }}</p>
          </div>
        </div>
        
        <div class="flex items-center">
          <div class="bg-purple-500 bg-opacity-20 p-4 rounded-lg mr-4">
            <i class="fas fa-star-and-crescent text-purple-300 text-xl"></i>
          </div>
          <div>
            <p class="text-sm text-white text-opacity-70">Moon Phase</p>
            <p class="font-semibold">{{ astro.moonphase }}</p>
          </div>
        </div>
      </div>
    </div>
  `
}