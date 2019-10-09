import Vue from 'vue'
import App from './App.vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

import  "lib-flexible/flexible"

import './plugins/rem.js'
import Footer from "./components/Footer/Footer"
import router from './router'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, /* { default global options } */ )

//注册全局组件
Vue.component('Footer',Footer)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
