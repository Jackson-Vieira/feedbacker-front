import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Toast, { POSITION } from "vue-toastification";

import 'animate.css';
import './assets/css/tailwind.css'
import './assets/css/fonts.css'

// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp(App)

app.use(router)
app.use(Toast, {
  position: POSITION.BOTTOM_RIGHT,
})
app.mount('#app')
