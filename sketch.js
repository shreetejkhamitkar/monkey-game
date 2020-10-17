var monkey,monkey_running;
var banana,bananaImg,obstacle,obstacleImage;
var FoodGroup,ObstacleGroup;
var score,survivalTime=0;

function preload(){
  
monkey_running=loadAnimation("sprite_0.png",
"sprite_1.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  bananaImage=loadImage("banana.png");
 obstacleImage=loadImage("obstacle.png");
  
}

function setup(){
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);


foodGroup= new Group();
obstacleGroup= new Group();  
}

function draw(){
  background(255);
  
  if(ground.x<0){
  ground.x=ground.width/2; 
    
  }
  if(keyDown("space")){
   monkey.velocityY=-12; 
  }
  
  if (foodGroup.isTouching(monkey)){
   foodGroup.destroyEach();
    survivalTime=survivalTime+1;
    
  }
 monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  if(monkey.isTouching(obstacleGroup)){
    monkey.velocityX=0;
    
  }
 
  Obstacle();
  Food();
  
  drawSprites();
  
  
  
   stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
   
  stroke("black");
  textSize(20);
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);
 


 
}

function Food(){
if(frameCount%80===0){
var banana=createSprite(500,250,40,10);
banana.addImage(bananaImage);
banana.scale=0.08;
banana.y=random(80,100);
banana.velocityX=-5;
banana.lifetime=300; 
monkey.depth=banana.depth+1;
foodGroup.add(banana);
  
}
  
  
}
function Obstacle(){
if(frameCount%200===0){
var obstacle=createSprite(800,350,10,40);
obstacle.addImage(obstacleImage);
obstacle.scale=0.1;
  
obstacle.velocityX=-6;
obstacle.lifetime=300;
obstacleGroup.add(obstacle);
}
}
  

