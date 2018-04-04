<template>
  <div id="app">
    <header-menu/>
    <banner/>
    <footer-sheet/>

    <!--<router-view/>-->
  </div>
</template>

<script>
import HeaderMenu from '../../components/index/HeaderMenu'
import Banner from '../../components/index/Banner'
import FooterSheet from '../../components/index/FooterSheet'

export default {
  name: 'index',
  components: {// 在父组件中注册
    'header-menu': HeaderMenu,
    'banner': Banner,
    'footer-sheet': FooterSheet
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  color: #34495e;
}
</style>
