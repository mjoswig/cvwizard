<template>
  <div class="app flex justify-center">
    <div class="wrapper w-full">
      <header>
        <div class="p-4 flex items-center justify-between">
          <div>
            <nuxt-link to="/"><img class="w-24 h-auto" src="@/assets/images/logo.png" /></nuxt-link>
          </div>
          <a class="cta-link-primary" href="#">Download PDF</a>
        </div>
      </header>
      <main class="border p-8">
        <nuxt />
      </main>
      <footer class="p-8 text-sm sm:text-center">
        <p>Copyright &copy; 2022 cvwizard.io - a venture by <a href="https://joswigsolutions.com/" target="_blank">Joswig Solutions Pte Ltd</a>. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
}
</script>


<style lang="postcss">
html {
  font-family: "Tauri", sans-serif;
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
  background-color: #ffffff;
}

.wrapper,
header {
  max-width: 1400px;
}

header, footer {
  background-color: #f4f4f4;
}

.page-hero {
  @apply bg-blue-500 pt-10 pb-10 px-4 text-white;
}

.page-content {
  @apply pt-8 pb-4 px-4;
  background-color: #f4f4f4;
}

.text-blue-brand {
  color: #a600ff;
}

.cta-button-primary {
  background-color: #a600ff;

  &:hover {
    background-color: #8500cc;
  }
}

.cta-button-light {
  color: #a600ff;
}

.cta-link-primary {
  @apply font-bold text-white rounded-md shadow-md px-4 py-2 flex justify-center;
  background-color: #a600ff;

  &:focus {
    @apply outline-none;
  }

  &:hover {
    @apply text-white;
    background-color: #8500cc;
    text-decoration: none;
  }
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
</style>