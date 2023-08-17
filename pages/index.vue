<template>
  <article class="page-content">
    <section class="mb-12">
      <h1 class="text-purple-brand sm:text-center mb-4">The easiest way to create a CV</h1>
      <p class="sm:text-center text-xl">cvwizard is a free CV builder that offers a quick and easy way to create your CV online.<span class="lg:hidden"> You'll get the best user experience by visiting this website on a large device.</span></p>
    </section>
    <section class="mb-14">
      <CVBuilder :show-toolbar="true" :is-downloading="isDownloading" :show-watermark="showWatermark" />
    </section>
    <section class="mb-12">
      <h2 class="sm:text-center mb-4">The best free CV builder in {{ currentYear }}</h2>
      <p class="text-lg mb-8">Our CV Maker is designed to help you craft the perfect CV, no matter what stage of your career you're in. With a range of powerful features and a user-friendly interface, you'll be able to create a standout CV in just a few minutes.</p>
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
    <section>
      <h2 class="sm:text-center mb-8">Frequently asked questions</h2>
      <div class="mb-8">
        <h3 class="text-gray-500 mb-2">How long should a CV be?</h3>
        <p class="text-lg">A CV should be kept to a single page as it allows the employer to quickly review the applicant's qualifications and experience without getting overwhelmed by unnecessary details.</p>
      </div>
      <div class="mb-8">
        <h3 class="text-gray-500 mb-2">What should I put on my CV?</h3>
        <p class="text-lg">When creating a CV, it's important to include only the relevant information for the role you're applying for, such as your education, work experience, skills, and achievements.</p>
      </div>
      <div class="mb-8">
        <h3 class="text-gray-500 mb-2">How to list references on a CV?</h3>
        <p class="text-lg">It's generally recommended not to list references on a CV. Instead, you can include a separate document with your references, which can be provided upon request from the employer.</p>
      </div>
      <div class="mb-8">
        <h3 class="text-gray-500 mb-2">How should a CV look?</h3>
        <p class="text-lg">When it comes to the appearance of a CV, simplicity and readability are key, and it's generally best to avoid overly creative design elements that could be distracting or hard to read.</p>
      </div>
      <div>
        <h3 class="text-gray-500 mb-2">Who can I ask if I have questions?</h3>
        <p class="text-lg">You can email me at manuel@joswigsolutions.com. I'll get back to you as soon as possible.</p>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'IndexPage',
  props: ['isDownloading', 'showWatermark'],
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
