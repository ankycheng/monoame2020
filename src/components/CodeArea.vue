<template lang="pug">
  div
    iframe(
      :key="key"
      height="400px"
      :srcdoc="`<html><head></head><body></script><script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.js'></script><script>${value}; function windowResized() {resizeCanvas(windowWidth, windowHeight);}</script><style>html,body{margin: 0;overflow: hidden;}</style></body>`")
    div( v-if="!hidecode")
      button.btn.btn-light.btn-rerun(@click="restartCode")
        i.fas.fa-redo-alt
      codemirror(v-model="value", :hidecode="true")
</template>

<script>
import p5 from 'p5'
export default {
  props: [
    "value", "hidecode"
  ],
  watch(){
    value: {
    }
  },
  data(){
    return {
      key: 0
    }
  },
  methods:{
    restartCode(){
      this.key++
    }
  }
}
</script>
<style lang="sass">
iframe
  overflow: hidden
  border: none

  width: 100%
.CodeMirror 
  border: 1px solid #eee
  height: auto

.btn.btn-rerun
  font-size: 12px
</style>
