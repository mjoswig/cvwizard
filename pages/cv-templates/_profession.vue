<template>
  <article class="page-content cv-page">
    <section class="mb-12">
      <h1 class="text-purple-brand sm:text-center mb-4">{{ jobTitle }} CV Template</h1>
      <p class="sm:text-center text-xl">You spent weeks trying to write a CV but still can't find the right words? Our sample CV helps a {{ jobTitle }} like you to land their next job.</p>
      <p class="text-gray-400 sm:text-center text-xl mt-4 lg:hidden">You'll get the best user experience by visiting this website on a large device.</p>
    </section>
    <section class="mb-12">
      <CVBuilder :show-toolbar="true" :is-downloading="isDownloading" :show-watermark="showWatermark" :default-cv-data="cvData" />
    </section>
    <FaqSection :keyword="`${jobTitle} CV`" />
  </article>
</template>

<script>
export default {
  name: 'CvTemplateProfessionPage',
  head() {
    return {
      title: `${this.jobTitle} CV Template - cvwizard`
    }
  },
  props: ['isDownloading', 'showWatermark'],
  asyncData({ redirect, route }) {
    const profession = route.params.profession
    let cvData = null
    try {
      cvData = require(`@/assets/json/cv-data/${profession}.json`)
    } catch (e) { }
    if (!cvData || profession === 'default') redirect('/cv-templates')
    return {
      cvData,
      jobTitle: cvData.profession.value
    }
  }
}
</script>
