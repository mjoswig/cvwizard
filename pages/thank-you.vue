<template>
  <article class="page-content">
    <section class="mb-12">
      <h1 class="text-purple-brand sm:text-center mb-4">Thank you for using cvwizard</h1>
      <p class="sm:text-center text-xl mb-4">Your CV is downloading automatically. If not, please click on the link below:</p>
      <p class="sm:text-center text-xl font-bold"><a download="cv.pdf" :href="downloadUrl" target="_blank">Download PDF</a></p>
    </section>
  </article>
</template>

<script>
export default {
  name: 'ThankYouPage',
  computed: {
    downloadUrl() {
      return this.$route.query.download_url
    }
  },
  created() {
    if (this.downloadUrl) {
      location.replace(this.downloadUrl)
    }
  }
}
</script>
