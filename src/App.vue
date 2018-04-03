<template>
  <div id="app">
    <header-menu/>
    <banner/>
    <footer-sheet/>
  </div>
</template>

<script>
import HeaderMenu from './components/HeaderMenu'
import Banner from './components/Banner'
import FooterSheet from './components/FooterSheet'

export default {
  name: 'App',
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
