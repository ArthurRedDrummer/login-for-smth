<template>
  <button class="text-sm bg-rose-700 text-white py-2 px-4 rounded-md" :type="type" v-text="title" />
</template>

<script setup>
const props = defineProps({
  title: String,
  type: {
    default() {
      return 'button'
    }
  },
})
</script>