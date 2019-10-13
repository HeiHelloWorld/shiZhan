<template>
  <div class="emaillogin">
    <div class="logo">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
    </div>
    <label class="input_phone">
      <input type="text" placeholder="请输入手机号">
    </label>
    <label class="input_phone phone_pwd">
      <input type="password" placeholder="请输入验证码">
      <div class="getPwd" @click="getPwd">获取验证码</div>
    </label>
    <div class="loginOther">
      <span>注册账号</span>
      <span>使用密码登录</span>
    </div>
    <div class="loginBtn">
      <van-button type="danger" @click="$router.push('/profile/phonelogin')">
        <span>登录</span>
      </van-button>
      <van-button plain hairline type="danger"  @click="$router.push('/profile')">
        <span>其他登录方式</span>
      </van-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import { Button } from 'vant'

  export default {
    methods:{
      getPwd() {
        console.log('获取验证码')
      }
    }
  }
</script>

<style lang='stylus' rel="stylesheet/stylus" scoped>
  .emaillogin
    width 100%
    .logo
      margin 102px 0 200px
      img
        display block
        margin 0 auto
        width 190px
        height 64px
    .phone_pwd
      position relative
      .getPwd
        position absolute
        right 0
        bottom 20px
        z-index 100
        width 173px
        height 56px
        line-height 56px
        text-align center
        font-size 28px
        border 1px solid #333
        border-radius 10px
    .input_phone
      display block
      width 675px
      height 90px
      margin 30px 40px
      input
        display block
        width 100%
        height 100%
        outline none
        border 0 none
        border-bottom 1px solid #bdbdbd
        font-size 30px
        line-height 45px
    .loginOther
      display flex
      justify-content space-between
      margin 0 40px 40px
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
 
</style>
