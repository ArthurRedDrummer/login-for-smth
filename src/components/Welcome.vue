<template>
  <div class="m-auto text-3xl text-white flex flex-col gap-5">
    <h1>Authorization complete!</h1>
    <form-button title="Exit!" @click.prevent="exit" />
  </div>
</template>

<script setup>
const emit = defineEmits(['exit']);

function exit() {
  localStorage.removeItem('trim-authorized')
  emit('exit')
}
</script>