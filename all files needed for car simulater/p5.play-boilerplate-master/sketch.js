var car;
var wall;
var speed,weight;
var deformation=0.5*weight*speed*speed/22509



function setup() {
  createCanvas(1000,400);
car=createSprite(950,200,50,30);
wall=createSprite(10,200,10,400);
speed=random(-55,-90);
weight=random(3500,4500)
}

function draw() {
  background(80,500,255);  

  car.velocityX=speed;
 car.debug=true;
 wall.debug=true;
 car.depth=wall.depth;
if(wall.x-car.x>(wall.width+car.width)/2){
car.velocityX=0;
car.shapeColor="red"
}

if(deformation<100&&deformation>0){

car.shapeColor=color(0,225,0)


}

if(deformation>100&&deformation<180){


car.shapeColor=color(230,230,0)
}

if(deformation>180){


  car.shapeColor=color(225,0,0)
  }

drawSprites();
  
}