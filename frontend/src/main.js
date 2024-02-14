import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index.js'
import Toast from 'vue-toastification'
import "vue-toastification/dist/index.css";
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)
app.use(router)
app.use(Toast)
app.mount('#app')