<template>
  <div id="app" class="app flex justify-center">
    <div class="wrapper w-full">
      <header>
        <div class="p-4 flex items-center justify-between">
          <div>
            <nuxt-link to="/"><img class="w-24 h-auto" src="@/assets/images/logo.png" /></nuxt-link>
          </div>
          <a class="cta-link-primary cursor-pointer flex items-center space-x-2" @click="showDownloadModal = true">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z"/>
            </svg>
            <span>Download PDF</span>
          </a>
        </div>
      </header>
      <main>
        <nuxt />
      </main>
      <footer class="px-8 pb-8 pt-0 text-sm sm:text-center">
        <p>Copyright &copy; 2022 cvwizard.io - a venture by <a href="https://joswigsolutions.com/" target="_blank">Joswig Solutions Pte Ltd</a>. All rights reserved.</p>
      </footer>
    </div>
    <Modal :is-large="true" heading="Download PDF" cancellation-button-label="Close" confirmation-button-label="Download for $9.95" :confirmation-button-disabled="true" :confirmation-button-loading="false" @confirm="download" @cancel="showDownloadModal = false" v-show="showDownloadModal">
      <h4 class="text-purple-brand text-center">Increase your chances of getting your dream job!</h4>
      <div class="flex flex-col items-center justify-center mt-8">
        <div class="font-bold uppercase text-sm text-white bg-red-700 p-2 rounded-md mb-4">
          Limited time offer
        </div>
        <div class="flex items-center space-x-4">
          <div class="flex text-gray-400 crossed">
            <div class="flex items-center space-x-2">
              <span class="text-2xl">$</span>
              <span class="font-bold text-4xl">11</span>
            </div>
            <sup class="text-xl">.95</sup>
          </div>
          <div class="flex">
            <div class="flex items-center space-x-2">
              <span class="text-2xl">$</span>
              <span class="font-bold text-4xl">9</span>
            </div>
            <sup class="text-xl">.95</sup>
          </div>
        </div>
        <div class="font-bold uppercase mt-2">
          <span>per download</span>
        </div>
      </div>
      <div class="flex justify-center mt-6 mb-10 w-full">
        <div class="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <span class="block text-sm mb-2">🔒 Safe and Secure SSL Encrypted Payments</span>
          <div class="p-2 border rounded-md shadow-md">
            <div id="card-element"></div>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
import{ jsPDF } from 'jspdf'

export default {
  data() {
    return {
      showDownloadModal: false
    }
  },
  methods: {
    download () {
      if(process.client) {
        const doc = new jsPDF({
          orientation: 'p',
          unit: 'px',
          format: 'a4',
          hotfixes: ['px_scaling']
        })

        html2canvas(document.querySelector('#cv'), {
          width: doc.internal.pageSize.getWidth(),
          height: doc.internal.pageSize.getHeight()
        }).then((canvas) => {
          const img = canvas.toDataURL('image/png')

          doc.addImage(img, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight())
          doc.save('cv.pdf')
        })
      }
    }
  },
  mounted() {
    if (this.$stripe) {
      const elements = this.$stripe.elements()
      const card = elements.create('card', {})
      card.mount('#card-element')
    }
  }
}
</script>


<style lang="postcss">
html {
  font-family: "Tauri", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #2d3748;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  @apply text-5xl font-bold;
  line-height: 1.2;
}

h2 {
  @apply text-4xl font-bold;
  line-height: 1.2;
}

h3 {
  @apply text-3xl font-bold;
  line-height: 1.2;
}

h4 {
  @apply text-2xl font-bold;
  line-height: 1.2;
}

h5 {
  @apply text-xl font-bold;
  line-height: 1.2;
}

h6 {
  @apply text-lg font-bold;
  line-height: 1.2;
}

a {
  color: #a600ff;

  &:hover {
    @apply underline;
    color: #8500cc;
  }
}

.app {
  background-color: #ffffff;
}

.wrapper,
header {
  max-width: 1400px;
}

header, footer {
  background-color: #f4f4f4;
}

.page-hero {
  @apply bg-blue-500 pt-10 pb-10 px-4 text-white;
}

.page-content {
  @apply p-8;
  background-color: #f4f4f4;
}

.text-purple-brand {
  color: #a600ff;
}

.cta-button-primary {
  background-color: #a600ff;

  &:hover {
    background-color: #8500cc;
  }
}

.cta-link-primary {
  @apply font-bold text-white rounded-md shadow-md px-4 py-2 flex justify-center;
  background-color: #a600ff;

  &:focus {
    @apply outline-none;
  }

  &:hover {
    @apply text-white;
    background-color: #8500cc;
    text-decoration: none;
  }
}

.crossed {
  background:
    linear-gradient(to top left,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0) calc(50% - 0.8px),
      rgba(185,28,28,1),
      rgba(0,0,0,0) calc(50% + 0.8px),
      rgba(0,0,0,0) 100%);
}

@media (max-width: 1280px) {
  h1 {
    @apply text-4xl;
  }

  h2 {
    @apply text-3xl;
  }

  h3 {
    @apply text-2xl;
  }

  h4 {
    @apply text-xl;
  }

  h5 {
    @apply text-lg;
  }

  h6 {
    @apply text-base;
  }

  .wrapper,
  header {
    max-width: 1024px;
  }
}

@media (max-width: 1024px) {
  .wrapper,
  header {
    max-width: 768px;
  }
}

@media (max-width: 768px) {
  .wrapper,
  header {
    max-width: 640px;
  }
}
</style>