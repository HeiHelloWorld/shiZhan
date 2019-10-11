import Mock from 'mockjs'
import category from './category.json'
import categoryList from './categoryList.json'
import homeData from './homeData.json'

//自定义接口
Mock.mock('/category', {
  code: 0,
  data: category
})
Mock.mock('/categoryList', {
  code: 0,
  data: categoryList
})
Mock.mock('/homeData', {
  code: 0,
  data: homeData
})