<template lang="pug">
  .page.page-about
    section
      CodeArea(v-model="p5code", :hidecode="true" ,:enableMotion="true")
    section.section-vision
      .container
        h2 創造、探索、想像
        h1.p-2 「探索藝術與工程的邊界 創造極致的互動體驗」
        br
        p.mt-5 墨雨設計成立於2015年，跨足各領域平面 / CI / 網站設計，以多元的視野與專業，為您創造不同凡響的作品。
        p 互動設計在很多廣告、品牌推廣跟更廣泛的設計產業，都有商業與藝術上的應用，雖然在台灣可能還沒發展興盛，但近年來台灣的設計風氣逐漸蓬勃，也開始有越來越多的展覽、活動或公司嘗試用不同的互動，讓廣告不再只是廣告，而是跟觀眾互動的遊戲或設計來呈現品牌或提升參與度，結合軟體跟硬體，在功能之外，尋找人對世界最原始的感動跟好奇心。 
        p 這些嶄新的設計手法，容易讓品牌本身更容易取得使用者的關注，讓使用者在互動的過程中，對你想傳達的想法跟故事，有更強烈的印象跟共鳴，比如讓使用者跟虛擬世界中的魚群互動、揮揮手便能在白牆上留下五彩的海浪，用圖像或動畫來解釋抽象的概念，或創造想像與現實不同的世界，除了吸引使用者的好奇心，藉由探索去理解世界，也能讓想要傳達的故事更精彩。
    section.section-service
      .container
        h2 服務項目
        ul
          li 視覺設計
          li 互動體驗設計
          li 品牌設計
          li 互動網頁製作
          li 新媒體藝術
          li 硬體裝置整合規劃
          li 生成式聲音
    section.section-member
      .container
        .row
          .col-12
            h2 團隊成員
        .row
          .col-sm-6
            h5 吳哲宇 CHE-YU WU
            img(src="/img/cheyuwu.jpg")
            h6.mb-1 Founder / Interaction Designer / Creative Technologist
            h4 墨雨設計創辦人，互動設計師、藝術家、講師、全端工程師，紐約大學進修整合數位媒體碩士。
            br
            p 「動態互動網頁程式入門」、「動態互動網頁特效入門」講師，引領超過一萬名同學進入互動網頁開發的大坑。在系上擔任 Creative Coding 研究助理與助教快兩年，喜歡新奇古怪的事物，想脫離網頁的限制，更自由的結合各種媒體與技術創作互動設計。
            p 從動畫與平面設計起家，持續做到整體品牌形象 CI 設計到 UI/UX APP 介面設計，目前專攻網頁動畫與互動，研究如何以網頁的技巧實踐 MotionGraphics的精神，以設計的角度主宰網頁，讓網頁不只是能用、資訊呈現，更要有趣、好玩。
        
          .col-sm-6
            h5 鄭安凱 ANKY-CHENG
            img(src="/img/anky.jpg")
            h6.mb-1 Researcher / Engineer
    section
      .container
        h2 服務客戶
        li 故宮
        li 雜學校
        li 睿田睿軒
        li 捷運局
        li 花旗
        li 工研院
        li 中科院
        li 台大創新設計學院
</template>
<script>

let p5code = `let aa = "ffaf87-ff8e72-ed6a5e-4ce0b3-377771".split("-").map(a=>"#"+a)
let g
function setup() {
	createCanvas(windowWidth, windowHeight);
    g = createGraphics(width,height,WEBGL)
	background(0);
}
let span = 40

function draw() {
	
	// camera(width/2,height/2,800, width/2,height/2,0, 0, 1, 0);
	// translate(-width/2,-height/2)
	// camera(0,0,0, mouseX,mouseY,0, 0, 1, 0);
	// colorMode(HSB)
	// strokeWeight(3)
  background(0,150)
  g.clear(0,0,width,height)
  g.push()
  g.translate(0,0)
  g.scale(0.5)
  g.rotateX(mouseX/100 + rotationX)
  g.rotateY(mouseY/100 +rotationY)
  g.rotateZ(rotationZ)
	for(var i=0;i<width;i+=span){
		for(var o=0;o<height;o+=span){

			let count= noise(i/100,o/100,frameCount/500)*10
            // g.noFill()
            g.strokeWeight(1)
			g.fill(count*50+20,count*20+o/3,i/3)
			for(var z=1;z<=count;z++){
				g.push()
                    g.rotateX(i/200+frameCount/100 )
                    g.rotateY(o/200-frameCount/100+ noise(i,o,z+5500+frameCount/5000)*2)
                    g.rotateZ(z/5)
					g.translate(i,o,z*span)
					g.box(span/4)
				g.pop()
			}
		}
  }
  

  g.pop()

  image(g,0,0)
  
}
`
export default {
  data(){
    return {
      p5code: p5code
    }

  },
}
</script>


<style lang="sass">
.page-about
  p
    color: rgba(white,0.9)
    background-color: rgba(black,1)
  iframe
    height: 750px
    margin-top: -50px
  .section-vision
    position: relative
    margin-top: -450px
    z-index: 100
    background-color: transparent
    h1
      background-color: black
    
  .section-member
    img
      filter: saturate(0%)
      width: 250px

</style>