/* 
  路由器 
*/
import Vue  from "vue"
import VueRouter from "vue-router"

import routes from "./routers"

//声明使用
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes
})