<template lang="pug">
  .page.page-contact
    section
      CodeArea(v-model="p5code", :hidecode="true")
    .container
      .row
        .col-sm-6
          h1 聯絡我們
          p 請留下您的相關需求或寄至我們信箱，我們會盡快回覆您Mail
          p 
            | Mail: monoamestudio@gmail.com
            br
            | Facebook 粉專：墨雨設計
        .col-sm-6.pt-5
          form(action="https://formspree.io/xvobebgr",method='POST')
            .form-group
              label
              | 信箱 Email
              input.form-control(type='email' name='_replyto' )
            .form-group
              label
              | 聯絡人 Contact person
              input.form-control(type='text' name='name' )
            .form-group
              label
              | 公司 Company
              input.form-control(type='text' name='company' )
            .form-group
              label
              | 訊息 Message
              textarea.form-control(name='message' rows="5")
            .form-group
              button.btn.btn-secondary(type="submit" value="Send") 送出

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
.page-contact
  label
    display: block
    margin-bottom: 15px
  input,textarea
    margin-top: 10px
    background-color: transparent
    border: solid 2px white
    color: white
    font-weight: 300

</style>