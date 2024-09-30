<template>
  <input
    class="w-full bg-gradient-to-r box-border px-6 h-14 rounded-b-xl cursor-pointer transition-all disabled:opacity-50"
    :class="isError
      ? 'from-gr-button-error-start to-gr-button-error-end text-error-text'
      : 'from-gr-button-default-start to-gr-button-default-end text-white'" :type="type" :value="title"
    :disabled="isLoading" />
</template>

<script setup>
const props = defineProps({
  type: {
    default() {
      return 'button'
    },
    type: String
  },
  title: {
    default() {
      return 'Кнопка'
    },
    type: String
  },
  isLoading: Boolean,
  isError: Boolean
})
</script>