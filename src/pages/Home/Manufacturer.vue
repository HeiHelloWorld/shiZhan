<template>
  <div id="manufacturer">
    <div class="module-title">
      <div class="left">品牌制造商直供</div>
      <a href="javascript:;" class="right">更多> </a>
    </div>
    <ul class="list" v-if="manuData">
      <a 
       :style="{backgroundImage:'url('+item.picUrl+')' }"
       href="javascript:;" class="item" v-for="(item,index) in manuData" :key="index">
        <div class="ctn">
          <h4 class="title">{{item.name}}</h4>
          <div>
            <span class="price">
              <span>{{item.floorPrice}}</span>
              <span>元起</span>
            </span>
            <i class="newIcon" v-if="item.newOnShelf">上新</i>
          </div>
        </div>
      </a>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  export default {

    computed:{
      ...mapState({
        manuData: state => state.homeData.homeData.tagList
      })
    },

    mounted() {
      this.$store.dispatch('getHomeData')
    }

  }
</script>

<style lang='stylus' rel="stylesheet/stylus" scoped>
  #manufacturer
    width 100%
    height 654px
    margin-bottom 20px
    background #fff
    .module-title
      display flex
      flex-direction row
      justify-content space-between
      box-sizing border-box
      width 100%
      height 100px
      padding 0 30px
      .left
        font-size 32px
        line-height 100px
      .right
        font-size 28px
        line-height 100px
    .list
      padding 0 30px 26px 26px
      display flex
      flex-wrap wrap
      margin-bottom 20px
      background #fff
      .item
        position relative
        display inline-block
        margin 0 4px 4px 0
        width 343px
        height 260px
        background-color #eee
        background-size 100% 100%
        background-image url('http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&amp;thumbnail=343y260&amp;enlarge=1')
        .ctn
          position absolute
          left 0
          top 0
          padding-top 23px
          width 100%
          text-align center
          .title
            color #333
            font-size 28px
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
            line-height 34px
            margin-bottom 4px
          div 
            .price
              color #7f7f7f
              font-size 24px
            .newIcon
              display inline-block
              width 64px
              height 32px
              line-height 32px
              color #fff
              text-align center
              background #CBB693
              border-radius 4px
              margin-left 10px
 
</style>
