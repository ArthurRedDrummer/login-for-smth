<template>
  <div class="flex flex-col gap-4 items-center">
    <h2 class="text-center text-[34px] leading-[30px] font-bold mobile:text-[24px]" v-html="title"/>
    <p class="text-center text-[18px] leading-[21.6px]" v-html="anons"/>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  anons: String
})
</script>