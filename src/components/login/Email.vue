<template>
  <div class="flex flex-col gap-8 w-full">
    <login-header title="Вход и регистрация"
      anons="Получите пароль по&nbsp;электронной почте, или авторизуйтесь через сторонний сервис" />
    <form class="flex flex-col w-full gap-[2px]" @submit.prevent="submit" novalidate>
      <form-field v-model:value="email" v-model:error="error" type="email" placeholder="Адрес эл. почты"
        :is-disabled="isLoading" ref="emailField" />
      <form-button :is-loading="isLoading" :is-error="isError" type="submit" title="Получить пароль" />
      <div class="text-error-text text-center text-sm mt-2 h-5" :class="{
        'opacity-0': !isError
      }" v-text="error" />
    </form>
    <social :is-loading="isLoading" />
  </div>

</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import FormField from '@components/login/partials/Field'
import FormButton from '@components/login/partials/Button'
import LoginHeader from '@components/login/Header'
import Social from '@components/login/Social'

const emit = defineEmits(['next']);
const email = defineModel('email');
const emailField = ref(null);
const error = ref('');
const isLoading = ref(false);

const isError = computed(() => error.value !== '');
function validate() {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  error.value = '';

  if (!email.value) {
    error.value = 'Это поле обязательно для заполнения';

    return false;
  }

  if (!re.test(email.value)) {
    error.value = 'Неверный адрес электронной почты';

    return false;
  }


  return true;
}

function generateCode() {
  return Math.floor(100000 + Math.random() * 900000);
}

async function submit() {
  emailField.value?.field?.blur()
  validate();

  if (isError.value) {
    return false;
  }

  isLoading.value = true;

  const code = generateCode();

  alert(`Your code: ${code}`);

  emit('next', {
    stage: 'code',
    code
  });
}

onMounted(() => {
  emailField.value?.field?.focus()
})
</script>