<template>
  <div id="app" class="app flex justify-center">
    <div class="wrapper w-full">
      <header>
        <div class="px-4 pt-4 pb-8 md:p-8 flex items-center justify-between">
          <div>
            <nuxt-link to="/"><img class="w-20 h-auto" src="@/assets/images/logo.png" /></nuxt-link>
          </div>
          <div class="flex items-center space-x-12 text-lg">
            <nuxt-link class="hidden sm:inline-block" to="/cv-templates">Free CV Templates</nuxt-link>
            <Btn @click="openPaywallModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z"/>
              </svg>
              <span>Download PDF</span>
            </Btn>
          </div>
        </div>
      </header>
      <main>
        <nuxt-child :is-downloading="isDownloadingFreePdf || isDownloadingStandardPdf" :show-watermark="isDownloadingFreePdf" />
      </main>
      <footer class="flex flex-col items-center px-4 pb-4 md:px-8 md:pb-8 pt-6 text-sm">
        <div>
          <p>Copyright &copy; {{ copyrightYear }} cvwizard.online – a solution by <a href="https://joswigsolutions.com/" target="_blank">Joswig Solutions</a>. All rights reserved.</p>
        </div>
      </footer>
    </div>
    <Modal v-show="showPaywallModal" max-width="750px" :hide-confirmation-button="true" cancellation-button-label="Close" @cancel="showPaywallModal = false">
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <b class="block text-gray-500 text-3xl mb-4">Free Download</b>
          <p class="text-lg text-gray-500 mb-2">cvwizard offers free CVs <b>with watermark</b>.</p>
          <p class="text-lg text-gray-500 mb-2">Share on social media to unlock the free download:</p>
          <div class="relative text-lg">
            <div v-show="!canDownloadFreePdf" class="absolute h-full w-full bg-gray-100 opacity-50" style="max-width: 100vw;"></div>
            <span v-show="!canDownloadFreePdf">🔒</span>
            <a class="cursor-pointer" href="#" @click.prevent="downloadFreePdf">Download Free CV</a>
          </div>
          <div v-show="!canDownloadFreePdf" class="flex justify-center md:justify-start space-x-4 mt-6">
            <a :href="facebookShareUrl" target="_blank" class="text-gray-500 bg-gray-100 border rounded-md shadow-sm p-2 w-fit" @click.prevent="openShareWindow(facebookShareUrl, 'Share on Facebook', 750, 500)">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </a>
            <a :href="twitterShareUrl" target="_blank" class="text-gray-500 bg-gray-100 border rounded-md shadow-sm p-2 w-fit" @click.prevent="openShareWindow(twitterShareUrl, 'Share on Twitter', 750, 500)">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
            </a>
            <a :href="linkedInShareUrl" target="_blank" class="text-gray-500 bg-gray-100 border rounded-md shadow-sm p-2 w-fit" @click.prevent="openShareWindow(linkedInShareUrl, 'Share on LinkedIn', 750, 500)">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <b class="block text-purple-brand text-3xl mb-2">Standard Download</b>
          <span class="font-bold inline-block mb-4 text-3xl"><span class="text-xl" style="margin-right: 4px;">$</span>7<sup class="text-lg">.95</sup><span class="font-normal text-base"> per download</span></span>
          <ul class="text-lg mb-5">
            <li>✅ No watermark</li>
          </ul>
          <p class="text-gray-500 text-sm mb-6">You'll be redirected to a download page after payment is complete.</p>
          <div class="flex justify-center md:justify-start">
            <Btn class="text-lg w-full md:w-max" :is-loading="isLoadingCheckout" @click="buyNow">Buy Now</Btn>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import{ jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'

export default {
  data() {
    return {
      showPaywallModal: false,
      canDownloadFreePdf: false,
      isDownloadingFreePdf: false,
      isDownloadingStandardPdf: false,
      isLoadingCheckout: false
    }
  },
  computed: {
    facebookShareUrl() {
      return `https://www.facebook.com/sharer/sharer.php?u=https://cvwizard.online/`
    },
    twitterShareUrl() {
      const text = `Making a CV can be tough, but this website makes it easy and free! No sign-up required, just check it out!\n\n🧙✨ https://cvwizard.online/\n\n#cv #resumetips #resumewriting #jobsearch #jobhunt #jobtips #jobseekers #jobs #career #careeradvice`
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
    },
    linkedInShareUrl() {
      return `https://www.linkedin.com/shareArticle?mini=true&url=https://cvwizard.online/`
    },
    copyrightYear() {
      const year = new Date().getFullYear()
      if (year === 2023) return year
      return `2023-${year}`
    }
  },
  methods: {
    openShareWindow(url, title, w, h) {
      const left = screen.width / 2 - w / 2;
      const top = screen.height / 2 - h / 2;
      window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left)
      window.setTimeout(() => {
        this.canDownloadFreePdf = true
      }, 1000)
    },
    async buyNow() {
      this.isLoadingCheckout = true

      this.isDownloadingStandardPdf = true
      let pdfFile = null
      const self = this
      setTimeout(async () => {
        pdfFile = await self.downloadPdf()
        self.isDownloadingStandardPdf = false

        const pdfUrl = await this.$firebaseStorage.write(`/cv-${uuidv4()}.pdf`, pdfFile)
        const response = await this.$axios.$post('/api/checkout', {
          cv_download_url: pdfUrl
        })
        window.location.href = response.url

        this.isLoadingCheckout = false
      }, 500)
    },
    downloadPdf(saveFile = false) {
      if (process.client) {
        const doc = new jsPDF({
          orientation: 'p',
          unit: 'px',
          format: 'a4',
          hotfixes: ['px_scaling']
        })

        return html2canvas(document.querySelector('#cv')).then((canvas) => {
          const imgWidth = doc.internal.pageSize.getWidth()
          const pageHeight = doc.internal.pageSize.getHeight()
          const imgHeight = (canvas.height * imgWidth) / canvas.width
          let heightLeft = imgHeight
          let position = 0
          heightLeft -= pageHeight
          doc.addImage(canvas.toDataURL('image/jpeg', 1), 'JPEG', 0, position, imgWidth, imgHeight, '', 'FAST')
          while (heightLeft >= 0) {
            position = heightLeft - imgHeight
            doc.addPage()
            doc.addImage(canvas.toDataURL('image/jpeg', 1), 'JPEG', 0, position, imgWidth, imgHeight, '', 'FAST')
            heightLeft -= pageHeight
          }

          if (saveFile) {
            doc.save('cv.pdf')
          } else {
            return doc.output('blob')
          }
        })
      }
    },
    downloadFreePdf() {
      this.isDownloadingFreePdf = true
      const self = this
      setTimeout(() => {
        self.downloadPdf(true)
        self.isDownloadingFreePdf = false
        self.showPaywallModal = false
        document.body.classList.remove('modal-open')
      }, 500)
    },
    openPaywallModal() {
      document.body.classList.add('modal-open')
      this.showPaywallModal = true
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

body.modal-open {
  overflow: hidden;
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

header, main, footer {
  background-color: #f4f4f4;
}

.page-hero {
  @apply bg-blue-500 pt-10 pb-10 px-4 text-white;
}

.page-content {
  @apply p-4 md:p-8;
  background-color: #f4f4f4;
}

.cv-page {
  @apply flex flex-col items-center justify-center w-full;
}
.cv-page section {
  @apply w-full;
  max-width: 21cm;
}

.text-purple-brand {
  color: #a600ff;
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