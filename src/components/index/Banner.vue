<template>
  <div id="banner">
    <div id="hero">
      <div class="inner">
        <div class="left">
          <img class="hero-logo" src="../../assets/logo.png">
        </div>
        <div class="right">
          <h2 class="vue">Vue.js</h2>
          <h1>
            渐进式<br>JavaScript 框架
          </h1>
          <p>
            <a id="modal-player" class="button has-icon" href="javascript:;">
              <svg aria-labelledby="simpleicons-play-icon" role="img" viewBox="0 0 100 125" fill="#FFFFFF"><title
                id="simpleicons-play-icon" lang="en">Play icon</title>
                <path
                  d="M50,3.8C24.5,3.8,3.8,24.5,3.8,50S24.5,96.2,50,96.2S96.2,75.5,96.2,50S75.5,3.8,50,3.8z M71.2,53.3l-30.8,18  c-0.6,0.4-1.3,0.5-1.9,0.5c-0.6,0-1.3-0.1-1.9-0.5c-1.2-0.6-1.9-1.9-1.9-3.3V32c0-1.4,0.8-2.7,1.9-3.3c1.2-0.6,2.7-0.6,3.8,0  l30.8,18c1.2,0.6,1.9,1.9,1.9,3.3S72.3,52.7,71.2,53.3z"></path>
              </svg>

              WHY VUE.JS?</a>
            <a class="button" href="one.html">点击跳转</a>
            <a class="button gray has-icon" href="#" target="_blank">
              <svg aria-labelledby="simpleicons-github-dark-icon" lang="" role="img" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-github-icon" lang="en">GitHub Dark
                icon</title>
                <path fill="#7F8C8D"
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>

              GITHUB</a>
          </p>
        </div>
      </div>
    </div>
    <div id="special-sponsor">
      <h3>Special Sponsors</h3>
      <br>
      <a href="#" target="_blank">
        <img src="../../assets/images/stdlib.png" style="width:140px">
        <span>Function as a Service Platform and Library</span>
      </a>
      <br>
      <a href="#" target="_blank">
        <img src="../../assets/images/bit.png" style="width:60px;height:60px">
        <span>The fastest way to share code</span>
      </a>
    </div>
    <div id="highlights">
      <div class="inner">
        <div class="point">
          <h2>易用</h2>
          <p>已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！</p>
        </div>

        <div class="point">
          <h2>灵活</h2>
          <p>不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。</p>
        </div>

        <div class="point">
          <h2>高效</h2>
          <p>
            20kB min+gzip 运行大小<br>
            超快虚拟 DOM <br>
            最省心的优化
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner'
}
</script>

<style scoped>
  @import "../../assets/css/fonts.css";

  #banner {
    background: #42b983;
  }

  #hero {
    padding: 40px 40px 30px;
    background-color: #fff;
  }

  #hero .inner {
    max-width: 1260px;
    margin: 0 auto;
  }

  #hero .left {
    width: 39%;
  }

  #hero .left, #hero .right {
    display: inline-block;
    vertical-align: top;
  }

  #hero .hero-logo {
    width: 215px;
    height: 215px;
    float: right;
    margin-right: 60px;
  }

  img {
    border: none;
  }

  #hero h2 {
    font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
    font-size: 2.4em;
    margin: 0 0 10px;
    display: none;
  }

  #hero h1 {
    font-weight: 300;
    margin: 0;
    font-size: 3.2em;
  }

  p {
    word-spacing: 0.05em;
  }

  #hero .button {
    margin: 1em 0;
    font-size: 1.05em;
    font-weight: 600;
    letter-spacing: 0.1em;
    min-width: 8em;
    text-align: center;
  }

  a.button.has-icon {
    position: relative;
    text-indent: 1.4em;
  }

  a.button {
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  a {
    text-decoration: none;
    color: #34495e;
  }

  a.button.has-icon > svg {
    position: absolute;
    left: 0.4em;
    top: 0.4em;
    width: 2em;
  }

  #hero .button {
    margin: 1em 0;
    font-size: 1.05em;
    font-weight: 600;
    letter-spacing: 0.1em;
    min-width: 8em;
    text-align: center;
  }

  a.button {
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  a.button.gray {
    background-color: #f6f6f6;
    color: #7f8c8d;
    border-color: #f6f6f6;
  }

  a.button.has-icon {
    position: relative;
    text-indent: 1.4em;
  }

  #special-sponsor {
    background-color: #fff;
    text-align: center;
    padding-bottom: 30px;
  }

  #special-sponsor h3 {
    margin: 0;
  }

  #special-sponsor a, #special-sponsor span, #special-sponsor img {
    display: inline-block;
    vertical-align: middle;
  }

  #special-sponsor a {
    color: #7f8c8d;
    margin: 8px 0;
  }

  #highlights {
    background-color: #fff;
    padding-bottom: 70px;
  }

  #highlights .inner {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  #highlights .point {
    width: 33%;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 2em;
  }

  #highlights .point h2 {
    color: #42b983;
    font-size: 1.5em;
    font-weight: 400;
    margin: 0;
    padding: 0.5em 0;
  }

  #highlights .point p {
    color: #7f8c8d;
  }

  #highlights {
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-size: 15px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #34495e;
    background-color: #fff;
    margin: 0;
  }
</style>
