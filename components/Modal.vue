<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div class="p-6 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle" :class="{ 'w-128': !isLarge, 'w-full sm:w-3/4 lg:w-1/2': isLarge }">
        <div class="make-modal-scrollable text-center sm:mt-0 sm:text-left mb-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900 mb-6" id="modal-title" v-show="heading !== ''">
            {{ heading }}
          </h3>
          <slot />
        </div>
        <div class="sm:flex sm:flex-row-reverse">
          <Btn :type="confirmationButtonType" :is-disabled="confirmationButtonDisabled" :is-loading="confirmationButtonLoading" class="w-full sm:ml-3 sm:w-auto" @click="$emit('confirm')" v-if="!hideConfirmationButton">
            {{ confirmationButtonLabel }}
          </Btn>
          <Btn type="light" class="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto" @click="$emit('cancel')">
            {{ cancellationButtonLabel }}
          </Btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isLarge: {
      type: Boolean,
      required: false,
      default: false
    },
    heading: {
      type: String,
      required: false,
      default: ''
    },
    confirmationButtonType: {
      type: String,
      required: false,
      default: 'primary'
    },
    confirmationButtonLabel: {
      type: String,
      required: false,
      default: 'Confirm'
    },
    confirmationButtonDisabled: {
      type: Boolean,
      required: false,
      default: false
    },
    hideConfirmationButton: {
      type: Boolean,
      required: false,
      default: false
    },
    confirmationButtonLoading: {
      type: Boolean,
      required: false,
      default: false
    },
    cancellationButtonLabel: {
      type: String,
      required: false,
      default: 'Cancel'
    }
  }
}
</script>
