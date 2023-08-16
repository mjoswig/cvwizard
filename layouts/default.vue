<template>
  <div id="app" class="app flex justify-center">
    <div class="wrapper w-full">
      <header>
        <div class="p-8 flex items-center justify-between">
          <div>
            <nuxt-link to="/"><img class="w-20 h-auto" src="@/assets/images/logo.png" /></nuxt-link>
          </div>
          <div>
            <Btn :is-loading="isDownloading" @click="processDownload">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z"/>
              </svg>
              <span>Download PDF</span>
            </Btn>
          </div>
        </div>
      </header>
      <main>
        <nuxt-child :is-downloading="isDownloading" />
      </main>
      <footer class="flex flex-col items-center px-8 pb-8 pt-2 text-sm">
        <div>
          <p>Copyright &copy; {{ copyrightYear }} cvwizard.online – a solution by <a href="https://joswigsolutions.com/" target="_blank">Joswig Solutions</a>. All rights reserved.</p>
        </div>
      </footer>
    </div>
    <Modal v-show="showDonationModal" heading="Thank you for your download!" :hide-confirmation-button="true" cancellation-button-label="Close" @cancel="showDonationModal = false">
      <p class="mb-4">Are you happy with the result? Please support the website with a coffee donation:</p>
      <p><a href="https://wishlistpage.com/manueljoswig?wish=4c35a4f4-f691-409d-8add-0da94c18f8b4" target="_blank">https://wishlistpage.com/manueljoswig?wish=4c35a4f4-f691-409d-8add-0da94c18f8b4</a></p>
    </Modal>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
import{ jsPDF } from 'jspdf'

export default {
  data() {
    return {
      isDownloading: false,
      showDonationModal: false
    }
  },
  computed: {
    copyrightYear() {
      const year = new Date().getFullYear()
      if (year === 2023) return year
      return `2023-${year}`
    }
  },
  methods: {
    processDownload() {
      this.isDownloading = true
      const self = this
      setTimeout(() => {
        self.download()
        this.isDownloading = false
        this.showDonationModal = true
      }, 500)
    },
    download() {
      if (process.client) {
        const doc = new jsPDF({
          orientation: 'p',
          unit: 'px',
          format: 'a4',
          hotfixes: ['px_scaling']
        })

        html2canvas(document.querySelector('#cv'), {
          width: doc.internal.pageSize.getWidth(),
          height: doc.internal.pageSize.getHeight(),
          scale: 2
        }).then((canvas) => {
          const img = canvas.toDataURL('image/png')

          doc.addImage(img, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight())
          doc.save('cv.pdf')
        })
      }
    }
  }
}
</script>


<style lang="postcss">
html {
  font-family: "Fira Sans", sans-serif;
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