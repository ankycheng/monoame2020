<template lang="pug">
  .page.page-index
    CodeArea(v-model="p5code", :hidecode="true")
</template>

<script>
// @ is an alias to /src
import CodeArea from '@/components/CodeArea'
let p5code = `
let colors = "f98227-f4e04d-f2ed6f-cee397-8db1ab-587792-fff".split("-").map(a=>"#"+a)

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(100);
	noStroke()
  // drawingContext.shadowColor = color(0, 0, 100,50);
  // drawingContext.shadowBlur =30;
	rectMode(CENTER)
}

function draw() {
	fill(0,200)
	// background(0)
	rect(width/2,height/2,width,height)
	let lastX=0,lastY=0
	for(var o=0;o<=11;o++){
		push()
			translate(width/2,height/2)
			rotate( (o/2))
			// scale(sqrt(o))
			// rotate(2*PI+o/PI*(sin(frameCount/200))*1)
			for(var i=0;i<width/1.75;i+=2){
				let clr = color(colors[int((o*5+i + (frameCount+mouseX/10) + random(-10,10))/20)%colors.length])
				clr.setAlpha(255-i/10+ random(-50,50))
				fill(clr)
				let rr = pow(width/2-(i+mouseY/10)*1.2,0.4)*0.6 + random(-1,2)
				
				let xx = (i+mouseY/10)*1.1+ sqrt(o,(frameCount+mouseX/10)/10)*3
				let yy = sqrt(i)+ o+noise(i/10,o/10,(frameCount+mouseX/10)/10)*10 + sin((i)*(o/5+1) + (frameCount+mouseX/10)/20)*(50+cos(i/100)*20)-25 +  cos(i + sqrt(o))*5 
				
				if (random()<0.01){
					push()
					stroke(clr)
					line(xx,yy,lastX + random(-5,5),lastY+ random(-5,5))
					pop()
				}
				if (random()<0.8){
					ellipse(xx,yy,rr,rr)
				}else{
					rect(xx,yy,rr,rr)
				}
				
				if (o==0 && i%50==0){
					fill(255)
					textStyle(BOLD)
					text(i+o,i-10,o+25)
				}
				
				if ( i % 10 ==0 && i>50){
					// noFill()
					fill(255,i%200?200:50)
					rect(i,0,2,i%100==0?20:3)
					if (i%40==0 && o>1){
						fill(255)
						textStyle(BOLD)
						let tx = ("ABCDEFGHIJKLMNO".split("")[ int(i/30+o) % 10])
						let tw = textWidth(tx)
						if (tx=="D"){
							fill(255)
							rect(i+5,o+15,tw+3,15)
							fill(0)
						}else{
							
						}
						text(tx,i,o+20)
					}
				}
				lastX=xx
				lastY=yy
			}
		pop()
		push()
		
		
			let sqWidth = 40
			stroke(255,100)
			strokeWeight(1)
			let xx = o*sqWidth+40,yy= height-sqWidth-10
			let ang = o+noise(0,o/10,frameCount/10)*10 + sin((1)*(o/2+1) + frameCount/20 )*(50+cos(1/100)*20)-25 +  cos(1 + sqrt(o))*5 
			
			rect(o*sqWidth+40,height-sqWidth-10,sqWidth-5,sqWidth-5)
			noStroke()
			fill(255)
		
			push()
				translate(o*sqWidth+40,height-sqWidth-10)
				// colorMode(HSB)
				fill(colors[int((o*10+ frameCount/5 + random(-10,10))/20)%colors.length])
				
				beginShape()
				for(var i=0;i<360;i+=2){
					let a = i/360*PI*2
					let r = 2 + sin(a*o + frameCount/2)*10
					vertex(r*cos(a),r*sin(a))	
				}
				endShape()
				fill(255)
		
		
			pop()	
		
			text(int(ang),xx,yy)
		pop()
	}
	
	push()
	
		fill(255)
		textStyle(BOLD)
			textSize(14)
			text("Atomic furnace β v0.99\\nFusion Factor: " + frameCount/10+"\\n"+ "Angle: " +int(2 + sin(frameCount/2)*10),25,height-120)
		stroke(255,200)
		noFill()
		strokeWeight(2)
		rect(width/2,height/2,width-30,height-30)
		stroke(0)
		strokeWeight(5)
		rect(0,0,60,60)
		rect(width,0,60,60)
		rect(0,height,60,60)
		rect(width,height,60,60)
	
	pop()
	
}
`

export default {
  name: 'Home',
  data(){
    return {
      p5code: p5code
    }

  },
  components: {
    CodeArea
  },
  mounted(){

  }
}
</script>

<style lang="sass">
.page.page-index
  iframe
    height: 100vh
    position: absolute
    left: 0
    top: 0
</style>