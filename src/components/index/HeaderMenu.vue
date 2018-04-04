<template>
  <!--只能包含一个子元素-->
  <div id="header">
    <a href="#" id="logo">
      <span>Vue.js</span>
    </a>
    <ul id="nav">
      <li>
        <form id="search-form">
          <span class="algolia-autocomplete">
            <input type="text" id="search-query-nav" class="search-query">
          </span>
        </form>
      </li>
      <li>
        <a class="nav-link">学习</a>
        <span class="arrow"></span>
      </li>
      <li class="nav-dropdown-container ecosystem">
        <a class="nav-link">生态系统</a>
        <span class="arrow"></span>
      </li>
      <li>
        <a href="#" class="nav-link team">团队</a>
      </li>
      <li class="nav-dropdown-container support-vue">
        <a href="#" class="nav-link">支持 Vue</a>
        <span class="arrow"></span>
      </li>
      <li class="nav-dropdown-container language">
        <a class="nav-link">多语言</a>
        <span class="arrow"></span>
      </li>
      <li>
        <a href="#" target="_blank" class="nav-link contribute">参与翻译</a>
      </li>
    </ul>
  </div>
</template>

<script>
// 声明一个组件
export default {
  name: 'header-menu'
}
</script>

<style scoped>
  @import "../../assets/css/fonts.css";

  body {
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-size: 15px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #34495e;
    background-color: #fff;
    margin: 0;
  }

  #header {
    background-color: #fff;
    height: 40px;
    padding: 10px 60px;
    position: relative;
    z-index: 100;
  }

  #logo {
    display: inline-block;
    font-size: 1.5em;
    line-height: 40px;
    color: #2c3e50;
    font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #34495e;
  }

  #logo span {
    font-size: 1.2em;
  }

  #nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: absolute;
    right: 30px;
    top: 10px;
    height: 40px;
    line-height: 40px;
  }

  #nav li {
    display: inline-block;
    position: relative;
    margin: 0 0.6em;
  }

  .algolia-autocomplete {
    line-height: normal;
  }

  .search-query {
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    padding: 0 15px 0 30px;
    border: 1px solid #e3e3e3;
    color: #2c3e50;
    outline: none;
    border-radius: 15px;
    margin-right: 10px;
    transition: border-color 0.2s ease;
    background: #fff url(../../assets/images/search.png) 8px 5px no-repeat;
    background-size: 20px;
    vertical-align: middle !important;
  }

  #nav .nav-link {
    cursor: pointer;
  }

  .nav-link {
    padding-bottom: 3px;
    white-space: nowrap;
  }

  #nav .nav-dropdown-container .arrow {
    pointer-events: none;
  }

  #nav .arrow {
    display: inline-block;
    vertical-align: middle;
    margin-top: -1px;
    margin-left: 6px;
    margin-right: -14px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #ccc;
  }
</style>
