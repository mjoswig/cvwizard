<template>
  <button class="font-bold text-white rounded-md shadow-md px-4 py-2 flex justify-center focus:outline-none" :class="buttonClasses" @click="onClick">
    <div class="flex items-center gap-2">
      <img src="@/assets/images/icons/spinner.svg" v-show="isLoading" />
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    type: {
      type: String,
      required: false,
      default: 'primary'
    },
    isLoading: {
      type: Boolean,
      required: false
    },
    isDisabled: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    buttonClasses() {
      return {
        'bg-gray-400 cursor-not-allowed': this.isLoading || this.isDisabled,
        'bg-purple-500 focus:ring-purple-500 hover:bg-purple-600': !this.isLoading && !this.isDisabled && this.type === 'primary',
        'bg-red-700 focus:ring-red-700 hover:bg-red-800': !this.isLoading && !this.isDisabled && this.type === 'danger',
        'bg-gray-200 focus:ring-gray-200 hover:bg-gray-300 text-gray-700': !this.isLoading && !this.isDisabled && this.type === 'light'
      }
    }
  },
  methods: {
    onClick() {
      if (!this.isLoading && !this.isDisabled) {
        this.$emit('click')
      }
    }
  }
}
</script>