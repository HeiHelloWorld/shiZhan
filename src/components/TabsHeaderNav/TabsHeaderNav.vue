<template>
  <div class="tabs-header">
    <div class="inner">
      <div class="list">
        <div class="tab active">
          <span class="txt">
            推荐
          </span>
        </div>
        <div class="tab">
          <span class="txt">
            居家生活
          </span>
        </div>
        <div class="tab">
          <span class="txt">
            服饰鞋包
          </span>
        </div>
        <div class="tab">
          <span class="txt">
            美食酒水
          </span>
        </div>
        <div class="tab">
          <span class="txt">
            个护清洁
          </span>
        </div>
        <div class="tab">
          <span class="txt">
            母婴亲子
          </span>
        </div>
        <div class="tab">
          <span class="txt">
            运动旅行
          </span>
        </div>
        <div class="tab">
          <span class="txt">
            数码家电
          </span>
        </div>
        <div class="tab">
          <span class="txt">
            全球特色
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import BScroll from '@better-scroll/core'

  export default {

    mounted () {

      this.$nextTick(() => {
        if(!this.bScroll){
          this.bScroll = new BScroll(".inner", {
            click: true,
            scrollX: true
          })
        }else{
          this.bScroll.refresh()
        }

      })

    }

  }
</script>

<style lang='stylus' rel="stylesheet/stylus" scoped>
  .tabs-header
      display flex
      flex-flow row nowrap
      background #fff
      .inner
        display flex
        flex-flow row nowrap
        height 100%
        width 100%
        overflow hidden
        .list
          display flex
          flex-shrink 0
          padding 0 30px
          background #fff
          overflow hidden
          .active
              border-bottom 3px solid #b4282d
          .tab
            box-sizing border-box
            margin-left 20px
            &:first-of-type
              margin-left 0
            .txt
              display inline-block
              padding 0 16px
              line-height 60px
              font-size 28px
              color #333
              text-align center
 
</style>
