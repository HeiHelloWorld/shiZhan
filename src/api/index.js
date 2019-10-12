/* 
  包含n个接口请求函数的模块
*/

import ajax from "./ajax"

//获取首页数据的请求
export const reqHomeData = () => ajax('/homeData')

//获取分类页数据的请求
export const reqCateGoryData = () => ajax('/category')