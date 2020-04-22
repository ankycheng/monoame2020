<template lang="pug"> 
  nav#nav.black
    //(:class="{transparent: $route.path=='/' || $route.path=='/about'}")
    //- i.fa.fa-hambuger
    .container-fluid.pt-4
      i.fa.fa-bars(@click="showNav=!showNav")
      .d-float.float-left
        router-link(to="/")
          img(src="/img/SVG/logo_white.svg", style="width: 50px;margin-left: 20px;margin-right: 20px")
          span Monoame Design
          
      .d-float.float-right(:class="{active: showNav}", @click="showNav=false")
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
<script>
export default {
  data(){
    return {
      showNav: false
    }
  }
}
</script>
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
    a,i
      color: white
      &:hover
        color: #9ecdcb
        span
        text-decoration: none

i.fa.fa-bars
  display: none
  position: fixed
  right: 30px
  top: 30px
  font-size: 2rem
  cursor: pointer
    
@media screen and (max-width: 600px)
  nav
    position: fixed
    z-index: 900
  i.fa.fa-bars
    display: block
  //.eng
    // display: none
  nav .d-float.float-right
    position: fixed
    // right: -100vw
    background-color: rgba(black,0.95)
    width: 100vw
    height: 100vh
    left: 0
    
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    font-size: 2rem
    z-index: 10000
    opacity: 0
    pointer-events: none
    transition: 0.5s
    *
      vertical-align: middle
    &.active
      opacity: 1
      pointer-events: initial


</style>