<template>
  <div class="category_box">
    <div class="cate_header">
      <div class="search_box">
        <div @click="$router.push('/search')">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png" alt="search">
          <span>搜索商品，共23137件好物</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .category_box
    width 100%
    padding-top 88px
    .cate_header
      position fixed
      top 0
      left 0
      z-index 100
      width 100%
      height 88px
      border-bottom 1px solid #eee
      background-color: #fff
      display flex
      align-items center
      justify-content center
      .search_box
        width 675px
        height 56px
        border-radius 8px
        background-color: #ededed
        display flex
        align-items center
        justify-content center
        >div
          display flex
          align-items center
          >img
            width 28px
            height 28px
            margin-right 10px
          >span
            color #666
            font-size 28px
</style>
