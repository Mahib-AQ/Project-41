const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var umbrellaB;
function preload(){
    
}
var maxDrops = 100;
var drops = [];

function setup(){
   createCanvas(500,730);
   engine = Engine.create();
   world = engine.world;
    
   if(frameCount%150 === 0){
   for(var i=0; i<maxDrops; i++){
    drops.push(new drop(random(0,400), random(0,400)));
   }
}
umbrellaB = new umbrella(250,400);
}
function draw(){
    background("black");
    Engine.update(engine);
    umbrellaB.display();

    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].reposition();
       }

}   

