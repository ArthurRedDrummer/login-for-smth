import { createApp } from 'vue'
import App from './App'
import Popup from '@components/Popup'
import Login from '@components/Login'
import Loader from '@components/Loader'
import FormField from '@components/partials/FormField'
import FormButton from '@components/partials/FormButton'

createApp(App)
  // .component('popup', Popup)
  // .component('loader', Loader)
  // .component('form-field', FormField)
  // .component('form-button', FormButton)

  .component('login', Login)
  .mount('#app')
