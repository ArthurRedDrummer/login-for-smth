<template>
  <form @submit.prevent="submit">
    <input type="email" placeholder="Email" v-model="email" />
    <input type="submit" />
  </form>
</template>

<script setup>
import {ref} from 'vue'

const emit = defineEmits(['next']);
const email = ref('');

function submit() {
  emit('next', 'code')
}
</script>