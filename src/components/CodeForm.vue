<template>
  <form class="flex flex-col gap-5" @submit.prevent="submit">
    <form-field title="Code" v-model="code" type="number" :focus="true" />
    <form-button title="Go!" type="submit" />
  </form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['next']);
const code = ref('');

function submit() {
  localStorage.setItem('trim-authorized', true)
  emit('next', 'welcome')
}
</script>