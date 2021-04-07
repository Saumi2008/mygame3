var track,trackimg;
var runner,runnerimg;
var cash,cashimg,cashgroup;
var diamond,diamondimg,diamondgroup;

function preload(){
  trackimg=loadImage("images/track.jpg");
  runnerimg=loadAnimation("images/Runner-1.png","images/Runner-2.png");
  cashimg=loadImage("images/cash.png");
  diamondimg=loadImage("images/diamonds.png");
}

function setup() {
  createCanvas(800,600);
  
  track=createSprite(400, 200, 50, 50);
  track.addImage(trackimg);
  track.velocityY=1;
  
  runner=createSprite(400,500,50,50);
  runner.addAnimation("running",runnerimg);
  runner.scale=0.1;

  cashgroup=new Group();



 

  
}

function draw() {
  background("black");  

  if(track.y > 400 ){
    track.y = height/2;
  }


  runner.x=World.mouseX;
  //runner.y=World.mouseY;
  
  createCash();
  creatediamond();

  drawSprites();
  
}

function createCash(){
  if(frameCount % 200 ==0){
    cash=createSprite(Math.round(random(100,700)),10,20,20);
    cash.velocityY=3;
    cash.addImage(cashimg);
    cash.scale=0.15;
    cash.lifetime=150;
    cashgroup.add(cash);
    
  }
}

function creatediamond(){
  if(frameCount % 100 ==0){
    diamond=createSprite(Math.round(random(200,500)),10,10,20);
    diamond.velocityY=4;
    diamond.addImage(diamondimg);
    diamond.lifetime=150;
    diamondgroup.add(diamond);
  }
}














