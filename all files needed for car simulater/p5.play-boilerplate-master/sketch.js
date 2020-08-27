var car,wall;
var deformation=0.5*weight*speed*speed/22509
var speed,weight;


function setup() {
  createCanvas(1000,400);
car=createSprite(950,200,50,30);
wall=createSprite(10,200,10,400)
}

function draw() {
  background(80,500,255);  

  car.velocityX=-9;
 car.debug=true;
 wall.debug=true;
 car.depth=wall.depth;
if(wall.x-car.x<car.width/2+wall.widhth/2){
car.velocityX=0;
car.shapeColor="red"
}





drawSprites();
  
}