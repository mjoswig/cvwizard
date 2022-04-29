<template>
  <div class="w-max">
    <input class="border bg-white p-2 rounded-md" :placeholder="placeholder" :value="value" @change="inputValue = $event.target.value" @keyup.enter="showInput = false" @blur="showInput = false" v-show="showInput" />
    <div class="bg-gray-100 p-2 rounded-md w-max" @click="showInput = true" v-show="!showInput">
      <span class="block" :class="{ 'dl-fix': dlFix }">{{ inputValue }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TagField',
    props: ['placeholder', 'value', 'dlFix'],
    data() {
      return {
        inputValue: this.value,
        showInput: false
      }
    },
    watch: {
      inputValue() {
        this.$emit('input', this.inputValue)
      }
    }
  }
</script>

<style scoped>
.dl-fix {
  @apply py-2;
  margin-top: -15px;
}
</style>