import { createApp } from 'vue'
import App from './App.vue'
import Popup from './components/Popup.vue'

createApp(App)
  .component('popup', Popup)
  .mount('#app')
