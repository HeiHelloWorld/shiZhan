import Vue from 'vue'
import App from './App.vue'
import { Button } from "vant"

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

import  "lib-flexible/flexible"

import './plugins/rem.js'
import HeaderSlot from './components/HeaderSlot/HeaderSlot.vue'
import Search from './components/Search/Search.vue'
import Footer from "./components/Footer/Footer"
import router from './router'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.use(Button)

//注册全局组件
Vue.component('Footer', Footer)
Vue.component('HeaderSlot', HeaderSlot)
Vue.component('Search', Search)


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
