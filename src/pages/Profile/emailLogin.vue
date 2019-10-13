<template>
  <div class="emaillogin">
    <div class="logo">
      <img v-lazy="`http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png`" alt="logo">
    </div>

    <label class="input_email">
      <input type="text" v-model="user.email" placeholder="请输入e-mail">
      <p class="email_tips">{{email_tips}}</p>
    </label>

    <label class="input_email">
      <input type="password" v-model="user.pwd" placeholder="请输入密码">
      <p class="pwd_tips">{{pwd_tips}}</p>
    </label>

    <div class="loginOther">
      <span>注册账号</span>
      <span>忘记密码</span>
    </div>
    <div class="loginBtn">
      <van-button type="danger">
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
    data() {
      return {
        user: {
          email: '',
          pwd: ''
        },
        email_tips: '',
        pwd_tips: ''
      }
    },

    watch: {
      user: {
        deep: true,
        handler (user) {
          if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(user.email)) {
            this.email_tips = ''
          } else {
            this.email_tips = '请输入正确的邮箱'
          }
          if (/^[A-Za-z0-9_]{6,20}$/.test(user.pwd)) {
            this.pwd_tips = ''
          } else {
            this.pwd_tips = '密码只能包含6~12位字母或数字'
          }
        }
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
    .input_email
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
      p
        height 40px
        font-size 12px
        color red
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
