<template>
  <div>
    <div class="flex justify-center mb-8 w-full">
      <div class="bg-gray-700 font-bold text-center rounded-md grid grid-cols-2 md:grid-cols-4">
        <div class="p-4">
          <div class="flex justify-center">
            <div class="bg-blue-500 h-8 w-8 rounded-full mb-2"></div>
          </div>
          <span class="uppercase text-white">Color</span>
        </div>
        <div class="p-4">
          <select class="block mb-1 p-2 w-full">
            <option>Poppins</option>
            <option>Nunito</option>
            <option>Merriweather</option>
            <option>Inconsolata</option>
            <option>Karla</option>
            <option>Fira Sans</option>
            <option>Saira Semi Condensed</option>
          </select>
          <span class="uppercase text-white">Typography</span>
        </div>
        <div class="p-4">
          <div class="text-white">
            <span>A</span>
            <span class="text-2xl">A</span>
            <span class="text-4xl">A</span>
          </div>
          <span class="uppercase text-white">Text size</span>
        </div>
        <div class="p-4">
          <div class="flex justify-center text-white mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-grid-1x2-fill" viewBox="0 0 16 16">
              <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z"/>
            </svg>
          </div>
          <span class="uppercase text-white">Sections</span>
        </div>
      </div>
    </div>
    <div class="overflow-scroll">
      <div class="bg-white p-12 shadow-lg w-full" style="width: 1340px;">
        <div class="flex items-center">
          <div class="w-1/4">
            <div class="bg-gray-100 cursor-pointer h-64 w-64 flex items-center justify-center rounded-full">
              <div>
                <div class="flex justify-center mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                  </svg>
                </div>
                <span class="font-bold text-gray-400 uppercase">Select your picture</span>
              </div>
            </div>
          </div>
          <div class="w-3/4">
            <input class="block font-bold text-6xl w-full" type="text" placeholder="Your name" />
            <input class="block font-bold text-2xl uppercase w-full" type="text" placeholder="Your profession or specialty" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CVBuilder'
}
</script>
