<template>
  <div class="shop_car_box">
    <div class="shop_car_header_wrap">
      <div class="shop_car_header">
        <div class="txt">购物车</div>
        <div class="lingquan">领券</div>
      </div>
    </div>
    <div class="servicePolicy_wrap">
      <div class="servicePolicy">
        <div class="servicePolicy_txt">
          <i class="u-icon">o</i>
          <span>30天无忧退货</span>
        </div>
        <div class="servicePolicy_txt">
          <i class="u-icon">o</i>
          <span>48小时极速退款</span>
        </div>
        <div class="servicePolicy_txt">
          <i class="u-icon">o</i>
          <span>满88元免邮费</span>
        </div>
      </div>
    </div>
    <div class="shop_car_defaultPage_wrap">
      <div class="shop_car_defaultPage">
        <div class="defaultImg"></div>
        <div class="defaultTxt">
          <span class="noCart-title">去添加点什么吧</span>
          <van-button class="noCart-btn" type="danger" @click="$router.push('/profile')">
            <span>登录</span>
          </van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Button } from 'vant'
  export default {
  }
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .shop_car_box
    position relative
    width 100%
    height 100vh
    background #f4f4f4
    .shop_car_header_wrap
      padding 0 30px
      background #fff
      .shop_car_header
        display flex
        justify-content space-between
        align-items center
        width 100%
        height 88px
        .txt
          font-size 36px
        .lingquan
          margin-right 30px
          font-size 30px
          color #b4282d
    .servicePolicy_wrap
      height 70px
      line-height 70px
      padding 0 30px
      background #eee
      .servicePolicy
        display flex
        justify-content space-between
        align-items center
        .servicePolicy_txt
          display flex
          align-items center
          font-size 24px
          color #666
          .u-icon
            position relative
            top -1px
            margin-right 5px
    .shop_car_defaultPage_wrap
      position absolute
      left 0
      bottom 0 
      top 0
      right 0
      .shop_car_defaultPage
        width 100%
        height 100%
        .defaultImg
          position absolute
          left 50%
          top 50%
          transform translate(-50%,-50%)
          display inline-block
          vertical-align middle
          width 248px
          height 248px
          background-size 100% 100%
          background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png')
        .defaultTxt
          display flex
          flex-direction column
          align-items center
          position absolute
          left 50%
          bottom 23%
          transform translate(-50%,-50%)
          .noCart-title
            margin-bottom 40px
            color #999
          .noCart-btn
            width 480px
            height 95px
            font-size 30px
  
</style>
