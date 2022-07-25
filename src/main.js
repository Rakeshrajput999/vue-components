import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './assets/main.css'
import axios from 'axios'

axios.interceptors.request.use(
  config=>{
  
  return config
  },
   error=> {
    // Do something with request error
     return Promise.reject(error);
  }
)

axios.interceptors.request.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      this.$store.dispatch('logout')
    }
    return Promise.reject(error)
  }
)



const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
