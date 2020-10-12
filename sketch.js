var bullet ;
var wall;
var speed ;
var weight ;
var thickness;

  
function setup() {
    createCanvas(1600,400);
   wall=createSprite(1200, 200, thickness, height/2);
    bullet=createSprite(50, 200, 50, 30);
    bullet.shapeColor=color(80,80,80);
    wall.shapeColor=color(255,255,255);
    speed=random(223,321);
    weight=random(30,52);
    thickness=random(22,83);
    bullet.velocityX=speed;
    
    }

   function draw() {
   background("black");

   

if (wall.x-bullet.x<(bullet.width+wall.width)/2 ){

  bullet.velocityX=0;
 var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
 
if(damage<=10){
wall.shapeColor=color(0,255,0);
}

 if(damage>10){
  wall.shapeColor=color(255,0,0);
}
  }
//else {
 // wall.shapeColor=color(255,255,255);
 // bullet.shapeColor=color(80,80,80);
 // }

drawSprites();
   }