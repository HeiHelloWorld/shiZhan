<template>
  <div class="search">
    <div class="searchBox">
      <div class="cate_header">
        <div class="search_box">
          <div @click="$router.push('/search')">
            <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png" alt="search">
            <span>早秋换季穿搭</span>
          </div>
        </div>
        <span @click="$router.go(-1)">取消</span>
      </div>
      <div class="search_views">
        <div class="search_views_header">
          <h3 class="tit">热门搜索</h3>
        </div>
        <nav class="list">
          <a href="javascript:;" class="item">早秋服饰</a>
          <a href="javascript:;" class="item">免洗面膜仅49.9</a>
          <a href="javascript:;" class="item">超薄纸尿裤</a>
          <a href="javascript:;" class="item">咖啡碳保暖套装</a>
          <a href="javascript:;" class="item">金秋大闸蟹</a>
          <a href="javascript:;" class="item">独墅湖</a>
          <a href="javascript:;" class="item">独墅湖</a>
          <a href="javascript:;" class="item">独墅湖</a>
          <a href="javascript:;" class="item">独墅湖</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang='stylus' rel="stylesheet/stylus" scoped>
.search
  height 100vh
  background #eee
  .searchBox
    background #fff
    height 444px
    .cate_header
      width 100%
      height 88px
      background-color: #fff
      display flex
      align-items center
      justify-content center
      span
        font-size 26px
        margin-left 30px
      .search_box
        width 605px
        height 56px
        border-radius 8px
        background-color: #ededed
        padding 0 15px
        box-sizing border-box
        display flex
        align-items center
        justify-content left 
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
    .search_views
      padding 0 30px
      .search_views_header
        width 100%
        height 90px
        line-height 90px
        color #999
      .list
        margin-right -30px
        margin-bottom 32px
        overflow hidden
        .item
          float left 
          padding 0 15px
          margin 0 32px 32px 0
          line-height 46px
          border 1px solid #999
          border-radius 4px
          color #333
 
</style>
