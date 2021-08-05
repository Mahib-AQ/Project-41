class drop{

    constructor(x,y){

        var options = {
            'friction': 0.1
        }

        this.body = Bodies.circle(x,y,3,options);
        World.add(world, this.body);
        
    }
    
    display(){
        var pos =this.body.position;
   
        
        ellipseMode(RADIUS);
        fill("cyan");
        ellipse(pos.x,pos.y,3,4);
      
    }

    reposition(){
        
        if(this.body.position.y.y > height){
            Matter.Body.setPosition(this.body, {x: random(0,500), y: random(0,400)})
        };

    }
}        
