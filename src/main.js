import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import $ from 'jquery'

import VueCodemirror from 'vue-codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/lib/codemirror.css'
// import 'font-awesome/css/all.css'

import CodeArea from './components/CodeArea'
Vue.component("codearea",CodeArea)


Vue.config.productionTip = false

// import 'codemirror/theme/tomorrow-night-bright.css'
Vue.use(VueCodemirror, { 
  options: {
    // theme: 'tomorrow-night-bright', 
    mode: "javascript",
    tabSize: 4,
    lineNumbers: true,
    line: true
  },
  events: ['scroll']
} )

new Vue({
  router,
  store,
  mounted(){
    store.dispatch("load_works");
    // router.replace("/works");
    $(window).scroll((evt)=>{
      store.commit("set_scrollTop",$(window).scrollTop())
    });
  },
  render: h => h(App)
}).$mount('#app')

if (window.document.domain=="monoame.com" || window.document.domain=="www.monoame.com"){
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-52977512-9', 'auto');
  ga('send', 'pageview');
}else{
  window.ga=null;
  console.log("disable ga.")
}