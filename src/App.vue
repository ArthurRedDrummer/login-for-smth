<template>
  <login/>
  <!-- <transition name="page">
    <popup v-if="!isAuthorized">
      <component v-if="stage !== 'loading'" :is="view[stage]" @next="changeStage" />
    </popup>
    <welcome v-else @exit="changeStage('login')" />
  </transition> -->
</template>

<script setup>
import { ref, computed } from 'vue'
import EmailForm from '@components/EmailForm'
import CodeForm from '@components/CodeForm'
import Welcome from '@components/Welcome';

const stage = ref(localStorage.getItem('trim-authorized') ? 'welcome' : 'login');

const isAuthorized = computed(() => stage.value !== 'code' && stage.value !== 'login')

const view = {
  login: EmailForm,
  code: CodeForm
}

function changeStage(value) {
  stage.value = value
}

</script>