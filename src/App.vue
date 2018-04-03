<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->

    <header-menu></header-menu>
  </div>
</template>

<script>
import HeaderMenu from './components/HeaderMenu'

export default {
  name: 'App',
  components: {// 在父组件中注册
    'header-menu': HeaderMenu
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
}
</style>
