class Ball {
constructor(x,y,r){
    var prop = {
        isStatic:true
    }
    this.body = Bodies.circle (x,y,r,prop)
    this.r = r
    World.add(world,this.body)
    this.img = loadImage("assets/cannonball.png")
    this.path = []
}

display(){
push()
imageMode(CENTER)
image(this.img,this.body.position.x,this.body.position.y,this.r,this.r)
pop()
//[[x1,y1],[x2,y2],[x3,y3],...]
if(this.body.velocity.x > 0){
    var position = [this.body.position.x,this.body.position.y]
    this.path.push(position)
  }

  for(var i = 0 ;  i <this.path.length ;  i++){
    image(this.img,this.path[i][0],this.path[i][1],5,5)
  }
}
fire(){
    var vectors = p5.Vector.fromAngle(cannon.a)
    vectors.mult(20)
    Matter.Body.setStatic(this.body,false)
    Matter.Body.setVelocity(this.body,{x:vectors.x,y:vectors.y})
    
}

}