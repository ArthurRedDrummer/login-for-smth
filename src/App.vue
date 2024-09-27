<template>
  <login v-model:stage="stage" />
</template>

<script setup>
import { ref } from 'vue'

const stage = ref('login');
</script>