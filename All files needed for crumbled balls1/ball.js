class Ball{
constructor(x,y,radius){

var options={
    'restitution':0.8,
    'friction':1.2,
    'density':1.0,
   isStatic:true


}

this.body=Bodies.circle(x,y,radius,options)
this.radius=radius;
World.add(world,this.body)







}

display(){
var pis=this.body.position
push();
translate(pis.x,pis.y)
ellipseMode(RADIUS);
fill(225);
circle(0,0,this.radius)
pop();


}




































}