<template>
  <div class="profile_box">
    <div class="headerWrap">
      <HeaderSlot>
        <div slot="netease">
          <span class="netease">网易严选</span>
        </div>
      </HeaderSlot>
    </div>
    <div class="loginTypeWrap" v-if="$route.path === '/profile'">
      <div class="loginTypes">
        <div class="cont">
          <div class="loginLogo">
            <img v-lazy="`//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png`" alt="logo">
          </div>
          <div class="loginBtn">
            <van-button type="danger" @click="$router.push('/profile/phonelogin')">
              <i class="iconfont icon-shouji"></i>
              <span>手机号码快捷登录</span>
            </van-button>
            <van-button plain hairline type="danger"  @click="$router.push('/profile/emaillogin')">
              <i class="iconfont icon-youxiang"></i>
              <span>邮箱帐号登录</span>
            </van-button>
          </div>
        </div>
        <ul class="thirdWrap">
          <li><a href="javascript:">
            <i class="iconfont icon-weixin"></i>
            <span>微信</span>
          </a></li>
          <li>|</li>
          <li><a href="javascript:">
            <i class="iconfont icon-qq"></i>
            <span>QQ</span>
          </a></li>
          <li>|</li>
          <li><a href="javascript:">
            <i class="iconfont icon-weibo"></i>
            <span>微博</span>
          </a></li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">

  import { Button } from 'vant'
  export default {
  }
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .profile_box
    height 100vh
    background #fff
    .headerWrap
      height 88px
    .loginTypeWrap
      .loginTypes
        .cont
          .loginLogo
            text-align center
            padding-top 160px
            padding-bottom 232px
            img
              display inline-block
              width 268px
              height 90px
          .loginBtn
            width 100%
            height 220px
            padding 0 40px
            margin-bottom 205px
            box-sizing border-box
            button
              display block
              font-size 28px
              width 100%
              height 96px
              margin-bottom 32px
              .iconfont
                margin-right 16px
        .thirdWrap
          margin 385px 0 100px 0
          display flex
          justify-content center
          >li
            float left
            font-size 30px
            >a
              font-size 30px
              color #7f7f7f
              display flex
              align-items center
              >i
                font-size 36px
                margin 0 20px 0 40px
              >span
                margin-right 30px
 
</style>
