<template>
  <div>
    <div class="flex justify-center mb-8 w-full">
      <div class="bg-gray-700 font-bold text-center rounded-md grid grid-cols-2 md:grid-cols-4" style="max-width: 21cm;">
        <div class="p-4">
          <div class="flex justify-center">
            <div class="h-8 w-8 cursor-pointer rounded-full mb-2" :style="{ 'background-color': settings.color.hex }" @click="showColorPicker = true"></div>
          </div>
          <span class="uppercase text-white">Color</span>
        </div>
        <div class="p-4">
          <select class="block mb-1 p-2 w-full" v-model="settings.typography">
            <option value="poppins">Poppins</option>
            <option value="nunito">Nunito</option>
            <option value="merriweather">Merriweather</option>
            <option value="inconsolata">Inconsolata</option>
            <option value="karla">Karla</option>
            <option value="fira-sans">Fira Sans</option>
            <option value="saira-semi-condensed">Saira Semi Condensed</option>
          </select>
          <span class="uppercase text-white">Typography</span>
        </div>
        <div class="p-4">
          <div>
            <span class="cursor-default" :class="{ 'inactive-text-size-option': settings.textSize !== 'small' }" :style="{ 'color': settings.textSize === 'small' ? settings.color.hex : '#a1a1aa' }" @click="settings.textSize = 'small'">A</span>
            <span class="cursor-default text-2xl" :class="{ 'inactive-text-size-option': settings.textSize !== 'medium' }" :style="{ 'color': settings.textSize === 'medium' ? settings.color.hex : '#a1a1aa' }" @click="settings.textSize = 'medium'">A</span>
            <span class="cursor-default text-4xl" :class="{ 'inactive-text-size-option': settings.textSize !== 'large' }" :style="{ 'color': settings.textSize === 'large' ? settings.color.hex : '#a1a1aa' }" @click="settings.textSize = 'large'">A</span>
          </div>
          <span class="uppercase text-white">Text size</span>
        </div>
        <div class="p-4">
          <div class="flex justify-center text-white mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="cursor-pointer text-gray-400 hover:text-white bi bi-grid-1x2-fill" viewBox="0 0 16 16" @click="showSectionManagement = true">
              <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z"/>
            </svg>
          </div>
          <span class="uppercase text-white">Sections</span>
        </div>
      </div>
    </div>
    <div class="flex justify-center overflow-scroll w-full" :class="fontClass">
      <div id="cv" class="bg-white overflow-scroll shadow-lg w-full">
        <div class="flex items-center w-full">
          <div class="mr-8" style="width: 7cm;" v-show="settings.sectionVisibility.picture">
            <label for="cv-picture">
              <div class="profile-picture-placeholder bg-gray-100 cursor-pointer h-48 w-48 flex items-center justify-center rounded-full">
                <div v-show="profilePictureFileBase64 === null">
                  <div class="flex justify-center mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                    </svg>
                  </div>
                  <span class="font-bold text-sm text-gray-400 uppercase">Select your picture</span>
                </div>
              </div>
            </label>
            <input class="hidden" id="cv-picture" type="file" @change="changeProfilePicture" />
          </div>
          <div style="width: 14cm;">
            <TextField class="block font-bold w-full" :class="{ 'text-2xl': settings.textSize === 'small', 'text-4xl': settings.textSize === 'medium', 'text-6xl': settings.textSize === 'large' }" :text-size="settings.textSize" :style="{ 'color': settings.color.hex }" type="text" placeholder="Your name" v-model="cvData.name.value" v-show="settings.sectionVisibility.name" />
            <TextField class="block font-bold uppercase w-full" :class="{ 'text-sm': settings.textSize === 'small', 'text-lg': settings.textSize === 'medium', 'text-2xl': settings.textSize === 'large' }" :text-size="settings.textSize" type="text" placeholder="Your profession or specialty" v-model="cvData.profession.value" v-show="settings.sectionVisibility.profession" />
          </div>
        </div>
        <div class="flex space-x-8 mt-4">
          <div class="mt-1" style="width: 7cm;">
            <div v-show="settings.sectionVisibility.profile">
              <TextField class="block font-bold uppercase w-full" :class="{ 'text-sm': settings.textSize === 'small', 'text-lg': settings.textSize === 'medium', 'text-2xl': settings.textSize === 'large' }" :text-size="settings.textSize" type="text" placeholder="Profile" v-model="cvData.profile.label" />
              <TextField class="block w-full" :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" :text-size="settings.textSize" type="text" placeholder="Write here a paragraph about yourself." v-model="cvData.profile.value" />
            </div>
            <div class="mt-2" v-show="settings.sectionVisibility.birthDate || settings.sectionVisibility.nationality || settings.sectionVisibility.address || settings.sectionVisibility.maritalStatus">
              <TextField class="block font-bold uppercase w-full" :class="{ 'text-sm': settings.textSize === 'small', 'text-lg': settings.textSize === 'medium', 'text-2xl': settings.textSize === 'large' }" :text-size="settings.textSize" type="text" placeholder="Personal details" v-model="cvData.personalDetails.label" />
            </div>
            <div v-show="settings.sectionVisibility.birthDate">
              <TextField class="block font-bold w-full" :class="{ 'text-sm': settings.textSize === 'small', 'text-lg': settings.textSize === 'medium', 'text-2xl': settings.textSize === 'large' }" :text-size="settings.textSize" :style="{ 'color': settings.color.hex }" type="text" placeholder="Birth date" v-model="cvData.birthDate.label" />
              <TextField class="block w-full" :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" :text-size="settings.textSize" type="text" placeholder="Enter your birth date" v-model="cvData.birthDate.value" />
            </div>
            <div v-show="settings.sectionVisibility.nationality">
              <TextField class="block font-bold w-full" :class="{ 'text-sm': settings.textSize === 'small', 'text-lg': settings.textSize === 'medium', 'text-2xl': settings.textSize === 'large' }" :text-size="settings.textSize" :style="{ 'color': settings.color.hex }" type="text" placeholder="Nationality" v-model="cvData.nationality.label" />
              <TextField class="block w-full" :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" :text-size="settings.textSize" type="text" placeholder="Enter your nationality" v-model="cvData.nationality.value" />
            </div>
            <div v-show="settings.sectionVisibility.address">
              <TextField class="block font-bold w-full" :class="{ 'text-sm': settings.textSize === 'small', 'text-lg': settings.textSize === 'medium', 'text-2xl': settings.textSize === 'large' }" :text-size="settings.textSize" :style="{ 'color': settings.color.hex }" type="text" placeholder="Address" v-model="cvData.address.label" />
              <TextField class="block w-full" :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" :text-size="settings.textSize" type="text" placeholder="Enter your address" v-model="cvData.address.value" />
            </div>
            <div v-show="settings.sectionVisibility.maritalStatus">
              <TextField class="block font-bold w-full" :class="{ 'text-sm': settings.textSize === 'small', 'text-lg': settings.textSize === 'medium', 'text-2xl': settings.textSize === 'large' }" :text-size="settings.textSize" :style="{ 'color': settings.color.hex }" type="text" placeholder="Marital status" v-model="cvData.maritalStatus.label" />
              <TextField class="block w-full" :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" :text-size="settings.textSize" type="text" placeholder="Enter your marital status" v-model="cvData.maritalStatus.value" />
            </div>
            <div class="mt-2 mb-3" v-show="settings.sectionVisibility.email || settings.sectionVisibility.phoneNumber || settings.sectionVisibility.website || settings.sectionVisibility.linkedIn || settings.sectionVisibility.facebook || settings.sectionVisibility.twitter || settings.sectionVisibility.gitHub || settings.sectionVisibility.instagram">
              <TextField class="block font-bold uppercase w-full" :class="{ 'text-sm': settings.textSize === 'small', 'text-lg': settings.textSize === 'medium', 'text-2xl': settings.textSize === 'large' }" :text-size="settings.textSize" type="text" placeholder="Contact" v-model="cvData.contact.label" />
            </div>
            <div class="mt-1 flex items-center pl-2" v-show="settings.sectionVisibility.email">
              <div class="p-2 rounded-full" :style="{ 'background-color': settings.color.hex }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
              </div>
              <TextField class="block w-full" :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" type="text" placeholder="Enter your email" v-model="cvData.email.value" />
            </div>
            <div class="mt-1 flex items-center pl-2" v-show="settings.sectionVisibility.phoneNumber">
              <div class="p-2 rounded-full" :style="{ 'background-color': settings.color.hex }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-telephone" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
              </div>
              <TextField class="block w-full" :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" type="text" placeholder="Enter your phone number" v-model="cvData.phoneNumber.value" />
            </div>
            <div class="mt-1 flex items-center pl-2" v-show="settings.sectionVisibility.website">
              <div class="p-2 rounded-full" :style="{ 'background-color': settings.color.hex }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-globe" viewBox="0 0 16 16">
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                </svg>
              </div>
              <TextField class="block w-full" :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" type="text" placeholder="Enter URL without http://" v-model="cvData.website.value" />
            </div>
            <div class="mt-1 flex items-center pl-2" v-show="settings.sectionVisibility.linkedIn">
              <div class="p-2 rounded-full" :style="{ 'background-color': settings.color.hex }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </div>
              <TextField class="block w-full" :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" type="text" placeholder="Enter only your username" v-model="cvData.linkedIn.value" />
            </div>
            <div class="mt-1 flex items-center pl-2" v-show="settings.sectionVisibility.facebook">
              <div class="p-2 rounded-full" :style="{ 'background-color': settings.color.hex }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </div>
              <TextField class="block w-full" :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" type="text" placeholder="Enter only your username" v-model="cvData.facebook.value" />
            </div>
            <div class="mt-1 flex items-center pl-2" v-show="settings.sectionVisibility.twitter">
              <div class="p-2 rounded-full" :style="{ 'background-color': settings.color.hex }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-twitter" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </div>
              <TextField class="block w-full" :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" type="text" placeholder="Enter only your username" v-model="cvData.twitter.value" />
            </div>
            <div class="mt-1 flex items-center pl-2" v-show="settings.sectionVisibility.gitHub">
              <div class="p-2 rounded-full" :style="{ 'background-color': settings.color.hex }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
              <TextField class="block w-full" :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" type="text" placeholder="Enter only your username" v-model="cvData.gitHub.value" />
            </div>
            <div class="mt-1 flex items-center pl-2" v-show="settings.sectionVisibility.instagram">
              <div class="p-2 rounded-full" :style="{ 'background-color': settings.color.hex }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </div>
              <TextField class="block w-full" :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" type="text" placeholder="Enter only your username" v-model="cvData.instagram.value" />
            </div>
          </div>
          <div style="width: 14cm;">
            <div v-show="settings.sectionVisibility.workExperience">
              <TextField class="block font-bold uppercase w-full" :class="{ 'text-sm': settings.textSize === 'small', 'text-lg': settings.textSize === 'medium', 'text-2xl': settings.textSize === 'large' }" :text-size="settings.textSize" type="text" placeholder="Work experience" v-model="cvData.workExperience.label" />
              <div class="flex flex-col w-full">
                <div class="group relative ml-3" v-for="(position, indexWx) in cvData.workExperience.positions" :key="indexWx">
                  <div class="absolute right-0 flex space-x-4 opacity-0 group-hover:opacity-100">
                    <div class="bg-gray-300 cursor-pointer p-2 rounded-full" @click="addWorkExperience">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                      </svg>
                    </div>
                    <div class="bg-gray-300 cursor-pointer p-2 rounded-full" v-show="indexWx > 0"  @click="removeWorkExperience(indexWx)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                      </svg>
                    </div>
                  </div>
                  <div class="flex space-x-2 items-center">
                    <div>
                      <div class="h-4 w-4 rounded-full" :style="{ 'background-color': settings.color.hex }"></div>
                    </div>
                    <div class="w-3/4">
                      <TextField class="block font-bold w-full" :class="{ 'text-sm': settings.textSize === 'small', 'text-lg': settings.textSize === 'medium', 'text-2xl': settings.textSize === 'large' }" :text-size="settings.textSize" :style="{ 'color': settings.color.hex }" type="text" placeholder="Position" v-model="cvData.workExperience.positions[indexWx].position" />
                    </div>
                  </div>
                  <div class="flex space-x-2 items-center">
                    <div>
                      <div class="h-4 w-4"></div>
                    </div>
                    <div class="w-full">
                      <div class="flex justify-between w-full">
                        <TextField class="block font-bold uppercase w-full" :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" :text-size="settings.textSize" type="text" placeholder="Employer" v-model="cvData.workExperience.positions[indexWx].employer" />
                        <TextField class="block text-right" :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" :text-size="settings.textSize" type="text" placeholder="From – Until" v-model="cvData.workExperience.positions[indexWx].timeSpan" />
                      </div>
                      <TextField class="block w-full" :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" :text-size="settings.textSize" type="text" placeholder="In this text field your can describe your duties. Try to focus on your new experiences and accomplishments." v-model="cvData.workExperience.positions[indexWx].description" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-show="settings.sectionVisibility.education">
              <TextField class="block font-bold uppercase w-full" :class="{ 'text-sm': settings.textSize === 'small', 'text-lg': settings.textSize === 'medium', 'text-2xl': settings.textSize === 'large' }" :text-size="settings.textSize" type="text" placeholder="Education" v-model="cvData.education.label" />
              <div class="flex flex-col w-full">
                <div class="group relative ml-3" v-for="(position, indexEd) in cvData.education.degrees" :key="indexEd">
                  <div class="absolute right-0 flex space-x-4 opacity-0 group-hover:opacity-100">
                    <div class="bg-gray-300 cursor-pointer p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" @click="addEducation">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                      </svg>
                    </div>
                    <div class="bg-gray-300 cursor-pointer p-2 rounded-full" v-show="indexEd > 0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16" @click="removeEducation(indexEd)">
                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                      </svg>
                    </div>
                  </div>
                  <div class="flex space-x-2 items-center">
                    <div>
                      <div class="h-4 w-4 rounded-full" :style="{ 'background-color': settings.color.hex }"></div>
                    </div>
                    <div class="w-full">
                      <TextField class="block font-bold w-3/4" :class="{ 'text-sm': settings.textSize === 'small', 'text-lg': settings.textSize === 'medium', 'text-2xl': settings.textSize === 'large' }" :text-size="settings.textSize" :style="{ 'color': settings.color.hex }" type="text" placeholder="Degree" v-model="cvData.education.degrees[indexEd].degree" />
                    </div>
                  </div>
                  <div class="flex space-x-2 items-center">
                    <div>
                      <div class="h-4 w-4"></div>
                    </div>
                    <div class="w-full">
                      <div class="flex justify-between w-full">
                        <TextField class="block font-bold uppercase w-full" :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" :text-size="settings.textSize" type="text" placeholder="School" v-model="cvData.education.degrees[indexEd].degree" />
                        <TextField class="block text-right" :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" :text-size="settings.textSize" type="text" placeholder="From – Until" v-model="cvData.education.degrees[indexEd].timeSpan" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-show="settings.sectionVisibility.skills1">
              <TextField class="block font-bold uppercase w-full" :class="{ 'text-sm': settings.textSize === 'small', 'text-lg': settings.textSize === 'medium', 'text-2xl': settings.textSize === 'large' }" :text-size="settings.textSize" type="text" placeholder="Skills 1" v-model="cvData.skills1.label" />
              <div class="flex flex-wrap p-2">
                <div class="group relative mb-2 mr-2 w-max" v-for="(skill, index) in cvData.skills1.values" :key="index">
                  <TagField :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" placeholder="Enter skill" v-model="cvData.skills1.values[index]" />
                  <div class="absolute mt-1 right-0 flex space-x-2 opacity-0 group-hover:opacity-100">
                    <div class="bg-gray-300 cursor-pointer p-1 rounded-full" @click="addSkill('skills1')">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                      </svg>
                    </div>
                    <div class="bg-gray-300 cursor-pointer p-1 rounded-full" @click="removeSkill('skills1', index)" v-show="index > 0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-show="settings.sectionVisibility.skills2">
              <TextField class="block font-bold uppercase w-full" :class="{ 'text-sm': settings.textSize === 'small', 'text-lg': settings.textSize === 'medium', 'text-2xl': settings.textSize === 'large' }" :text-size="settings.textSize" type="text" placeholder="Skills 2" v-model="cvData.skills2.label" />
              <div class="flex flex-wrap p-2">
                <div class="group relative mb-2 mr-2 w-max" v-for="(skill, index) in cvData.skills2.values" :key="index">
                  <TagField :class="{ 'text-xs': settings.textSize === 'small', 'text-sm': settings.textSize === 'medium', 'text-lg': settings.textSize === 'large' }" placeholder="Enter skill" v-model="cvData.skills2.values[index]" />
                  <div class="absolute mt-1 right-0 flex space-x-2 opacity-0 group-hover:opacity-100">
                    <div class="bg-gray-300 cursor-pointer p-1 rounded-full" @click="addSkill('skills2')">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                      </svg>
                    </div>
                    <div class="bg-gray-300 cursor-pointer p-1 rounded-full" @click="removeSkill('skills2', index)" v-show="index > 0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal heading="Pick a color" cancellation-button-label="Close" :hide-confirmation-button="true" @confirm="showColorPicker = false" @cancel="showColorPicker = false" v-show="showColorPicker">
      <vue-color :color="settings.color" v-model="settings.color" />
    </Modal>
    <Modal :is-large="true" heading="Manage sections" cancellation-button-label="Close" :hide-confirmation-button="true" @confirm="showSectionManagement = false" @cancel="showSectionManagement = false" v-show="showSectionManagement">
      <div class="grid md:grid-cols-2 gap-4 text-left w-full">
        <div>
          <div>
            <Toggle class="mb-2 uppercase" label="Picture" v-model="settings.sectionVisibility.picture" />
            <Toggle class="uppercase" label="Profile" v-model="settings.sectionVisibility.profile" />
          </div>
          <hr class="mt-4 mb-2" />
          <div>
            <b class="uppercase">Personal details</b>
            <Toggle class="mb-2 uppercase" label="Birth date" v-model="settings.sectionVisibility.birthDate" />
            <Toggle class="mb-2 uppercase" label="Nationality" v-model="settings.sectionVisibility.nationality" />
            <Toggle class="my-2 uppercase" label="Address" v-model="settings.sectionVisibility.address" />
            <Toggle class="uppercase" label="Marital status" v-model="settings.sectionVisibility.maritalStatus" />
          </div>
          <hr class="mt-4 mb-2" />
          <div>
            <b class="uppercase">Contact</b>
            <Toggle class="my-2 uppercase" label="Email" :disabled="true" v-model="settings.sectionVisibility.email" />
            <Toggle class="mb-2 uppercase" label="Phone number" v-model="settings.sectionVisibility.phoneNumber" />
            <Toggle class="mb-2 uppercase" label="Website" v-model="settings.sectionVisibility.website" />
            <Toggle class="mb-2 uppercase" label="LinkedIn" v-model="settings.sectionVisibility.linkedIn" />
            <Toggle class="mb-2 uppercase" label="Facebook" v-model="settings.sectionVisibility.facebook" />
            <Toggle class="mb-2 uppercase" label="Twitter" v-model="settings.sectionVisibility.twitter" />
            <Toggle class="mb-2 uppercase" label="GitHub" v-model="settings.sectionVisibility.gitHub" />
            <Toggle class="uppercase" label="Instagram" v-model="settings.sectionVisibility.instagram" />
          </div>
        </div>
        <div>
          <div>
            <Toggle class="mb-2 uppercase" label="Name" :disabled="true" v-model="settings.sectionVisibility.name" />
            <Toggle class="mb-2 uppercase" label="Profession" v-model="settings.sectionVisibility.profession" />
            <Toggle class="mb-2 uppercase" label="Work experience" v-model="settings.sectionVisibility.workExperience" />
            <Toggle class="uppercase" label="Education" :disabled="true" v-model="settings.sectionVisibility.education" />
          </div>
          <hr class="mt-4 mb-2" />
          <div>
            <b class="uppercase">Skills</b>
            <p>List your professional and personal skills.</p>
            <div class="grid grid-cols-2 gap-4 mt-2">
              <Toggle class="uppercase" label="Skills 1" v-model="settings.sectionVisibility.skills1" />
              <Toggle class="uppercase" label="Skills 2" v-model="settings.sectionVisibility.skills2" />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'CVBuilder',
  data() {
    return {
      profilePictureFileBase64: null,
      showColorPicker: false,
      showSectionManagement: false,
      settings: {
        color: {
          hex: '#009ce0'
        },
        typography: 'poppins',
        textSize: 'medium',
        sectionVisibility: {
          picture: true,
          profile: true,
          address: true,
          birthDate: false,
          nationality: false,
          maritalStatus: false,
          email: true,
          phoneNumber: true,
          website: false,
          linkedIn: false,
          facebook: false,
          twitter: false,
          gitHub: false,
          instagram: false,
          name: true,
          profession: true,
          workExperience: true,
          education: true,
          skills1: true,
          skills2: false
        }
      },
      cvData: {
        name: {
          value: ''
        },
        profession: {
          value: ''
        },
        profile: {
          label: 'Profile',
          value: ''
        },
        personalDetails: {
          label: 'Personal details'
        },
        birthDate: {
          label: 'Birth date',
          value: ''
        },
        nationality: {
          label: 'Nationality',
          value: ''
        },
        address: {
          label: 'Address',
          value: ''
        },
        maritalStatus: {
          label: 'Marital status',
          value: ''
        },
        contact: {
          label: 'Contact'
        },
        email: {
          value: ''
        },
        phoneNumber: {
          value: ''
        },
        website: {
          value: ''
        },
        linkedIn: {
          value: ''
        },
        facebook: {
          value: ''
        },
        twitter: {
          value: ''
        },
        gitHub: {
          value: ''
        },
        instagram: {
          value: ''
        },
        workExperience: {
          label: 'Work experience',
          positions: [
            {
              position: '',
              employer: '',
              description: '',
              timeSpan: ''
            }
          ]
        },
        education: {
          label: 'Education',
          degrees: [
            {
              degree: '',
              school: '',
              timeSpan: ''
            }
          ]
        },
        skills1: {
          label: 'Skills',
          values: [
            'Enter skill'
          ]
        },
        skills2: {
          label: 'Skills',
          values: [
            'Enter skill'
          ]
        }
      }
    }
  },
  computed: {
    fontClass() {
      return {
        'poppins': this.settings.typography === 'poppins',
        'nunito': this.settings.typography === 'nunito',
        'merriweather': this.settings.typography === 'merriweather',
        'inconsolata': this.settings.typography === 'inconsolata',
        'karla': this.settings.typography === 'karla',
        'fira-sans': this.settings.typography === 'fira-sans',
        'saira-semi-condensed': this.settings.typography === 'saira-semi-condensed'
      }
    }
  },
  methods: {
    addSkill(skillGroup) {
      this.cvData[skillGroup].values.push('Enter skill')
    },
    removeSkill(skillGroup, index) {
      this.cvData[skillGroup].values.splice(index, 1)
    },
    addWorkExperience() {
      this.cvData.workExperience.positions.push({
        position: '',
        employer: '',
        description: '',
        timeSpan: ''
      })
    },
    removeWorkExperience(index) {
      this.cvData.workExperience.positions.splice(index, 1)
    },
    addEducation() {
      this.cvData.education.degrees.push({
        degree: '',
        school: '',
        timeSpan: ''
      })
    },
    removeEducation(index) {
      this.cvData.education.degrees.splice(index, 1)
    },
    async getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    },
    async changeProfilePicture(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      const base64 = await this.getBase64(files[0])
      this.profilePictureFileBase64 = base64

      // quick'n dirty hack to dynamically display logo
      const pictureStyle = `background-image: url(${this.profilePictureFileBase64}); background-position: center; background-size: cover; background-repeat: no-repeat;`
      document.querySelector('.profile-picture-placeholder').style = pictureStyle
    }
  }
}
</script>

<style lang="postcss" scoped>
.inactive-text-size-option {
  @apply cursor-pointer;

  &:hover {
    color: #ffffff !important;
  }
}

.poppins {
  font-family: "Poppins";
}

.nunito {
  font-family: "Nunito";
}

.merriweather {
  font-family: "Merriweather";
}

.inconsolata {
  font-family: "Inconsolata";
}

.karla {
  font-family: "Karla";
}

.fira-sans {
  font-family: "Fira Sans";
}

.saira-semi-condensed {
  font-family: "Saira Semi Condensed";
}

#cv {
  width: 21cm !important;
  height: 29.7cm !important;
  padding: 10mm !important;
}
</style>
