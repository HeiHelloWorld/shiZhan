<template>
  <div id="home">
    <div class="headerWrap">
      <div class="header">
        <div class="download"></div>
        <div class="homeHeader">
          <div class="homeHeader-top">
            <a class="logo" href="javascript:;"></a>
            <div class="homeTopSearchIpt ipt" @click="$router.push('/search')">
              <i class="icon"></i>
              <span class="placeholder">搜索商品，共23137款好物</span>
            </div>
            <div class="loginBtn" @click="$router.push('/profile')">登录</div>
          </div>
          <div class="homeHeader-bottom">
            <div class="tabs" v-if="isShowList">
              <TabsHeaderNav/>
            </div>
            <div class="tabAlter" v-else>全部频道</div>
            <div class="toggleWrap">
              <div class="linear"></div>
              <div class="toggle" @click="toggleShow">
                <div class="icon" :class="{toggleRotate: !isShowList}"></div>
              </div>
            </div>
            <div class="moreCate" v-if="!isShowList">
              <div class="cateTag activity">推荐</div>
              <div class="cateTag">居家生活</div>
              <div class="cateTag">服饰鞋包</div>
              <div class="cateTag">美食酒水</div>
              <div class="cateTag">个护清洁</div>
              <div class="cateTag">母婴亲子</div>
              <div class="cateTag">运动旅行</div>
              <div class="cateTag">数码家电</div>
              <div class="cateTag">全球特色</div>
            </div>
          </div>
          <div class="mask"></div>
        </div>
      </div>
    </div>
    <HomeSwiper/>
    <div class="servicePolicy">
      <span class="service-item">
        <span class="item-icon">
          <i></i>
        </span>
        <span class="txt">网易自营品牌</span>
      </span>
      <span class="service-item">
        <span class="item-icon">
          <i></i>
        </span>
        <span class="txt">30天无忧退货</span>
      </span>
      <span class="service-item">
        <span class="item-icon">
          <i></i>
        </span>
        <span class="txt">48小时快速退款</span>
      </span>
    </div>
    <KingKongModule/>
    <FreshmanModule/>
    <Manufacturer/>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from "@better-scroll/core"

  import HomeSwiper from "./homeSwiper"
  import KingKongModule from "./KingKongModule"
  import FreshmanModule from "./FreshmanModule"
  import Manufacturer from './Manufacturer'

  export default {

    data () {
      return {
        isShowList: true
      }
    },

    mounted () {
      this.$store.dispatch('getHomeData')

    },

    components: {
      HomeSwiper,
      KingKongModule,
      FreshmanModule,
      Manufacturer
    },

    methods: {

      toggleShow () {
        console.log("toggleShow()......")
        this.isShowList = !this.isShowList
      }

    }

  }
</script>

<style lang='stylus' rel="stylesheet/stylus">
  #home
    width 100%
    max-height 99999px
    background #eee
    margin-bottom 100px
    .headerWrap
      height 148px
      .header
        position fixed !important
        z-index 10
        left 0
        top 0
        width 100%
        .download
          display none
        .homeHeader
          position relative
          background #fff
          border-bottom 1px solid #d9d9d9
          .homeHeader-top
            position relative
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
              height 60px
              box-sizing border-box
              
            .tabAlter
              position relative
              height 60px
              line-height 60px
              padding-left 30px
              font-size 28px
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
                .toggleRotate
                  transform: rotate(180deg)
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
            .moreCate
              padding-top 24px
              position relative
              z-index 5
              overflow hidden
              .cateTag
                width 150px
                height 56px
                line-height 56px
                text-align center
                float left
                margin-bottom 40px
                margin-left 30px
                background #fafafa
                border 1px solid #ccc
                border-radius 4px
              .activity
                color #b4282d
                border 1px solid #b4282d
          // .mask
          //   position fixed
          //   z-index 1
          //   background rgba(0,0,0,.5)
          //   top 0
          //   right 0
          //   bottom 0
          //   left 0
    .servicePolicy
      display flex
      justify-content space-between
      align-items center
      width 100%
      height 72px
      padding 0 30px
      box-sizing border-box
      background #fff
      .service-item
        .item-icon
          i
            display inline-block
            width 32px
            height 32px
            vertical-align middle
            background-size 32px 32px
            background-image url('https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png')
        &:nth-of-type(1)
          i
            background-image url('https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png')
        &:nth-of-type(2)
          i
            background-image url('https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png')
        .txt
          display inline-block
          font-size 24px
          color #333
          margin-left 8px
          line-height 32px
          vertical-align middle

</style>
