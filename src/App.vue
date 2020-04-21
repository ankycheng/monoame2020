<template lang="pug"> 
  #app
    Nav
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
html,body
  margin: 0
  padding: 0
  font-family: 'Noto Sans TC', sans-serif
h1,h2,h3,h4,h5,h6
  margin-top: 2rem
img
  max-width: 100%
.page
  padding-top: 60px
  min-height: 100vh
a
  color: black
</style>
