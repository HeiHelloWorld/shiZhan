<template>
  <swiper :options="swiperOption" class="swiperWrap">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"><img v-lazy="slide" alt="img" style="width:100%;height:100%"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script type="text/ecmascript-6">

  export default {

    name: 'homeSwiper',

    data() {
      return {
        swiperOption: {
          autoplay:true,
          loop:true,
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: ['https://yanxuan.nosdn.127.net/766890ad54020808e824982e2751b717.jpg?imageView&amp;quality=75&amp;thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/1cdfc1b7ef19d9398c6a9c7b55683ba5.jpg?imageView&amp;quality=75&amp;thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/be2e77d1e49b5540f86926d48f289ff9.jpg?imageView&amp;quality=75&amp;thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/00750aeb1b0e5b1d53ec9a27e49da8d9.jpg?imageView&amp;quality=75&amp;thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/84cbd804f3a2bdcf862b0ed06dc73dcd.jpg?imageView&amp;quality=75&amp;thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/8d2af3ab55bf51d5ac03e5d9c6fa1fc4.jpg?imageView&amp;quality=75&amp;thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/3cf97a99f8017e3bb0d22fdff2c283b0.jpg?imageView&amp;quality=75&amp;thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/eeba2f980879bb109cd752979c77ef7b.jpg?imageView&amp;quality=75&amp;thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/a9827ac1ad9c54b31cda1debf38c3414.jpg?imageView&amp;quality=75&amp;thumbnail=750x0'
        ]
      }
    }

  }
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .swiperWrap
    width 100%
    height 370px
 
</style>
