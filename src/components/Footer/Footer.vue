<template>
  <footer class="footer">
    <span class="footer-item" @click="goto('/home')">
      <span class="item-icon">
        <i :class="{active:$route.path === '/home'}"></i>
      </span>
      <span class="txt" :class="this.$route.path === '/home' ? 'on' : ''">首页</span>
    </span>
    <span class="footer-item" @click="goto('/category')">
      <span class="item-icon">
        <i :class="{active:$route.path === '/category'}"></i>
      </span>
      <span class="txt" :class="this.$route.path === '/category' ? 'on' : ''">分类</span>
    </span>
    <span class="footer-item" @click="goto('/identify')">
      <span class="item-icon">
        <i :class="{active:$route.path === '/identify'}"></i>
      </span>
      <span class="txt" :class="this.$route.path === '/identify' ? 'on' : ''">识物</span>
    </span>
    <span class="footer-item" @click="goto('/shopcart')">
      <span class="item-icon">
        <i :class="{active:$route.path === '/shopcart'}"></i>
      </span>
      <span class="txt" :class="this.$route.path === '/shopcart' ? 'on' : ''">购物车</span>
    </span>
    <span class="footer-item" @click="goto('/profile')">
      <span class="item-icon">
        <i :class="{active:$route.path === '/profile'}"></i>
      </span>
      <span class="txt" :class="this.$route.path === '/profile' ? 'on' : ''">个人</span>
    </span>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Footer',

    methods:{
      goto (path) {
        if(this.$route.path !== path) {
          this.$router.replace(path)
        } else {
          window.location.reload()
        }
      }
    }

  }
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .footer
    position fixed
    z-index 5
    left 0
    right 0
    bottom 0
    display flex
    justify-content space-around
    width 100%
    height 98px
    background #fff
    border-top 1px solid #d9d9d9
    .footer-item
      color #b4282d
      display flex
      flex-direction column
      justify-content center
      text-align center
      .item-icon
        i
          display inline-block
          width 40px
          height 40px
          vertical-align middle
          background-size 40px 490px
          background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png')
          background-repeat no-repeat
          background-position -2px -252px
          &.active
            background-position 0 -202px
      &:nth-of-type(2)
        i
          background-position -2px -152px
          &.active
            background-position -2px -102px
      &:nth-of-type(3)
        i
          background-position -2px -352px
          &.active
            background-position 0 -300px
      &:nth-of-type(4)
        i
          background-position 0 -52px
          &.active
            background-position 0 -2px
      &:nth-of-type(5)
        i
          background-position -2px -452px
          &.active
            background-position -2px -402px
      .txt
        display block
        font-size 24px
        line-height 1
        margin-top 7px
        color #666
      .on
        color #b4282d

</style>
