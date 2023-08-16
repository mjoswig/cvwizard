<template>
  <div class="page-content">
    <div class="mb-12">
      <h1 class="text-purple-brand sm:text-center mb-4">Create a professional CV in 5 minutes</h1>
      <p class="sm:text-center text-xl">cvwizard is a free CV builder that offers a quick and easy way to create your CV online.<span class="lg:hidden"> You'll get the best user experience by visiting this website on a large device.</span></p>
    </div>
    <CVBuilder :is-downloading="isDownloading" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  props: ['isDownloading']
}
</script>
