<template lang="pug"> 
  #app
    Nav
    transition(name="fade" mode="out-in")
      router-view
    Footer

</template>
<script>

import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
export default {
  components: {
    Nav,Footer
  }
}
</script>

<style lang="sass">
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css)
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css)
@import "~bootstrap/scss/bootstrap"
* 
  vertical-align: top
html,body
  margin: 0
  padding: 0
  font-family: 'Noto Sans TC', sans-serif
  background-color: #000
  overflow-x: hidden
section
  margin-top: 50px
  &:nth-child(1)
    margin-top: 0
  &.theme-white
    background-color: #fff
    color: black
.container
  max-width: 1200px
h1,h2,h3,h4,h5,h6
  margin-top: 2rem
  letter-spacing: 0.1em
  line-height: 1.6
p
  opacity: 0.8
  font-weight: 300
  letter-spacing: 0.1em
  line-height: 1.6
img
  max-width: 100%
.page
  padding-top: 60px
  min-height: 100vh
  padding-bottom: 60px
  background-color: black
  color: white
a
  color: white
  &:hover
    color: #9ecdcb
    text-decoration: none

.fade-enter-active, .fade-leave-active
  transition: opacity .5s .1s, transform .5s .1s,filter 1s
  // position: absolute
  top: 0
  transform: translateY(0px)
  filter: blur(0px)

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ 
  opacity: 0
  transform: translateY(40px)
  filter: blur(20px)

</style>
