import { createApp } from 'vue'
import App from './App.vue'
import Popup from './components/Popup.vue'
import Loader from './components/Loader.vue'
import FormField from './components/partials/FormField.vue'
import FormButton from './components/partials/FormButton.vue'

createApp(App)
  .component('popup', Popup)
  .component('loader', Loader)
  .component('form-field', FormField)
  .component('form-button', FormButton)
  .mount('#app')
