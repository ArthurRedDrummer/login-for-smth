<template>
  <div class="flex flex-col gap-8 w-full basis-full">
    <login-header title="Рады видеть<br>вас снова" :anons="`Введите код или перейдите по&nbsp;ссылке из&nbsp;письма,
        которое мы&nbsp;отправили на&nbsp;адрес ` + email" />
    <form class="flex flex-col w-full gap-[2px]" @submit.prevent="submit">
      <input
        class="w-full outline-none bg-input/50 box-border py-[18px] px-6 border border-white/30 h-14 rounded-t-xl leading-4 font-mono"
        type="number" placeholder="Код из письма" v-model="code" ref="field" />
      <input
        class="w-full bg-gradient-to-r from-gr-button-default-start to-gr-button-default-end box-border px-6 h-14 rounded-b-xl cursor-pointer"
        type="submit" value="Подтвердить" />
    </form>
    <div class="mt-auto mb-0 w-full">
      <input
        class="flex flex-row gap-5 items-center justify-between px-6 py-4 box-border w-full bg-white/20 rounded-2xl cursor-pointer"
        type="button" value="Изменить адрес" @click.prevent="back" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LoginHeader from '@components/login/Header'

const email = defineModel('email');
const emit = defineEmits(['next']);

const code = ref('');
const field = ref(null);

function back() {
  emit('next', {
    stage: 'login',
  })
}

async function submit() {
  field.value.blur();
  if (code.value === 1234) {
    alert('Не ленись, введи что-нибудь интереснее :)');
  } else {
    alert('Дохуярю в понедельник :)');
  }
}

onMounted(() => {
  field.value.focus();
})
</script>