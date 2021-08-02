var FixedRect;
var MovingRect;



function setup() {
  createCanvas(800,400);
  FixedRect=createSprite(400, 200, 50, 50);
  MovingRect=createSprite(600,200,30,30);
}

function draw() {
  background("Blue");
  
  MovingRect.x=World.mouseX;
  MovingRect.y=World.mouseY;

if(MovingRect.x-FixedRect.x<MovingRect.width/2+FixedRect.width/2 &&
  FixedRect.x-MovingRect.x<MovingRect.width/2+FixedRect.width/2 &&
  MovingRect.y-FixedRect.y<MovingRect.height/2+FixedRect.height/2 &&
  FixedRect.y-MovingRect.y<MovingRect.height/2+FixedRect.height/2){

    MovingRect.shapeColor="red";
    FixedRect.shapeColor="red";

  } 
  else{
    MovingRect.shapeColor="green";
    FixedRect.shapeColor="green"; 
  }



  
  drawSprites();
}