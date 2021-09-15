class Cannon{
 constructor(x,y,w,h,a){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.a = a
    this.image1 = loadImage("assets/canon.png")
    this.image2 = loadImage("assets/cannonBase.png")
}
display(){
   if (keyIsDown(RIGHT_ARROW)&&this.a<0.7){
    this.a = this.a+0.01
   }

   if (keyIsDown(LEFT_ARROW)&&this.a>-1.1){
    this.a = this.a-0.01
   }
   
push()
translate(this.x,this.y)
rotate(this.a)
imageMode(CENTER)
image(this.image1,0,0,this.w,this.h)
pop()
image(this.image2,70,20,200,200)
}

}