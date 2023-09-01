<template>
  <section>
    <h2 class="sm:text-center mb-8">Frequently asked questions</h2>
    <div class="mb-8">
      <h3 class="text-gray-500 mb-2">How long should a {{ keyword }} be?</h3>
      <p class="text-lg">A {{ keyword }} should be kept to a single page as it allows the employer to quickly review the applicant's qualifications and experience without getting overwhelmed by unnecessary details.</p>
    </div>
    <div class="mb-8">
      <h3 class="text-gray-500 mb-2">What should I put on my {{ keyword }}?</h3>
      <p class="text-lg">When creating a {{ keyword }}, it's important to include only the relevant information for the role you're applying for, such as your education, work experience, skills, and achievements.</p>
    </div>
    <div class="mb-8">
      <h3 class="text-gray-500 mb-2">How to list references on a {{ keyword }}?</h3>
      <p class="text-lg">It's generally recommended not to list references on a {{ keyword }}. Instead, you can include a separate document with your references, which can be provided upon request from the employer.</p>
    </div>
    <div>
      <h3 class="text-gray-500 mb-2">How should a {{ keyword }} look?</h3>
      <p class="text-lg">When it comes to the appearance of a {{ keyword }}, simplicity and readability are key, and it's generally best to avoid overly creative design elements that could be distracting or hard to read.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqSection',
  props: {
    keyword: {
      default: 'CV'
    }
  }
}
</script>
