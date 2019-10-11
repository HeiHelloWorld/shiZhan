/* 
  封装ajax的模块
*/
import axios from "axios"
import qs from "qs"

//创建一个新的Axios实例
const instance = axios.create({
  timeout: 10000
})

//添加请求拦截器,处理post请求参数(从对象转为urlencoding)
instance.interceptors.request.use( config => {
  //如果是post请求
  if (config.method.toUpperCase() === 'POST' && config.data instanceof Object) {
    config.data = qs.stringify(config.data)
  }
  return config

})

//添加响应拦截器
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    //返回一个pending状态的promise
    return new Promise(() => {})
  }
)

export default instance