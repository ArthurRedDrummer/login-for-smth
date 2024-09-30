<template>
  <div class="flex flex-col gap-8 w-full basis-full">
    <login-header title="Рады видеть<br>вас снова" :anons="`Введите код или перейдите по&nbsp;ссылке из&nbsp;письма,
        которое мы&nbsp;отправили на&nbsp;адрес ` + email" />
    <form class="flex flex-col w-full gap-[2px]" @submit.prevent="submit">
      <form-field v-model:value="code" v-model:error="error" type="number" placeholder="Код из письма" ref="codeField" />
      <form-button :is-error="isError" type="submit" title="Подтвердить" />
      <transition name="fade">
        <div v-if="isError" class="text-error-text text-center text-sm mt-2" v-text="error" />
      </transition>
    </form>
    <div class="mt-auto mb-0 w-full">
      <input class="px-6 py-4 box-border w-full bg-white/20 rounded-2xl cursor-pointer" type="button"
        value="Изменить адрес" @click.prevent="back" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import FormField from '@components/login/partials/Field'
import FormButton from '@components/login/partials/Button'
import LoginHeader from '@components/login/Header'

const email = defineModel('email');
const pin = defineModel('pin');
const emit = defineEmits(['next']);

const codeField = ref(null);
const code = ref('');
const error = ref('');

const isError = computed(() => error.value !== '');

function back() {
  emit('next', {
    stage: 'login',
  })
}

function validate() {

  error.value = '';
  isError.value = false;

  if (!code.value) {
    error.value = 'Поле не может быть пустым';
    isError.value = true;

    return false;
  }

  if (code?.value?.toString()?.length !== 6) {
    error.value = 'Код должен состоять из 6 цифр';
    isError.value = true;

    return false;
  }

  if (code.value !== pin.value) {
    error.value = 'Неверный код';
    isError.value = true;

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

  localStorage.setItem('smotrim-user', JSON.stringify({
    email: email.value
  }))
  emit('next', {
    stage: 'welcome',
  })
}

onMounted(() => {
  codeField.value?.field?.focus();
})
</script>