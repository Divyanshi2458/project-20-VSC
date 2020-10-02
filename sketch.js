var car,car2,car3,wall;
var speed,weight;
function setup() {
   createCanvas(1600,400);
   speed=random(55,90)
  car=createSprite(400,200,50,50)
  car.velocityX=speed
  car2=createSprite(400,50,50,50)
  car2.velocityX=speed
  car3=createSprite(400,300,50,50)
  car3.velocityX=speed
  wall=createSprite(800,200,60,1600)
  weight=random(400,1500)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car2.depth=1;
  car3.depth=1;
  collide(car,wall);
  collide(car2,wall);
  collide(car3,wall);
  textSize(20);
  fill("blue");
  text("SPEED"+speed,100,130);
  text("WEIGHT"+weight,100,160);
}


function collide(object1,object2){
if(object2.x-object1.x<(object1.width+object2.width)/2){
object1.velocityX=0
var deformation=0.5*speed*speed*weight/22509;
textSize(20)

fill("blue")
text("DEFORMATION:"+deformation,100,100)

if(deformation<100){
  object1.shapeColor=color(0,255,0)
}
if(deformation<180 && deformation>100){
  object1.shapeColor=color(230,230,0)
}

if(deformation>180){
  object1.shapeColor=color(255,0,0)
}

}

}