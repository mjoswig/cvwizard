<template>
  <article class="page-content">
    <section class="mb-12">
      <h1 class="text-purple-brand sm:text-center mb-4">Thank you for using cvwizard ✨</h1>
      <p class="sm:text-center text-xl mb-4">Your CV is downloading in {{ remainingSeconds }} seconds. If not, please click on the link below:</p>
      <p class="sm:text-center text-xl font-bold"><a download="cv.pdf" :href="downloadUrl" target="_blank">Download PDF</a></p>
    </section>
  </article>
</template>

<script>
export default {
  name: 'ThankYouPage',
  head() {
    return {
      title: 'Thank You - cvwizard'
    }
  },
  data() {
    return {
      remainingSeconds: 5
    }
  },
  computed: {
    downloadUrl() {
      return this.$route.query.download_url
    }
  },
  mounted() {
    if (this.downloadUrl) {
      this.remainingSeconds--
      const self = this
      window.setInterval(() => {
        if (self.remainingSeconds === 0) return
        self.remainingSeconds--
      }, 1000)

      window.setTimeout(() => {
        const link = document.createElement('a')
        link.href = this.downloadUrl
        link.download = 'cv.pdf'
        link.dispatchEvent(new MouseEvent('click'))
      }, 5000)
    }
  }
}
</script>
