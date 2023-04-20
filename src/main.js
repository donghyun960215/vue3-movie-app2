import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'

createApp(App)
  .use(router)    //.use()는 특정한 플러그인을 연결할 떄  사용한다.
  .mount('#app')