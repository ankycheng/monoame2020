<template lang="pug"> 
  nav#nav
    .container-fluid.pt-3
      .d-float.float-left
        router-link(to="/")
          b 墨雨設計 Monoame Design
      .d-float.float-right
        router-link(to="/about") 
          span.eng About
          span.cht 簡介
        //- router-link(to="/service") 
        //-   span.eng Service
        //-   span.cht 服務項目 
        router-link(to="/works") 
          span.eng Works
          span.cht 案例 
        router-link(to="/tutorial") 
          span.eng Tutorial
          span.cht 課程教學
        router-link(to="/lab") 
          span.eng Lab
          span.cht 實驗
        router-link(to="/blog") 
          span.eng Blog
          span.cht 文章
        router-link(to="/contact") 
          span.eng Contact
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

  b
    font-size: 1.3rem
  .eng
    font-size: 0.5em
    margin-right: 5px
  .float-right
    a
      padding-left: 10px
      padding-right: 10px
      // margin-right: 30px

</style>