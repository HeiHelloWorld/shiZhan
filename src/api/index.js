/* 
  包含n个接口请求函数的模块
*/

import ajax from "./ajax"

//获取首页数据的请求
export const reqHomeData = () => ajax('/homeData')

//获取分类页数据的请求
export const reqCateGoryData = () => ajax('/category')

//获取识物页顶部tab数据的请求
export const reqGetTabs = () => ajax('/api/topic/v1/find/getTabs.json')

//获取识物页总体数据的请求
export const reqGetManual = () => ajax('/api/topic/v1/find/recManual.json')