<template>
  <section class="font-golos text-white m-auto max-w-[480px] flex flex-col gap-10 items-center py-10">

    <div class="relative flex flex-col gap-8 items-center bg-black/20 h-[813px]">
      <h1 class="bg-logo w-logo h-logo bg-center bg-cover" />
      <div class="flex flex-col gap-4 items-center">
        <h2 class="text-center text-[34px] leading-[30px] font-bold">Вход и регистрация</h2>
        <p class="text-center text-[18px] leading-[21.6px]">Получите пароль по&nbsp;электронной почте, или авторизуйтесь
          через сторонний сервис</p>
      </div>
      <form class="flex flex-col w-full gap-[2px]">
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
        class="relative after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-white/40">техническую
        поддержку</a></div>
  </section>
</template>

<script setup>
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
  clip-path: polygon(43.771% 0.825%, 43.771% 0.825%, 44.655% 0.691%, 45.456% 0.571%, 46.183% 0.464%, 46.846% 0.372%, 47.454% 0.295%, 48.016% 0.231%, 48.542% 0.181%, 49.042% 0.146%, 49.525% 0.125%, 50% 0.118%, 50% 0.118%, 50.475% 0.125%, 50.958% 0.146%, 51.458% 0.181%, 51.984% 0.231%, 52.546% 0.295%, 53.154% 0.372%, 53.817% 0.464%, 54.544% 0.571%, 55.345% 0.691%, 56.229% 0.825%, 89.989% 5.966%, 89.989% 5.966%, 91.361% 6.176%, 92.598% 6.37%, 93.706% 6.555%, 94.696% 6.738%, 95.575% 6.924%, 96.352% 7.12%, 97.034% 7.332%, 97.631% 7.567%, 98.151% 7.832%, 98.602% 8.132%, 98.602% 8.132%, 98.981% 8.466%, 99.284% 8.829%, 99.521% 9.23%, 99.698% 9.674%, 99.825% 10.168%, 99.911% 10.719%, 99.962% 11.331%, 99.989% 12.013%, 99.999% 12.77%, 100% 13.609%, 100% 86.366%, 100% 86.366%, 99.999% 87.205%, 99.989% 87.961%, 99.962% 88.642%, 99.911% 89.254%, 99.825% 89.804%, 99.698% 90.297%, 99.521% 90.741%, 99.285% 91.142%, 98.982% 91.505%, 98.604% 91.838%, 98.604% 91.838%, 98.154% 92.139%, 97.635% 92.403%, 97.038% 92.639%, 96.357% 92.851%, 95.581% 93.047%, 94.703% 93.234%, 93.715% 93.416%, 92.607% 93.602%, 91.372% 93.797%, 90.002% 94.007%, 56.253% 99.167%, 56.253% 99.167%, 55.365% 99.303%, 54.561% 99.424%, 53.831% 99.531%, 53.166% 99.624%, 52.556% 99.702%, 51.992% 99.766%, 51.463% 99.816%, 50.962% 99.852%, 50.477% 99.873%, 50% 99.88%, 50% 99.88%, 49.523% 99.873%, 49.038% 99.852%, 48.537% 99.816%, 48.008% 99.766%, 47.444% 99.702%, 46.834% 99.624%, 46.169% 99.531%, 45.439% 99.424%, 44.635% 99.303%, 43.747% 99.167%, 9.998% 94.007%, 9.998% 94.007%, 8.628% 93.797%, 7.393% 93.602%, 6.285% 93.416%, 5.297% 93.234%, 4.419% 93.047%, 3.643% 92.851%, 2.962% 92.639%, 2.365% 92.403%, 1.846% 92.139%, 1.396% 91.838%, 1.396% 91.838%, 1.018% 91.505%, 0.715% 91.142%, 0.479% 90.741%, 0.302% 90.297%, 0.174% 89.804%, 0.089% 89.254%, 0.038% 88.642%, 0.011% 87.961%, 0.001% 87.205%, 0% 86.366%, 0% 13.609%, 0% 13.609%, 0.001% 12.77%, 0.011% 12.013%, 0.038% 11.331%, 0.089% 10.719%, 0.175% 10.168%, 0.302% 9.674%, 0.479% 9.23%, 0.716% 8.829%, 1.019% 8.466%, 1.398% 8.132%, 1.398% 8.132%, 1.849% 7.832%, 2.369% 7.567%, 2.966% 7.332%, 3.648% 7.12%, 4.425% 6.924%, 5.304% 6.738%, 6.294% 6.555%, 7.402% 6.37%, 8.639% 6.176%, 10.011% 5.966%, 43.771% 0.825%);
  padding: 40px 32px 106px;
}

ul li:first-child a {
  border-radius: 16px 16px 0 0;
}

ul li:last-child a {
  border-radius: 0 0 16px 16px;
}
</style>