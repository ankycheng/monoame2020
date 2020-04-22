<template lang="pug">
  .page.page-contact
    section
      CodeArea(v-model="p5code", :hidecode="true")
    .container
      .row
        .col-12
          h1 聯絡我們
          p 請留下您的相關需求或寄至我們信箱，我們會盡快回覆您Mail
          p 
            | Mail: monoamestudio@gmail.com
            br
            | Facebook 粉專：墨雨設計
  
</template>
<script>

let p5code=`
class Particle{
	constructor(p,v,a){
		this.p=p
		this.v=v
		this.a=a
		this.c =  color(random(0,255),255,255)
		this.r =  random(1,50)
		this.freq = random(2,20)
	}
	update(){
		this.p.add(this.v)
		this.v.add(this.a)
		this.r*=0.99

	}
	draw(){
		graphic.stroke(0)
		graphic.strokeWeight(0.9)
		graphic.fill(this.c)
		graphic.ellipse(this.p.x +sin(frameCount/this.freq)*this.r, this.p.y+cos(frameCount/this.freq)*this.r, this.r, this.r);
	}
}

particles = []
var graphic
function setup() {
	createCanvas(windowWidth, windowHeight);
	graphic = createGraphics(windowWidth, windowHeight)
	
	background(0);
	colorMode(HSB)
}
function draw() {
  let xx,yy
	if (mouseX==0){
    xx=noise(frameCount/50,500)*width
  }else{
    xx=mouseX
  }
  if (mouseY==0){
    yy=noise(frameCount/50,10000)*height
  }else{
    yy=mouseY
  }
	particles.forEach(p=>p.update())
	particles.forEach(p=>p.draw())
	particles.push(new Particle(
		createVector(xx,yy),
		p5.Vector.random2D().mult(random(0,0.3)),
		p5.Vector.random2D().mult(random(0,0.1)),
	))
								 
	image(graphic,0,5)
	graphic.background(0,4)
	
	// graphic.rect(0,0,width,2)
	graphic.image(graphic,0,2)
	
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
iframe
  height: 400px
</style>