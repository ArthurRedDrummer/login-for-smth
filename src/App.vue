<template>
  <popup v-if="!isAuthorized">
    <component :is="view[stage]" @next="changeStage"/>
  </popup>
  <welcome v-else/>
</template>

<script setup>
import {ref, computed} from 'vue'
import EmailForm from './components/EmailForm.vue'
import CodeForm from './components/CodeForm.vue'
import Welcome from './components/Welcome.vue';

const stage = ref('login');

const isAuthorized = computed(() => stage.value !== 'code' && stage.value !== 'login')

const view = {
  login: EmailForm,
  code: CodeForm
}

function changeStage(value) {
  stage.value = value
}

</script>