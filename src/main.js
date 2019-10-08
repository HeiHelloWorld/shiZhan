import Vue from 'vue'
import App from './App.vue'

import  "lib-flexible/flexible"

import './plugins/rem.js'
import Footer from "./components/Footer/Footer"
import router from './router'

Vue.config.productionTip = false

//注册全局组件
Vue.component('Footer',Footer)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
