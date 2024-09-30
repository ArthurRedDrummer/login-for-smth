<template>
  <transition name="fade" mode="out-in">
    <login v-if="stage !== 'welcome'" v-model:stage="stage" />
    <welcome v-else v-model:stage="stage" />
  </transition>

</template>

<script setup>
import { ref } from 'vue'
import { useUsersStore } from '@stores/users';
import Welcome from './components/Welcome.vue';

const usersStore = useUsersStore();
const isAuthorized = usersStore.current;

const stage = ref(isAuthorized ? 'welcome' : 'login');
</script>