import { createApp } from 'vue'
import App from './App'
import Login from '@components/login/Wrapper'
import Welcome from '@components/Welcome'

createApp(App)
  .component('login', Login)
  .component('welcome', Welcome)
  .mount('#app')
