import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { Api } from './common/Api'
import router from './router'

const app = createApp(App)
app.provide('Api', new Api('/api'))
app.use(router)

app.mount('#app')
