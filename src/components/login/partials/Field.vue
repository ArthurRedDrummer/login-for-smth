<template>
  <input
    class="w-full outline-none box-border py-[18px] px-6 border  h-14 rounded-t-xl leading-4 transition-all disabled:opacity-50"
    :class="error !== ''
      ? 'border-error-background/30 bg-error-background/20 text-error-text'
      : 'border-white/30 bg-input/50'" :type="type" :placeholder="placeholder" :disabled="isDisabled" v-model="value" ref="field"
    @focus="clear" />
</template>

<script setup>
import {ref} from 'vue'

const props = defineProps({
  type: {
    default() {
      return 'text';
    },
    type: String
  },
  placeholder: {
    default() {
      return '...'
    },
    type: String
  },
  isDisabled: {
    default() {
      return false
    },
    type: Boolean
  }
});
const value = defineModel('value');
const error = defineModel('error');

const field = ref(null);

function clear() {
  error.value = '';
}

defineExpose({
  field 
})
</script>