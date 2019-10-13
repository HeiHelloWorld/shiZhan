<template>
  <div class="search">
    <div class="searchBox">
      <div class="cate_header">
        <div class="search_box">
          <div v-if="init.defaultKeyword">
            <img v-lazy="`//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png`" alt="search">
            <input type="text" @keyup="toSearch" v-model="searchKey" :placeholder="init.defaultKeyword.keyword"></input>
          </div>
          <span @click="searchKey=''" v-show="searchKey">X</span>
        </div>
        <span @click="$router.go(-1)">取消</span>
      </div>
      <div class="resultShow" v-if="searchKey">
        <ul>
          <li v-for="(keyWord, index) in searchArr" :key="index">
            <a href="javascript:">
              {{keyWord}}
            </a>
          </li>
        </ul>
      </div>
      <div class="search_views" v-else>
        <div class="search_views_header">
          <h3 class="tit">热门搜索</h3>
        </div>
        <nav class="list" v-if="init">
          <a href="javascript:;" class="item" 
           v-for="(item,index) in init.hotKeywordVOList" 
           :class="{active: item.highlight === 1}"
            >{{item.keyword}}</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'

  export default {

    data() {
      return {
        init: {},
        searchKey: '',
        searchArr:[]
      }
      
    },

    async mounted() {
      const result = await this.$api.reqGetInit()
      this.init = result.data
      console.log(this.init)
    },
    methods:{
      async toSearch(){
        const keywordPrefix=this.searchKey
        const result=await this.$api.reqInitSearch({keywordPrefix})
        //console.log(result)
        this.searchArr=result.data
        console.log(this.searchArr)
      }
    },

    computed: {
    //   ...mapState({
    //     searchArr: state => state
    //   })
     },

    watch: {
      
    }

  }
</script>

<style lang='stylus' rel="stylesheet/stylus" scoped>
.search
  height 100vh
  background #eee
  .searchBox
    position relative
    background #fff
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
        position relative
        width 605px
        height 56px
        border-radius 8px
        background-color #ededed
        padding 0 15px
        box-sizing border-box
        display flex
        align-items center
        justify-content left 
        >span
          position absolute
          right 30px
        >div
          display flex
          align-items center
          >img
            width 28px
            height 28px
            margin-right 10px
          >input
            display block
            width 500px
            height 100%
            color #666
            border none
            font-size 28px
            background-color #ededed
    .resultShow
      position absolute
      left 0
      bottom 0
      z-index 1
      width 100%
      min-height 1258px
      box-sizing border-box
      transform translate(0 ,100%)
      background-color #f4f4f4
      >ul
        width 100%
        padding 0 30px
        box-sizing border-box
        background-color #fff
        >li
          width 100%
          height 90px
          border-bottom  1px solid #eee
          font-size 28px
          line-height 120px
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
          &.active
            border 1px solid #b4282d
            color #b4282d
 
</style>
