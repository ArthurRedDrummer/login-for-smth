<template>
  <form class="flex flex-col gap-5" @submit.prevent="submit">
    <form-field title="Email" v-model="email" type="email" :focus="true" />
    <form-button title="Go!" type="submit" />
  </form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['next']);
const email = ref('');

function submit() {
  emit('next', 'code')
}
</script>