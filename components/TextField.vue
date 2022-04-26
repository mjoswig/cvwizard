<template>
  <textarea class="p-2 resize-none overflow-hidden" :value="value" ref="textarea" rows="1" @change="inputValue = $event.target.value" @focus="resize" @keyup="resize"></textarea>
</template>

<script>
  export default {
    name: 'TextField',
    props: ['value'],
    data() {
      return {
        inputValue: this.value
      }
    },
    watch: {
      inputValue() {
        this.$emit('input', this.inputValue)
      }
    },
    mounted() {
      this.resize()
    },
    methods: {
      resize() {
        this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight - 4 + 'px'
      }
    }
  }
</script>