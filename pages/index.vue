<template>
  <div class="page-content">
    <div class="mb-12">
      <h1 class="text-purple-brand sm:text-center">Create a professional CV in 5 minutes</h1>
      <p class="lg:hidden text-gray-400 sm:text-center text-xl mt-4">You will get the best user experience by visiting this website on a large device.</p>
    </div>
    <div class="flex">
      <div class="w-1/4">
        <adsbygoogle />
      </div>
      <div class="w-full">
        <CVBuilder :is-downloading="isDownloading" />
      </div>
      <div class="w-1/4">
        <adsbygoogle />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  props: ['isDownloading']
}
</script>
