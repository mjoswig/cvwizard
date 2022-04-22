<template>
  <div>
    <div class="flex justify-center mb-8 w-full">
      <div class="bg-gray-700 font-bold text-center rounded-md grid grid-cols-2 md:grid-cols-4">
        <div class="p-4">
          <div class="flex justify-center">
            <div class="h-8 w-8 cursor-pointer rounded-full mb-2" :style="{ 'background-color': settings.color.hex }" @click="showColorPicker = true"></div>
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
    <div class="overflow-scroll">
      <div class="bg-white p-12 shadow-lg w-full" style="width: 1340px;">
        <div class="flex items-center">
          <div class="w-1/4" v-show="settings.sectionVisibility.picture">
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
            <TextField class="block font-bold text-6xl w-full" :style="{ 'color': settings.color.hex }" type="text" placeholder="Your name" v-show="settings.sectionVisibility.name" />
            <TextField class="block font-bold text-2xl uppercase w-full" type="text" placeholder="Your profession or specialty" v-show="settings.sectionVisibility.profession" />
          </div>
        </div>
        <div class="flex items-center mt-8">
          <div class="w-1/4">
            <div v-show="settings.sectionVisibility.profile">
              <TextField class="block font-bold text-2xl uppercase w-full" type="text" placeholder="Profile" v-model="cvData.profile.label" />
              <TextField class="block text-lg w-full" type="text" placeholder="Write here a paragraph about yourself." v-model="cvData.profile.value" />
            </div>
            <div class="mt-4" v-show="settings.sectionVisibility.birthDate || settings.sectionVisibility.address">
              <TextField class="block font-bold text-2xl uppercase w-full" type="text" placeholder="Personal Details" v-model="cvData.personalDetailsLabel" />
            </div>
            <div class="mt-2" v-show="settings.sectionVisibility.birthDate">
              <TextField class="block font-bold text-2xl w-full" :style="{ 'color': settings.color.hex }" type="text" placeholder="Birth date" v-model="cvData.birthDate.label" />
              <TextField class="block text-lg w-full" type="text" placeholder="Enter your birth date" v-model="cvData.birthDate.value" />
            </div>
            <div class="mt-2" v-show="settings.sectionVisibility.address">
              <TextField class="block font-bold text-2xl w-full" :style="{ 'color': settings.color.hex }" type="text" placeholder="Address" v-model="cvData.address.label" />
              <TextField class="block text-lg w-full" type="text" placeholder="Enter your address" v-model="cvData.address.value" />
            </div>
          </div>
          <div class="w-3/4">
          </div>
        </div>
      </div>
    </div>
    <Modal heading="Pick a color" cancellation-button-label="Close" :hide-confirmation-button="true" @confirm="showColorPicker = false" @cancel="showColorPicker = false" v-show="showColorPicker">
      <vue-color v-model="settings.color" :color="settings.color"  />
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
            <Toggle class="my-2 uppercase" label="Address" v-model="settings.sectionVisibility.address" />
            <Toggle class="mb-2 uppercase" label="Birth date" v-model="settings.sectionVisibility.birthDate" />
            <Toggle class="mb-2 uppercase" label="Nationality" v-model="settings.sectionVisibility.nationality" />
            <Toggle class="uppercase" label="Marital status" v-model="settings.sectionVisibility.maritalStatus" />
          </div>
          <hr class="mt-4 mb-2" />
          <div>
            <b class="uppercase">Contact</b>
            <Toggle class="my-2 uppercase" label="Email" v-model="settings.sectionVisibility.email" />
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
            <Toggle class="mb-2 uppercase" label="Name" v-model="settings.sectionVisibility.name" />
            <Toggle class="mb-2 uppercase" label="Profession" v-model="settings.sectionVisibility.profession" />
            <Toggle class="mb-2 uppercase" label="Work experience" v-model="settings.sectionVisibility.workExperience" />
            <Toggle class="uppercase" label="Education" v-model="settings.sectionVisibility.education" />
          </div>
          <hr class="mt-4 mb-2" />
          <div>
            <b class="uppercase">Skills</b>
            <p>List your professional and personal skills in up to 3 different styles.</p>
            <div class="grid grid-cols-2 gap-4 mt-2">
              <Toggle class="uppercase" label="Simple 1" v-model="settings.sectionVisibility.simple1" />
              <Toggle class="uppercase" label="Simple 2" v-model="settings.sectionVisibility.simple2" />
              <Toggle class="uppercase" label="Circles" v-model="settings.sectionVisibility.circles" />
              <Toggle class="uppercase" label="Bars" v-model="settings.sectionVisibility.bars" />
            </div>
          </div>
          <hr class="mt-4 mb-2" />
          <div>
            <b class="uppercase">Additional info</b>
            <p>Ideal for listing hobbies, languages, references, certificates or awards.</p>
            <div class="grid grid-cols-2 gap-4 mt-2">
              <Toggle class="uppercase" label="List 1" v-model="settings.sectionVisibility.list1" />
              <Toggle class="uppercase" label="List 2" v-model="settings.sectionVisibility.list2" />
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
      showColorPicker: false,
      showSectionManagement: false,
      settings: {
        color: {
          hex: '#009ce0'
        },
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
          simple1: false,
          simple2: false,
          circles: false,
          bars: false,
          list1: false,
          list2: false
        }
      },
      cvData: {
        profile: {
          label: 'Profile',
          value: ''
        },
        personalDetailsLabel: 'Personal details',
        birthDate: {
          label: 'Birth date',
          value: ''
        },
        address: {
          label: 'Address',
          value: ''
        }
      }
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
</style>
