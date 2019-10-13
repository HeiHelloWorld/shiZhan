<template>
  <div class="category_box">
    <div class="cate_header">
      <div class="search_box">
        <div @click="$router.push('/search')">
          <img v-lazy="`//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png`" alt="search">
          <span>搜索商品，共23137件好物</span>
        </div>
      </div>
    </div>
    <div class="category_content">
      <div class="left_nav">
        <div class="left_nav_list" ref="left">
          <ul v-if="category">
            <li 
             :class="{active: currIndex === index}" 
              v-for="(item,index) in category.categoryL1List" 
              @click="currIndex = index" >{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="right_content_wrap">
        <div class="right_content_box" ref="right">
          <div class="right_content">
            <div class="banner">
              <swiper :options="swiperOption">
                <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
                  <img v-lazy="slide" alt="img">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <div class="cateList" v-if="category.categoryL1List">
              <div class="cateItem" v-for="(item,index) in category.categoryL1List[currIndex].subCateList">
                <img class="cateItemImg" v-lazy="item.bannerUrl"/>
                <div class="cateItemTit">{{item.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import { mapState } from 'vuex'
  import BScroll from '@better-scroll/core'

  export default {
    
    data() {
      return {

        currIndex: 0,

        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true,
          autoplay: true,
        },
        swiperSlides: ['https://yanxuan.nosdn.127.net/21eaf80574f1ce30fee388e777ccb15d.jpg?imageView&amp;quality=75&amp;thumbnail=0x196',
          'https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png?imageView&amp;quality=75&amp;thumbnail=0x196'
        ]
      }
    },

    computed: {
      ...mapState({
        category: state => state.category.category
      })
    },

    watch:{
      category(){
        console.log(this.category)

        this.$nextTick(() => {
          if(!this.bScroll){
            this.bScroll = new BScroll(this.$refs.left, {
              click: true,
              scrollY: true
            })
          }else{
            this.bScroll.refresh()
          }

          if(!this.bScroll1){
            this.bScroll1 = new BScroll(this.$refs.right, {
              click: true,
              scrollY: true
            })
          }else{
            this.bScroll1.refresh()
          }

        })

      }
    },

    mounted() {

      this.$store.dispatch('getCateGoryData')

      setInterval(() => {
        if (this.swiperSlides.length < 2) {
          this.swiperSlides.push(this.swiperSlides.length + 1)
        }
      }, 3000)

      // this.$nextTick(() => {
      //   if(!this.bScroll){
      //     this.bScroll = new BScroll(this.$refs.left, {
      //       click: true,
      //       scrollY: true
      //     })
      //   }else{
      //     this.bScroll.refresh()
      //   }

      //   if(!this.bScroll1){
      //     this.bScroll1 = new BScroll(this.$refs.right, {
      //       click: true,
      //       scrollY: true
      //     })
      //   }else{
      //     this.bScroll1.refresh()
      //   }
      // })

    },


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
    .category_content
      position relative
      width 100%
      height 1145px
      margin-bottom 100px
      overflow hidden
      font-size 28px
      .left_nav
        position absolute
        left 0
        top 0
        padding 20px 0
        .left_nav_list
          height 1000px
          >ul
            width 162px
            .active
              border-left 6px solid #B4282D
              color #B4282D
            >li
              width 160px
              height 50px
              line-height 50px
              text-align center
              margin 30px 0
              font-size 28px
              color #7e8c8d
              border-left 6px solid #fff
              box-sizing border-box
      .right_content_wrap
        margin-left 162px
        padding 30px 30px 240px
        height 100%
        box-sizing border-box
        .right_content_box
          height 800px
          .right_content
            width 100%
            .banner
              width 528px
              height 192px
              margin-bottom 32px
              .swiper-container
                width 100%
                height 100%
                .swiper-wrapper
                  width 100%
                  height 100%
                  .swiper-slide
                    width 100%
                    height 100%
                    img
                      width 100%
                      height 100%
          .cateList
            width 528px
            .cateItem
              display inline-block
              width 144px
              height 216px
              margin-right 30px
              .cateItemImg
                display inline-block
                width 144px
                height 144px
              .cateItemTit
                height 72px
                line-height 36px
                text-align center
                font-size 24px
</style>
