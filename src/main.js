import { createApp } from 'vue'
import App from './App.vue'
import Vue3Datatable from '@bhplugin/vue3-datatable'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '@/assets/app.css'
import globalProperties from './plugins/global'
import { Icon } from '@iconify/vue'
import Popup from '@/components/AppPopup.vue';
import { createPinia } from 'pinia'
import alert from './plugins/alert'
import '@bhplugin/vue3-datatable/dist/style.css'


const pinia = createPinia();

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(globalProperties)
  .use(pinia)
  .use(alert)

  .component('icon', Icon)
  .component('popup', Popup)
  .component('vue-datatable', Vue3Datatable)
  .mount('#app')
