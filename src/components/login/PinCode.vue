<template>
  <div class="flex flex-col gap-8 w-full basis-full">
    <login-header title="Рады видеть<br>вас снова" :anons="`Введите код или перейдите по&nbsp;ссылке из&nbsp;письма,
        которое мы&nbsp;отправили на&nbsp;адрес ` + email" />
    <form class="flex flex-col w-full gap-[2px]" @submit.prevent="submit">
      <input
        class="w-full outline-none bg-input/50 box-border py-[18px] px-6 border border-white/30 h-14 rounded-t-xl leading-4 font-mono"
        :class="isError
          ? 'border-error-background/30 bg-error-background/20 text-error-text'
          : 'border-white/30 bg-input/50'" type="number" placeholder="Код из письма" v-model="code" ref="field"
        @focus="clear" />
      <input
        class="w-full bg-gradient-to-r from-gr-button-default-start to-gr-button-default-end box-border px-6 h-14 rounded-b-xl cursor-pointer"
        :class="isError
          ? 'from-gr-button-error-start to-gr-button-error-end text-error-text'
          : 'from-gr-button-default-start to-gr-button-default-end text-white'" type="submit" value="Подтвердить" />
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
import { ref, onMounted } from 'vue'
import LoginHeader from '@components/login/Header'

const email = defineModel('email');
const pin = defineModel('pin');
const emit = defineEmits(['next']);

const code = ref('');
const field = ref(null);
const error = ref('');
const isError = ref(false);

function back() {
  emit('next', {
    stage: 'login',
  })
}

function clear() {
  error.value = '';
  isError.value = false;
}

function validate() {

  error.value = '';
  isError.value = false;

  console.log(code.value);


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
  field.value.blur();
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
  field.value.focus();
  console.log(pin.value);

})
</script>