import { createApp } from 'vue'
import App from './App'
import Login from '@components/login/Wrapper'

createApp(App)
  .component('login', Login)
  .mount('#app')
