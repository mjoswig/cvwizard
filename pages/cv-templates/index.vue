<template>
  <article class="page-content">
    <section class="mb-12">
      <h1 class="text-purple-brand sm:text-center mb-4">Free CV templates</h1>
      <p class="sm:text-center text-xl mb-6">Our CV templates will show you the skills and achievements you need to land work in {{ currentYear }}.</p>
      <div class="flex sm:justify-center text-lg w-full">
        <Btn @click="$router.push('/')">Create your CV - it's free</Btn>
      </div>
    </section>
    <section>
      <h2 class="mb-7">Programming CV examples</h2>
      <div class="grid grid-cols-3 gap-6">
        <nuxt-link to="/cv-templates/salesforce-developer-operations">
          <img class="shadow-sm mb-6" src="@/assets/images/cv-data/salesforce-developer-operations.png" />
          <h3 class="text-xl">Salesforce Developer - Operations CV</h3>
        </nuxt-link>
        <nuxt-link to="/cv-templates/artificial-intelligence-researcher">
          <img class="shadow-sm mb-6" src="@/assets/images/cv-data/artificial-intelligence-researcher.png" />
          <h3 class="text-xl">Artificial Intelligence Researcher CV</h3>
        </nuxt-link>
        <nuxt-link to="/cv-templates/senior-quality-engineer">
          <img class="shadow-sm mb-6" src="@/assets/images/cv-data/senior-quality-engineer.png" />
          <h3 class="text-xl">Senior Quality Engineer CV</h3>
        </nuxt-link>
      </div>
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
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>
