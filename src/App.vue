<template>
  <div id="app">
    <router-view/>
    <Footer v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>

  import Footer from "./components/Footer/Footer"

  export default {
    name: 'App',
    components: {
      Footer,
    }
  }
</script>

<style lang='stylus' rel="stylesheet/stylus">
  
</style>
