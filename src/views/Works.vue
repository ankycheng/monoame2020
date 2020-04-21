<template lang="pug">
  .page-works
    .container-fluid
      .row.works
        .projbox.col-lg-6.col-md-12(v-for="(proj,wid) in works",v-show="wid<show_num",:key="wid")
          router-link.workitem_inner(
                      :to='"works/"+proj.id'
                      :title='"點擊查看 "+proj.title+"詳細資訊"')
            .ratio-wrapper.animated.fadeIn
              .blackmask

              .img_wrap(:style='"background-image: url("+proj.cover+")"')
                .content.p-5
                  h4.year.animated.fadeIn {{ proj.established_time.split("-")[0] }}
                  h3.animated.slideInUp {{proj.title}}
                  h5.proj_description {{proj.description}}

      .trigger_bar
        br 
        br 
        h3.text-center
          //- span(v-if="!can_load_more") {{load_text}}
          transition(name="fade")
            //- img.load_icon(v-if="!can_load_more",src="http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif",width="100px") 

  
</template>

<script>
import {mapState} from 'vuex'
import $ from 'jquery'
export default {
  name: 'hello',
  data () {
    return {
      show_num: 8,
      can_load_more: true,
      load_text: "載入中...",
      
    }
  },
  computed: {
    ...mapState(['works','scrollTop']),
    limit_works(){
      return this.works.slice(0,this.show_num);
    }
  },
  mounted(){
    $(window).scrollTop(0)
  },
  watch: {
    scrollTop(){
      var y =this.scrollTop+$(window).outerHeight();
      var trigger = $(".trigger_bar").offset().top;

      if (y>trigger && this.can_load_more && this.show_num<this.works.length){
        this.can_load_more=false;

        setTimeout(()=>{
          this.show_num+=4;
          console.log("add new post: " + this.show_num);
          this.can_load_more=true;

        },300);
        
      }
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

$colorBlue: #A8D3D2
.page-works
  padding-top: 50px
  // background: linear-gradient(0.01deg, transparent 99%,(rgba(black,0.1)) 100%)
  // background-size: 100vw 20vh

.projbox
  padding: 60px

  color: white

  cursor: pointer
  position: relative
  // border-radius: 30px
  // padding: 10px
  // height: 400px
  padding: 0
  margin-top: 0
  align-items: flex-start
  outline: none

  h3,h5
    margin: 0
    text-shadow: 0px 0px 20px black

  h3
    font-size: 2.5rem
    
  h5
    margin-top: 20px


  .workitem_inner
    display: block

    padding-bottom: 66.6%
  .ratio-wrapper

    position: absolute
    width: 100%
    height: 100%
    // height: 100%
    // height: 300px
    // padding: 10px

  .img_wrap
    width: 100%
    height: 100%
    background-size: cover
    background-position: center center
    transition: 0.5s
    box-shadow: -5px 5px 30px rgba(black,0.6)
  .blackmask
    position: absolute
    width: 100%
    height: 100%
    left: 0
    top: 0
    background-color: rgba(0,0,0,0.005)
    pointer-events: none
    transition-duration: 0.2s
    z-index: 3
  .content

    width: 100%
    // height: 30%
    position: relative
    height: 100%
    // position: absolute
    bottom: 0px
    // background: linear-gradient(transparent,rgba(black,0.5))
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    // justify-content: flex-end
    padding-bottom: 10px
  .year
    // float: right
    position: absolute
    right: 0
    top: 0
    margin-top: 80px
    color: $colorBlue
    // opacity: 0.5
    font-size: 15px
    margin-top: 10px
    font-weight: 500
    
  h3,h5
    transition-duration: 0.5s
    opacity: 0


  h3
    letter-spacing: 1px
    // font-size: 22px
    font-weight: 700
    padding-bottom: 0
    padding-left: 10px
    // padding: 0
    // transform: translateX(-100px)


  h5
    letter-spacing: 1px
    font-size: 16px
    padding-top: 0
    font-weight: 300
    // padding: 0

  .proj_description
    opacity: 0.5
    
  &:hover
    h3,h5
      color: white
      opacity: 1
      z-index: 10
    .blackmask
      background-color: rgba(0,0,0,0.65)
    // .proj_description
      // opacity: 0.9
.ovh
  overflow: hidden
  *
    animation-duration: 1.5s
    // animation-delay: 0.8s
</style>
