<template>
  <textarea class="p-2 resize-none" v-model="value" ref="textarea" rows="1" @focus="resize" @keyup="resize"></textarea>
</template>

<script>
  export default {
    name: 'TextField',
    props: ['value'],
    mounted() {
      this.resize()
    },
    methods: {
      resize() {
        const { textarea } = this.$refs
        textarea.style.height = textarea.scrollHeight - 4 + 'px'
      }
    }
  }
</script>