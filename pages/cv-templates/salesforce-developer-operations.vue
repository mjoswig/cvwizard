<template>
  <article class="page-content">
    <section class="mb-12">
      <h1 class="text-purple-brand sm:text-center mb-4">Salesforce Developer - Operations CV Template</h1>
      <p class="sm:text-center text-xl">You spent weeks trying to write a CV but still can't find the right words? Our sample CV helps Salesforce Developers like you to land their next job.</p>
    </section>
    <section>
      <CVBuilder :show-toolbar="true" :is-downloading="isDownloading" :show-watermark="showWatermark" :default-cv-data="cvData" />
    </section>
  </article>
</template>

<script>
import cvData from '@/assets/json/cv-data/salesforce-developer-operations.json'

export default {
  name: 'SalesforceDeveloperOperationsPage',
  head() {
    return {
      title: 'Salesforce Developer - Operations CV Template - cvwizard'
    }
  },
  props: ['isDownloading', 'showWatermark'],
  data() {
    return {
      cvData
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.page-content {
  @apply flex flex-col items-center justify-center w-full;
}
.page-content section {
  @apply w-full;
  max-width: 21cm;
}
</style>
