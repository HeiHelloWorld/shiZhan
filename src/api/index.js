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

//获取搜索页面的默认数据
export const reqGetInit = () => ajax({
  method: 'POST',
  url: '/api/xhr/search/init.json'
})

//发送通过 关键字搜索 的请求
export const reqInitSearch = ({
    keywordPrefix
  }) => ajax({
  method: 'POST',
  url: '/api/xhr/search/searchAutoComplete.json',
  data: {
     keywordPrefix
  }
})