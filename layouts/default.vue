<template>
  <div id="app" class="app flex justify-center">
    <div class="wrapper w-full">
      <header>
        <div class="px-4 pt-4 pb-8 md:p-8 flex items-center justify-between">
          <div>
            <nuxt-link to="/"><img class="w-16 sm:w-20 h-auto" src="@/assets/images/logo.png" /></nuxt-link>
          </div>
          <div class="flex items-center space-x-6 sm:space-x-8 sm:text-xl">
            <nuxt-link to="/">✏️ CV Builder</nuxt-link>
            <nuxt-link to="/cv-templates">📄 CV Templates</nuxt-link>
          </div>
        </div>
      </header>
      <main>
        <nuxt />
      </main>
      <footer class="flex flex-col items-center px-4 pb-4 md:px-8 md:pb-8 pt-6 text-sm">
        <p>&copy; {{ copyrightYear }} cvwizard. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    copyrightYear() {
      return new Date().getFullYear()
    }
  }
}
</script>


<style lang="postcss">
html {
  font-family: "Fira Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #2d3748;
}

body.modal-open {
  overflow: hidden;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  @apply text-5xl font-bold;
  line-height: 1.2;
}

h2 {
  @apply text-4xl font-bold;
  line-height: 1.2;
}

h3 {
  @apply text-3xl font-bold;
  line-height: 1.2;
}

h4 {
  @apply text-2xl font-bold;
  line-height: 1.2;
}

h5 {
  @apply text-xl font-bold;
  line-height: 1.2;
}

h6 {
  @apply text-lg font-bold;
  line-height: 1.2;
}

a {
  color: #a600ff;

  &:hover {
    @apply underline;
    color: #8500cc;
  }
}

.app {
  background-color: #f4f4f4;
}

.wrapper,
header {
  max-width: 1280px;
}

header, main, footer {
  background-color: #f4f4f4;
}

.page-hero {
  @apply bg-blue-500 pt-10 pb-10 px-4 text-white;
}

.page-content {
  @apply p-4 md:p-8;
  background-color: #f4f4f4;
}

.cv-page {
  @apply flex flex-col items-center justify-center w-full;
}
.cv-page section {
  @apply w-full;
  max-width: 21cm;
}

.text-purple-brand {
  color: #a600ff;
}

.download-lock {
  max-width: 175px;
}

@media (max-width: 1280px) {
  h1 {
    @apply text-4xl;
  }

  h2 {
    @apply text-3xl;
  }

  h3 {
    @apply text-2xl;
  }

  h4 {
    @apply text-xl;
  }

  h5 {
    @apply text-lg;
  }

  h6 {
    @apply text-base;
  }

  .wrapper,
  header {
    max-width: 1024px;
  }
}

@media (max-width: 1024px) {
  .wrapper,
  header {
    max-width: 768px;
  }
}

@media (max-width: 768px) {
  .wrapper,
  header {
    max-width: 640px;
  }
}

@media (max-width: 640px) {
  .download-lock {
    max-width: 100vw;
  }
}
</style>