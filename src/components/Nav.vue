<template lang="pug"> 
  nav#nav.black
    //(:class="{transparent: $route.path=='/' || $route.path=='/about'}")
    .container-fluid.pt-4
      .d-float.float-left
        router-link(to="/")
          img(src="/img/SVG/logo_white.svg", style="width: 50px;margin-left: 20px;margin-right: 20px")
          
          span Monoame Design
      .d-float.float-right
        router-link(to="/about") 
          span.eng About /
          span.cht 簡介
        //- router-link(to="/service") 
        //-   span.eng Service /
        //-   span.cht 服務項目 
        router-link(to="/works") 
          span.eng Works /
          span.cht 案例 
        router-link(to="/tutorial") 
          span.eng Tutorial /
          span.cht 課程教學
        router-link(to="/lab") 
          span.eng Lab /
          span.cht 實驗
        router-link(to="/blog") 
          span.eng Blog /
          span.cht 文章
        router-link(to="/contact") 
          span.eng Contact /
          span.cht 聯絡我們

</template>
<style lang="sass">
nav
  border-bottom: 1px solid #000
  height: 60px
  background-color: #fff
  z-index: 10
  position: fixed
  top: 0
  left: 0 
  width: 100%
  img
    background-color: rgba(black,0.6)
  // * 
    // transition: 0.5s
  transition: 1s
  b
    font-size: 1.3rem
  .eng
    font-size: 0.6em
    margin-right: 8px
  .float-right
    a
      padding-left: 10px
      padding-right: 10px
      letter-spacing: 1px
      // margin-right: 30px
  &.black
    color: white
    *
      // color: white
    background-color: rgba(black,0.9)
    // border-bottom: solid 1px white
    a
      color: white
      &:hover
        color: #9ecdcb
        span
        text-decoration: none

</style>