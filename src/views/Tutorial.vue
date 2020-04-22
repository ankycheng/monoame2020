<template lang="pug">
  .page.page-course
    section
      CodeArea(v-model="p5code", :hidecode="true")
    .container
      .row
        .col-12
          h1 設計導向的互動網頁程式課程
          p 墨雨設計致力於線上教學，透過開設結合設計與技術的網頁課程，引領更多設計師、工程師踏入動態網頁的領域
          img(src="/img/tutorial_meeting.jpg")
          img(src="/img/DSC_0307.jpg")
      .row
        .col-sm-12.mt-3
          .row
            .col-sm-5
              img(src="/img/class1.png")
            .col-sm-7
              h4.mt-5.mb-3 動畫互動網頁程式入門 (HTML/CSS/JS)
              p 想用 illustrator 的思維學習網頁前端程式設計嗎？看完一般網路教學總是離想像有一大段距離嗎？讓這堂課帶你走進前端動態網頁的世界。
                | <br>入門網站基礎的架構與開發，網頁元素精準的掌控，刻出簡單有趣，視覺好看的網頁與小動畫，也會講基本的架構手法，讓你做出來的網頁易於維護也能讓工程師接手，
              a.btn.btn-secondary(href="https://hahow.in/cr/monoame-webdesign1" target="_blank" @click="log_event('動畫互動網頁程式入門')") 前往課程
        .col-sm-12.mt-3
          .row
            .col-sm-5
              img(src="/img/class2.png")
            .col-sm-7
              h4.mt-5.mb-3 動畫互動網頁特效入門（JS/CANVAS）
              p 整合應用網頁技術與數學原理，完成有設計感的互動性網站。<br>深入淺出學習網頁動畫、特效與遊戲製作的原理，從零快速入門網頁、JS 與繪圖實戰範例，並學習使用 Vue.js 整合前端網頁。
              a.btn.btn-secondary(href="https://hahow.in/cr/monoame-webdesign2" target="_blank" @click="log_event('動畫互動網頁特效入門')") 前往課程
        .col-sm-12.mt-3
          .row
            .col-sm-5
              img(src="/img/class3.png")
            .col-sm-7
              h4.mt-5.mb-3 互動藝術程式創作入門（Creative Coding）
              p 認識程式與互動藝術產業應用，開啟對工程跟設計的想像
                | <br>學會使用 p5.js 開發互動介面，整合繪圖、音訊、視訊、文字、3D、互動與機器創作完整的作品
                | <br>將創作輸出應用在個人品牌或網站、主視覺或海報，甚至互動裝置、遊戲與教材製作等場景，讓你對進修的資源與路線更有方向
              a.btn.btn-secondary(href="https://hahow.in/cr/creative-coding-1" target="_blank" @click="log_event('動畫互動網頁特效入門')") 前往課程
        .col-sm-12.mt-3
          .row
            .col-sm-5
              img(src="/img/bosscoding.jpg")
            .col-sm-7
              h4.mt-5 老闆，來點寇汀吧。
              pre.mb-3 Boss,CODING please.
              p 寇汀，是一種名為Coding的雞尾酒。<br>深夜酒吧，想做什麼都可以<br>每週四十點，老闆帶著你直播寇汀Coding！
              a.btn.btn-secondary(href="https://www.facebook.com/pg/bosscodingplease" target="_blank" @click="log_event('老闆，來點寇汀吧。')") 前往課程
      //.row
        .col-12
          h1 教學成果
          a(target="_blank", href="http://2017.awiclass.monoame.com/proj/1") 作品集網站
          
          img(src="/img/awiworks.png")
          
</template>
<script>
let p5code = `
function drawShape(_i,_o){
	let r = 20
	beginShape()
	for(var i=0;i<500;i++){
    let w = i/50+frameCount/20 

		vertex(r*cos(_i*w+frameCount/100+ sqrt(mouseX)/10),r*sin(_o*w+frameCount/100+ sqrt(mouseX)/10) )
	}
	endShape()
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	noFill()
	stroke(255);
	// drawShape(0.1);
}

function draw() {
	background(0)
	translate(0,height/2)
	translate(10*10/2,-10*50/2)
	
	for(var i=0;i<30;i++){
		fill(255)
		noStroke()
		text(i, i*60, -60)
		noFill()
		for(var o=0;o<10;o++){
			fill(255)
			text(o,-60, o*60)
			noFill()
			push()
			translate(i*60,o*60)
			stroke(map(i,0,10,0,255),map(o,0,10,0,255),255)
			drawShape(i,o)
			pop()
		}
		
	}
	// ellipse(mouseX, mouseY, 20, 20);
}
`
export default {
  data(){
    return {
      p5code
    }
  }  
}
</script>
<style lang="sass">
.page-course
  background-color: black
  color: white
</style>