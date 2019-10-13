// module.exports = {
//   chainWebpack: config => {
//     config.module
//       .rule('css')
//         .test(/\.css$/)
//         .oneOf('vue')
//         .resourceQuery(/\?vue/)
//         .use('px2rem')
//           .loader('px2rem-loader')
//           .options({
//             remUnit: 75
//           })
//   }
// }

module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 75, // 新版本的是这个值
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
          }),
        ]
      }
    }
  },
  devServer:{
    host: '0.0.0.0',
    port: 8080,
    open: true,
    proxy: {
      '/api': { // 匹配所有以 '/api'开头的请求路径
        target: 'http://m.you.163.com', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
          '^/api': ''
        }
      },
    }
  }
}