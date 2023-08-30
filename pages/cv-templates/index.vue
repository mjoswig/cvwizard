<template>
  <article class="page-content">
    <section>
      <h1 class="text-purple-brand sm:text-center mb-4">Free CV templates</h1>
      <p class="sm:text-center text-xl mb-6">Our CV templates will show you the skills and achievements you need to land work in {{ currentYear }}.</p>
      <div class="flex sm:justify-center text-lg w-full">
        <Btn @click="$router.push('/')">Create your CV - it's free</Btn>
      </div>
    </section>
    <section class="mt-12" v-for="(category, index) in cvCategories" :key="index">
      <h2 class="mb-7">{{ category.name }} CV examples</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        <nuxt-link v-for="(cvSlug, index) in category.cvs" :key="index" :to="`/cv-templates/${cvSlug}`">
          <img class="shadow-sm mb-3 md:mb-6" :src="require(`@/assets/images/cv-data/${cvSlug}.png`)" />
          <span class="block text-lg md:text-xl">{{ require(`@/assets/json/cv-data/${cvSlug}.json`).profession.value }}</span>
        </nuxt-link>
      </div>
    </section>
  </article>
</template>

<script>
import cvCategories from '@/assets/json/cv-categories.json'

export default {
  name: 'CvTemplatesIndexPage',
  head() {
    return {
      title: 'Free CV Templates - cvwizard'
    }
  },
  data() {
    return {
      cvCategories
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>
