<template>
  <div class="flex flex-col gap-8 items-center m-auto w-[400px]">
    <h1 class="text-center text-[34px] leading-[30px] font-bold mobile:text-[24px] m-auto text-white">Welcome {{ user.email }}!</h1>
    <div class="flex flex-row gap-4 justify-stretch w-full">
      <button
        class="px-6 py-4 box-border w-full bg-gradient-to-r from-gr-button-default-start to-gr-button-default-end rounded-2xl cursor-pointer text-white"
        @click="logout">Logout</button>

    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const stage = defineModel('stage');

const user = reactive(JSON.parse(localStorage.getItem('smotrim-user')));
function logout() {
  localStorage.removeItem('smotrim-user');
  stage.value = 'login';
}
</script>