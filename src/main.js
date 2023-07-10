import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from '@/config/firebase'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify, {iconfont: 'mdi'}).use(store).use(router).mount('#app')
