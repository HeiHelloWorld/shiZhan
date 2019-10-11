import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'

import { Button } from "vant"

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

import  "lib-flexible/flexible"

import './plugins/rem.js'
import './mock/mockServe.js'

import HeaderSlot from './components/HeaderSlot/HeaderSlot.vue'
import TabsHeaderNav from "./components/TabsHeaderNav/TabsHeaderNav.vue"
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
Vue.component('TabsHeaderNav', TabsHeaderNav)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
