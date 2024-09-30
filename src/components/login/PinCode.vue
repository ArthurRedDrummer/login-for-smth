<template>
  <div class="flex flex-col gap-8 w-full basis-full">
    <login-header :title="title" :anons="anons" />
    <form class="flex flex-col w-full gap-[2px]" @submit.prevent="submit">
      <form-field v-model:value="code" v-model:error="error" type="number" placeholder="Код из письма"
        ref="codeField" />
      <form-button :is-error="isError" type="submit" title="Подтвердить" />
      <div class="text-error-text text-center text-sm mt-2 h-5" :class="{
        'opacity-0': !isError
      }" v-text="error" />
    </form>
    <div class="mt-auto mb-0 w-full">
      <input class="px-6 py-4 box-border w-full bg-white/20 rounded-2xl cursor-pointer" type="button"
        value="Изменить адрес" @click.prevent="back" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useUsersStore } from '@stores/users'
import FormField from '@components/login/partials/Field'
import FormButton from '@components/login/partials/Button'
import LoginHeader from '@components/login/Header'

const email = defineModel('email');
const pin = defineModel('pin');
const emit = defineEmits(['next']);

const usersStore = useUsersStore();

const codeField = ref(null);
const code = ref('');
const error = ref('');

const isError = computed(() => error.value !== '');
const isRegistered = computed(() => usersStore.users.some(user => user.email === email.value));
const title = computed(() => isRegistered.value ? 'Рады видеть<br>вас снова' : 'Регистрация нового<br>пользователя');
const anons = computed(() => isRegistered.value
  ? `Введите код или перейдите по ссылке из письма, которое мы отправили на адрес ${email.value}`
  : `Для завершения регистрации введите код или перейдите по ссылке из письма, которое мы отправили на адрес ${email.value}`)

function back() {
  emit('next', {
    stage: 'login',
  })
}

function validate() {

  error.value = '';

  if (!code.value) {
    error.value = 'Поле не может быть пустым';

    return false;
  }

  if (code?.value?.toString()?.length !== 6) {
    error.value = 'Код должен состоять из 6 цифр';

    return false;
  }

  if (code.value !== pin.value) {
    error.value = 'Неверный код';

    return false;
  }

  return true;
}

async function submit() {
  codeField.value?.field?.blur();
  validate();

  if (isError.value) {
    return false;
  }

  usersStore.login(email.value);
  emit('next', {
    stage: 'welcome',
  })
}

onMounted(() => {
  codeField.value?.field?.focus();
})
</script>