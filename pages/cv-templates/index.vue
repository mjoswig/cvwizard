<template>
  <article class="page-content">
    <section class="mb-12">
      <h1 class="text-purple-brand sm:text-center mb-4">Free CV templates</h1>
      <p class="sm:text-center text-xl mb-6">Our CV templates will show you the skills, and achievements you need to land work in 2023.</p>
      <div class="flex sm:justify-center text-lg w-full">
        <Btn>Create your CV - it's free</Btn>
      </div>
    </section>
    <section class="grid grid-cols-3 gap-6">
      <nuxt-link to="/cv-templates/salesforce-developer-operations">
        <img class="shadow-sm mb-6" src="@/assets/images/cv-data/salesforce-developer-operations.png" />
        <h2 class="text-xl">Salesforce Developer - Operations CV</h2>
      </nuxt-link>
    </section>
  </article>
</template>

<script>
export default {
  name: 'CvTemplatesIndexPage',
  head() {
    return {
      title: 'Free CV Templates - cvwizard'
    }
  }
}
</script>
