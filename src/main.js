import { createApp } from 'vue'
import App from './App.vue'
import vScroll from './directives/vScroll'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.directive('scroll', vScroll)

app.mount('#app')


