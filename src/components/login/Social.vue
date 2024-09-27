<template>
  <div class="w-full flex flex-col gap-4" v-if="socialList">
    <h3 class="text-center text-[18px] leading-[21.6px]">Сторонние сервисы для входа</h3>
    <ul class="flex flex-col gap-[2px] relative" :class="{
      'opacity-50 after:block after:absolute after:inset-0 after:z-[2]': isLoading
    }">
      <li v-for="item, index in socialList" class="bg-white/20 first:rounded-t-xl last:rounded-b-xl"
        :key="`social-item-${index}`">
        <a class="flex flex-row gap-5 items-center justify-between px-6 py-4 box-border w-full" href="#vk">
          <span class="text-md leading-4" v-text="item.title" />
          <i :class="item.icon" class="h-6 w-6 bg-cover bg-center" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  isLoading: Boolean
})
const socialList = [
  {
    title: 'ВКонтакте',
    icon: 'bg-vkontakte-icon'
  },
  {
    title: 'Одноклассники',
    icon: 'bg-odnoklassniki-icon'
  },
  {
    title: 'Сбер ID',
    icon: 'bg-sber-icon'
  },
  {
    title: 'Яндекс ID',
    icon: 'bg-yandex-icon'
  }
]
</script>