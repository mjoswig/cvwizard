<template>
  <div class="w-full" style="min-width: 125px;">
    <textarea class="p-2 resize-none overflow-hidden w-full" :placeholder="placeholder" ref="textarea" rows="1" @change="inputValue = $event.target.value" @focus="resize" @keyup="resize" @blur="showInput = false" v-show="showInput"></textarea>
    <div class="p-2 w-full" :class="{ 'text-gray-300': !inputValue }" style="white-space: pre-wrap;" @click="showInput = true" v-show="!showInput">{{ inputValue || placeholder }}</div>
  </div>
</template>

<script>
  export default {
    name: 'TextField',
    props: ['textSize', 'placeholder', 'value'],
    data() {
      return {
        inputValue: this.value,
        showInput: false
      }
    },
    watch: {
      textSize() {
        this.resize()
      },
      inputValue() {
        this.$emit('input', this.inputValue)
      }
    },
    mounted() {
      this.resize()
    },
    methods: {
      resize() {
        //this.$refs.textarea.style.height = '1px'
        this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight - 4 + 'px'
      }
    }
  }
</script>