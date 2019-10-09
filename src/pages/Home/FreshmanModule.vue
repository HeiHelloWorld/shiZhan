<template>
  <div id="fresh-man-module">
    <div class="module-title">
      <span class="module-title-txt">— 新人专享礼 —</span>
    </div>
    <div class="content">
      <a href="javascript:;" class="left">
        <div class="name">新人专享礼包</div>
        <div class="imgWrap">
          <div class="freshImg">
            <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="img">
          </div>
        </div>
      </a>
      <div class="right">
        <div class="module1">
          <a href="javascript:;" class="activityItem">
            <div class="picWrap">
              <img src="https://yanxuan-item.nosdn.127.net/9032e04ee24f14607f2a8b5635ebcd95.png?imageView&amp;thumbnail=200x200&amp;quality=75" alt="img">
              <div class="discount">
                <div class="line1">￥45</div>
                <div class="line2">￥49.9</div>
              </div>
            </div>
            <div class="ctn">
              <span class="title">福利社</span>
              <span class="subTitle">今日特价</span>
            </div>
          </a>
        </div>
        <div class="module1">
          <a href="javascript:;" class="activityItem">
            <div class="picWrap">
              <img src="https://yanxuan-item.nosdn.127.net/6a9e0335e23c3a2556e0536494d048c8.png?imageView&amp;thumbnail=200x200&amp;quality=75" alt="img">
              <div class="discount">
                <div class="line1">￥1</div>
                <div class="line2">￥9.9</div>
              </div>
            </div>
            <div class="ctn">
              <span class="title">新人拼团</span>
              <span class="subTitle baoyou">1元起包邮</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang='stylus' rel="stylesheet/stylus" scoped>
  #fresh-man-module
    width 100%
    background #fff
    margin 20px 0
    padding-bottom 30px
    .module-title
      width 100%
      height 90px
      line-height 90px
      text-align center
      font-size 32px
      padding 0 30px
      box-sizing border-box
      .module-title-txt
        display inline-block
    .content
      width 100%
      display flex
      justify-content center
      .left
        display block
        width 343px
        height 434px
        background #F9E9CF
        .name
          width 100%
          height 78px
          font-size 32px
          color #333
          box-sizing border-box
          padding 30px 0 0 30px
        .imgWrap
          margin 37px auto
          .freshImg
            margin auto 37px
      .right
        margin-left 4px
        .module1
          background #FBE2D3
          border-radius 4px
          width 343px
          height 215px
          margin-bottom 4px
          .activityItem
            position relative
            display block
            padding 20px 0 0 30px
            .picWrap
              position absolute
              right 0
              width 200px
              height 200px
              img
                display inline
              .discount
                position absolute
                top 0
                right 30px
                width 80px
                height 80px
                background #F59524
                border-radius 50%
                padding-top 10px
                box-sizing border-box
                color #fff
                text-align center
                opacity .8
                .line1
                  font-size 24px
                .line2
                  font-size 20px
                  margin-top 7px
                  text-decoration line-through
            .ctn
              span
                display block
              .title
                font-size 32px
                height 48px
                color #333
              .subTitle
                height 36px
                color #7f7f7f
              .baoyou
                display inline-block
                height 32px
                line-height 32px
                font-size 22px
                text-align center
                padding 0 10px
                box-sizing border-box
                color #fff
                border-radius 4px
                background #CBB693

</style>
