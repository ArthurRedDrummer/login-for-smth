import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App'
import Login from '@components/login/Wrapper'
import Welcome from '@components/Welcome'

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .component('login', Login)
  .component('welcome', Welcome)
  .mount('#app')
