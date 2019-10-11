<template>
  <div class="identify_box">
    <div class="identify_header">
      <HeaderSlot>
        <div slot="netease" class="identify_header_title">
          <span @click="isFond=true"  :class="{active: isFond}">发现</span>
          <span @click="isFond=false" :class="{active: !isFond}">甄选家</span>
        </div>
      </HeaderSlot>
    </div>
    <div class="tabs_header_wrap">
      <TabsHeaderNav/>
    </div>

    <div class="identify_content_wrap">
      <div class="identify_content">
        <div class="identify_tab">
          <div class="identify_item">
            <img src="https://yanxuan.nosdn.127.net/9b83d46a01159e7a42d97598dc442172.jpg?imageView&quality=65&thumbnail=690y376" alt="img">
          </div>
        </div>
        <div class="identify_tab">
          <a href="javascript:;" class="identify_tab_wrap">
            <div class="identify_item_left left_two">
              <div class="identify_item_left_title">
                <span class="left_title_avatar">
                  <img src="https://yanxuan.nosdn.127.net/0f7bd95440a3b445fabe1d4923593950.png?imageView&quality=65&thumbnail=56y56" alt="avatar">
                </span>
                <span>网易员工精选</span>
              </div>
              <div class="title">今年双十一，不多花一分冤枉钱</div>
              <!-- <div class="desc">回馈金卡限量发售，买11元得33元</div> -->
              <div class="u-pic">
                <img src="https://yanxuan.nosdn.127.net/ba99757f28e54fa2882b67e35b644361.jpg?imageView&quality=65&thumbnail=690y376" alt="u-pic">
              </div>
              <div class="u-rcount">
                <i class="ico"></i>
                <span>6908人看过</span>
              </div>
            </div>
          </a>
        </div>
        <div class="identify_tab">
          <a href="javascript:;" class="identify_tab_wrap">
            <div class="identify_item_left">
              <div class="identify_item_left_title">
                <span class="left_title_avatar">
                  <img src="https://yanxuan.nosdn.127.net/0f7bd95440a3b445fabe1d4923593950.png?imageView&quality=65&thumbnail=56y56" alt="avatar">
                </span>
                <span>网易员工精选</span>
              </div>
              <div class="title">今年双十一，不多花一分冤枉钱</div>
              <div class="desc">回馈金卡限量发售，买11元得33元</div>
              <div class="u-rcount">
                <i class="ico"></i>
                <span>6908人看过</span>
              </div>
            </div>
            <div class="identify_item_right">
              <img src="https://yanxuan.nosdn.127.net/79198f7552b43e77a136d16f23e0c45b.jpg?imageView&quality=65&thumbnail=272y272" alt="img">
            </div>
          </a>
        </div>
        <div class="identify_tab">
          <a href="javascript:;" class="identify_tab_wrap">
            <div class="identify_item_left">
              <div class="identify_item_left_title">
                <span class="left_title_avatar">
                  <img src="https://yanxuan.nosdn.127.net/0f7bd95440a3b445fabe1d4923593950.png?imageView&quality=65&thumbnail=56y56" alt="avatar">
                </span>
                <span>网易员工精选</span>
              </div>
              <div class="title">今年双十一，不多花一分冤枉钱</div>
              <div class="desc">回馈金卡限量发售，买11元得33元</div>
              <div class="u-rcount">
                <i class="ico"></i>
                <span>6908人看过</span>
              </div>
            </div>
            <div class="identify_item_right">
              <img src="https://yanxuan.nosdn.127.net/79198f7552b43e77a136d16f23e0c45b.jpg?imageView&quality=65&thumbnail=272y272" alt="img">
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

    data () {
      return {
        isFond: true
      }
    }

  }
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .identify_box
    width 100%
    height 100vh
    .identify_header
      width 100%
      height 88px
      border-bottom 1px solid #D9D9D9
      .identify_header_title
        width 220px
        height 100px
        line-height 100px
        .active
          font-size 40px
          color #b4282d
    .tabs_header_wrap
      position fixed
      top 88px
      left -3px
    .identify_content_wrap
      width 100%
      height 100vh
      .identify_content
        width 100%
        padding 60px 0 100px 0
        box-sizing border-box
        background #f4f4f4
        .identify_tab
          width 100%
          background #fff
          padding 36px 30px
          margin 20px 0
          box-sizing border-box
          .identify_item
            width 690px
            height 376px
            img
              width 100%
              height 100%
        .identify_tab_wrap
          display flex
          justify-content space-between
          .identify_item_left
            display flex
            flex-direction column
            width 400px
            .identify_item_left_title
              display flex
              align-items center
              font-size 28px
              line-height 28px
              .left_title_avatar
                display inline-block
                overflow hidden
                width 56px
                height 56px
                border 1px solid #d9d9d9
                border-radius 50%
                margin-right 10px
                img
                  width 100%
                  height 100%
            .title
              width 100%
              font-size 36px
              color #333
              padding-top 32px
              text-overflow ellipsis
              overflow hidden
            .desc
              width 100%
              padding-top 8px
              font-size 28px
              color #7f7f7f
              line-height 30px
            .u-rcount
              margin-top 18px
              font-size 24px
              color #999
              line-height 24px
              .ico
                display inline-block
                width 21px
                height 15px
                vertical-align middle
                margin-right 8px
                background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==') no-repeat 0/100%
              span
                display inline-block
                vertical-align middle
          .left_two
            width 100%
            .identify_item_left_title
              display flex
              align-items center
              font-size 28px
              line-height 28px
              margin-bottom 24px
              .left_title_avatar
                display inline-block
                overflow hidden
                width 56px
                height 56px
                border 1px solid #d9d9d9
                border-radius 50%
                margin-right 10px
                img
                  width 100%
                  height 100%
            .title
              width 100%
              font-size 36px
              color #333
              margin -16px 0 16px
              text-overflow ellipsis
              overflow hidden
            .u-pic
              width 690px
              height 376px
              margin-bottom 20px
              img 
                width 100%
                height 100%
            .u-rcount
              margin 18px 0
              font-size 24px
              color #999
              line-height 24px
              .ico
                display inline-block
                width 21px
                height 15px
                vertical-align middle
                margin-right 8px
                background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==') no-repeat 0/100%
              span
                display inline-block
                vertical-align middle
          .identify_item_right
            width 272px
            height 272px
            border-radius 6px
            img
              display block
              width 100%
              height 100%
 
</style>
