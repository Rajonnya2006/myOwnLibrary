var fr, mr;
var a,b;
function setup() {
  createCanvas(800,400);
  fr = createSprite(200,200,50,50);
  fr.shapeColor = "green";
  mr = createSprite(400,200,50,50);
  mr.shapeColor = "blue";
  fr.velocityX = 2;
  mr.velocityX = -2;
  a = createSprite(200,100,50,50);
  a.shapeColor = "yellow";
  b = createSprite(400,100,50,50);
  b.shapeColor = "red";
  a.velocityX = 2;
  b.velocityX = -2;
}

function draw() {
  background(255,255,255);
  //mr.x = World.mouseX;
 // mr.y = World.mouseY;
  //bouncing(a,b);
  //bouncing(mr,fr);
  if(touching(a,b)){
  a.shapeColor = "black";
  b.shapeColor = "black";

  }
  else{
    a.shapeColor = "yellow";
    b.shapeColor = "red";
  }
  drawSprites();
}

function touching(obj1, obj2){
  if(obj1.x-obj2.x<=obj1.width/2+obj2.width/2 && 
    obj2.x-obj1.x<=obj1.width/2+obj2.width/2 && 
    obj1.y-obj2.y<=obj1.height/2+obj2.height/2 &&
    obj2.y-obj1.y<=obj1.height/2+obj2.height/2){
    return true;
      
    }
    else{
    return false;  
      
    }
}