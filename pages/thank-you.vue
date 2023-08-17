<template>
  <article class="page-content">
    <section class="mb-12">
      <h1 class="text-purple-brand sm:text-center mb-4">Thank you for using cvwizard</h1>
      <p class="sm:text-center text-xl">Your CV is downloading automatically. If not, please click on the link below:</p>
      <p class="sm:text-center text-xl">{{ downloadUrl }}</p>
    </section>
  </article>
</template>

<script>
export default {
  name: 'ThankYouPage',
  computed: {
    downloadUrl() {
      return null
    }
  }
}
</script>
