<template>
  <article class="page-content cv-page">
    <section class="mb-8 md:mb-12">
      <h1 class="text-purple-brand sm:text-center mb-4">The easiest way to create a CV 🧙‍♂️</h1>
      <p class="sm:text-center text-xl">cvwizard is a free, easy-to-use CV Builder to create your CV online. You'll get the best user experience by visiting this website on a large device.</p>
    </section>
    <section class="mb-14">
      <CVBuilder :show-toolbar="true" />
    </section>
    <section class="mb-12">
      <h2 class="sm:text-center mb-4">The best free CV Builder in {{ currentYear }}</h2>
      <p class="sm:text-center text-lg mb-6">Our CV Maker is designed to help you craft the perfect CV, no matter what stage of your career you're in. With a range of powerful features and a user-friendly interface, you'll be able to create a standout CV in just a few minutes.</p>
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-gray-500 mb-2">No sign-up required</h3>
          <p class="text-lg">Build and download your CV without having to create an account. All you need to do is enter your information and click "Download".</p>
        </div>
        <div>
          <h3 class="text-gray-500 mb-2">PDF download</h3>
          <p class="text-lg">Our PDF CV download offers a high-quality, professionally designed CV that is perfect for printing or emailing to potential employers.</p>
        </div>
        <div>
          <h3 class="text-gray-500 mb-2">Customizable format</h3>
          <p class="text-lg">Tailor your CV template to fit your specific needs. Choose from a variety of sections to create a unique and personalized CV format.</p>
        </div>
        <div>
          <h3 class="text-gray-500 mb-2">Privacy-friendly</h3>
          <p class="text-lg">We won't store any of your data. Save your CV data locally for complete control over your personal information.</p>
        </div>
      </div>
    </section>
    <FaqSection />
  </article>
</template>

<script>
export default {
  name: 'IndexPage',
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
