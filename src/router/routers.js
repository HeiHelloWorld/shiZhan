/* 
  配置路由路径
*/
import Home from "../pages/Home/Home.vue"
import Category from "../pages/Category/Category.vue"
import Identify from "../pages/Identify/Identify.vue"
import ShopCart from "../pages/ShopCart/ShopCart.vue"
import Profile from "../pages/Profile/Profile.vue"

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/identify',
    component: Identify,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/',
    redirect: '/home'
  },
]