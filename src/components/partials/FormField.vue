<template>
  <div class="flex flex-row gap-5">
    <label :for="id" v-text="title"/>
    <input ref="field" class="outline-0 border-b border-b-zinc-400 font-thin" :id="id" :type="type" :placeholder="placeholder"
      v-model="model" />
  </div>

</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  title: String,
  focus: {
    default() {
      return false
    }
  },
  placeholder: {
    default() {
      return '...'
    }
  },
  type: {
    default() {
      return 'text'
    }
  }
});

const model = defineModel();
const field = ref(null);

const id = computed(() => {
  return props.title.toLowerCase().replace(' ', '-')
})

onMounted(() => {
  if (props.focus) {
    field.value.focus();
  }
})
</script>