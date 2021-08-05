class umbrella{

constructor(x,y){
  var options = {
    isStatic: true
  }
this.body = Bodies.circle(x,y,200,options);
this.image = loadImage("images/Walking Frame/walking_1.png");
World.add(world, this.body);
this.x = x;
this.y = y;
}
display(){
 
  push();
  image(this.image, this.body.position.x-430,this.body.position.y-285);
  pop();
  
}



  

}