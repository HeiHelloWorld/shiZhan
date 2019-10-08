<template>
  <div id="home">
    <div class="headerWrap">
      <div class="header">
        <div class="download"></div>
        <div class="homeHeader">
          <div class="homeHeader-top">
            <a class="logo" href="javascript:;"></a>
            <div class="homeTopSearchIpt ipt">
              <i class="icon"></i>
              <span class="placeholder">搜索商品，共23137款好物</span>
            </div>
            <div class="loginBtn">登录</div>
          </div>
          <div class="homeHeader-bottom">
            <div class="tabs">
              <div class="tabs-header">
                <div class="inner">
                  <div class="list">
                    <div class="tab">
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
            </div>
            <div class="toggleWrap">
              <div class="linear"></div>
              <div class="toggle">
                <div class="icon"></div>
              </div>
            </div>
          </div>
          <div class="mask"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

    data () {
      return {
        isShowList: false
      }
    },

    methods: {

      

    }

  }
</script>

<style lang='stylus' rel="stylesheet/stylus">
  #home
    width 100%
    .headerWrap
      height 148px
      .header
        position fixed !important
        left 0
        top 0
        z-index 10
        width 100%
        .download
          display none
        .homeHeader
          background #fff
          border-bottom 1px solid #d9d9d9
          .homeHeader-top
            display flex
            justify-content space-between
            align-items center
            padding 16px 30px
            .logo
              display inline-block
              background-size cover
              width 138px
              height 40px
              background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png')
              margin-right 16px
            .ipt
              flex-grow 1
            .homeTopSearchIpt
              display flex
              justify-content center
              align-items center
              height 56px
              background #ededed
              border-radius 8px
              font-size 28px
              .icon
                display inline-block
                vertical-align middle
                background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png')
                background-repeat no-repeat
                background-size 100% 100%
                width 28px
                height 28px
                margin-right 10px
              .placeholder
                color #666
            .loginBtn
              width 74px
              height 40px
              line-height 40px
              text-align center
              color #b4282d
              border 1px solid #b4282d
              border-radius 8px
              font-size 24px
              margin-left 16px
          .homeHeader-bottom
            position relative
            margin-top -1px
            background #fff
            .tabs
              padding-right 100px
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
                    .tab
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
            .toggleWrap
              display flex
              flex-grow 0
              align-items center
              justify-content center
              position absolute
              top 0
              right 0
              .linear
                width 60px
                height 60px
                background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
              .toggle
                width 100px
                height 60px
                text-align center
                background #fff
                .icon
                  margin-top 15px
                  display inline-block
                  vertical-align middle
                  background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png')
                  background-repeat no-repeat
                  background-size 100% 100%
                  width 30px
                  height 30px
                  transition transform .5s

</style>
