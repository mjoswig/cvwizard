<template>
  <article class="page-content cv-page">
    <section class="mb-12">
      <h1 class="text-purple-brand sm:text-center mb-4">Senior Quality Engineer CV Template</h1>
      <p class="sm:text-center text-xl">You spent weeks trying to write a CV but still can't find the right words? Our sample CV helps Senior Quality Engineers like you to land their next job.</p>
    </section>
    <section class="mb-12">
      <CVBuilder :show-toolbar="true" :is-downloading="isDownloading" :show-watermark="showWatermark" :default-cv-data="cvData" />
    </section>
    <FaqSection />
  </article>
</template>

<script>
import cvData from '@/assets/json/cv-data/senior-quality-engineer.json'

export default {
  name: 'SeniorQualityEngineerPage',
  head() {
    return {
      title: 'Senior Quality Engineer CV Template - cvwizard'
    }
  },
  props: ['isDownloading', 'showWatermark'],
  data() {
    return {
      cvData
    }
  }
}
</script>
