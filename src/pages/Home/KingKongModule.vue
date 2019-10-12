<template>
  <div class="swiper-container">
    <div class="kingkong" v-if="homeArr.kingKongModule">
      <a class="kingkong-item" href="javascript:;" v-for="(item,index) in homeArr.kingKongModule.kingKongList" :key="index">
        <div class="kingkong-item-img">
          <img :src="item.picUrl" alt="img">
        </div>
        <div class="kingkong-item-txt">{{item.text}}</div>
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import { mapState } from 'vuex'

  export default {
  
    computed:{
      ...mapState({
        homeArr:state=>state.homeData.homeData
      })
    },
    watch:{
       homeArr(){
         //console.log("----")
         //console.log(this.homeArr)
       }
    }

  }
</script>

<style lang='stylus' rel="stylesheet/stylus" scoped>
  .swiper-container
    width 100%
    padding-bottom 32px
    background #fff
    .kingkong
      width 100%
      height 341px
      background #fff
      .kingkong-item
        display inline-block
        margin 10px 20px
        .kingkong-item-img
          img
            display block
            width 110px
            height 110px
        .kingkong-item-txt
          margin-top 10px
          text-align center
          font-size 24px
          color #333
          line-height 36px
          white-space nowrap
 
</style>
