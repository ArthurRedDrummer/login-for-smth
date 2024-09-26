<template>
  <section class="font-golos text-white m-auto max-w-[480px] flex flex-col gap-10 items-center py-10">

    <div class="relative flex flex-col gap-8 items-center bg-black/20">
      <h1 class="bg-logo w-logo h-logo bg-center bg-cover" />
      <div class="flex flex-col gap-4 items-center">
        <h2 class="text-center text-[34px] leading-[30px] font-bold">Вход и регистрация</h2>
        <p class="text-center text-[18px] leading-[21.6px]">Получите пароль по&nbsp;электронной почте, или авторизуйтесь
          через сторонний сервис</p>
      </div>
      <form class="flex flex-col w-full gap-[1px]">
        <input
          class="w-full outline-none bg-input/50 box-border py-[18px] px-6 border border-white/30 h-14 rounded-t-xl leading-4"
          type="email" placeholder="Адрес эл. почты" />
        <input
          class="w-full bg-gradient-to-r from-gr-button-start to-gr-button-end box-border px-6 h-14 rounded-b-xl cursor-pointer"
          type="submit" value="Получить пароль" />
      </form>
      <div class="w-full flex flex-col gap-4" v-if="socialList">
        <h3 class="text-center text-[18px] leading-[21.6px]">Сторонние сервисы для входа</h3>
        <ul class="flex flex-col gap-[2px]">
          <li v-for="item, index in socialList" :key="`social-item-${index}`">
            <a class="flex flex-row gap-5 items-center justify-between px-6 py-4 box-border w-full bg-white/20"
              href="#vk">
              <span class="text-md leading-4" v-text="item.title" />
              <i :class="item.icon" class="h-6 w-6 bg-cover bg-center" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-[400px] text-center text-xl">Что-то пошло не&nbsp;так? Обратитесь в&nbsp;<a href="#"
        class="underline">техническую
        поддержку</a></div>
  </section>
</template>

<script setup>
// const socialList = [
//   {
//     title: 'ВКонтакте',
//     icon: 'bg-vkontakte-icon'
//   },
//   {
//     title: 'Одноклассники',
//     icon: 'bg-odnoklassniki-icon'
//   },
//   {
//     title: 'Сбер ID',
//     icon: 'bg-sber-icon'
//   },
//   {
//     title: 'Яндекс ID',
//     icon: 'bg-yandex-icon'
//   }
// ]
</script>

<style scoped>
section {
  position: relative;
  z-index: 2;
}

section div {
  position: relative;
  z-index: 1;
}

section > div:first-child  {
  clip-path: polygon(0 14%, 50% 0, 100% 14%, 100% 86%, 50% 100%, 0 86%);
  padding: 32px 32px 96px;
}

ul li:first-child a {
  border-radius: 16px 16px 0 0;
}

ul li:last-child a {
  border-radius: 0 0 16px 16px;
}
</style>