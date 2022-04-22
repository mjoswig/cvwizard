<template>
  <div :class="{ 'opacity-30': disabled }">
    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input type="checkbox" name="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer" :disabled="disabled" v-model="inputValue" />
      <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
    </div>
    <label for="toggle">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'Toggle',
  props: ['label', 'value', 'disabled'],
  data() {
    return {
      inputValue: this.value
    }
  },
  watch: {
    inputValue() {
      this.$emit('input', this.inputValue)
    }
  }
}
</script>


<style>
.toggle-checkbox:checked {
  right: 0;
  border-color: #a600ff;
}
.toggle-checkbox:checked + .toggle-label {
  background-color: #a600ff;
}
</style>