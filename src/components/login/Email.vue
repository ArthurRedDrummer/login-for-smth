<template>
  <div class="flex flex-col gap-8 w-full">
    <login-header title="Вход и регистрация"
      anons="Получите пароль по&nbsp;электронной почте, или авторизуйтесь через сторонний сервис" />
    <form class="flex flex-col w-full gap-[2px]" @submit.prevent="submit" novalidate>
      <input
        class="w-full outline-none box-border py-[18px] px-6 border  h-14 rounded-t-xl leading-4 transition-all disabled:opacity-50"
        :class="isError
          ? 'border-error-background/30 bg-error-background/20 text-error-text'
          : 'border-white/30 bg-input/50'" type="email" placeholder="Адрес эл. почты" v-model="email" :disabled="isLoading"
        ref="field" @focus="clear" />
      <input
        class="w-full bg-gradient-to-r box-border px-6 h-14 rounded-b-xl cursor-pointer transition-all disabled:opacity-50"
        :class="isError
          ? 'from-gr-button-error-start to-gr-button-error-end text-error-text'
          : 'from-gr-button-default-start to-gr-button-default-end text-white'" type="submit" value="Получить пароль"
        :disabled="isLoading" />
      <transition name="fade">
        <div v-if="isError" class="text-error-text text-center text-sm mt-2" v-text="error" />
      </transition>
    </form>
    <social :is-loading="isLoading" />
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import LoginHeader from '@components/login/Header'
import Social from '@components/login/Social'

const emit = defineEmits(['next']);
const email = defineModel('email');
const field = ref(null);
const code = ref('');
const error = ref('');
const isError = ref(false);
const isLoading = ref(false);

function clear() {
  error.value = '';
  isError.value = false;
}

function validate() {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  error.value = '';
  isError.value = false;

  if (!email.value) {
    error.value = 'Это поле обязательно для заполнения';
    isError.value = true;

    return false;
  }

  if (!re.test(email.value)) {
    error.value = 'Неверный адрес электронной почты';
    isError.value = true;

    return false;
  }


  return true;
}

function generateCode() {
  return Math.floor(100000 + Math.random() * 900000);
}

async function submit() {
  field.value.blur();
  validate();

  if (isError.value) {
    return false;
  }

  isLoading.value = true;

  const code = generateCode();

  alert(`Your code: ${code}`);

  return new Promise((resolve) => {
    setTimeout(() => {
      emit('next', {
        stage: 'code',
        code
      });

      resolve();
    }, 1000)
  })
}

onMounted(() => {
  if (field.value) {
    field.value.focus();
  }
})
</script>