
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wollon,wollonImg
var mew,mewImg,mewFalling
var backgroundImg

function preload() {
  backgroundImg=loadImage("assests/beach.png")
  mewhit = loadAnimation("assests/mew1.png","assests/mew.png")
  wollonImg=loadImage("assests/wollon.png")
  
}

function setup() {
  createCanvas(400,400);
   
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(100,390,600,20);

  wollon = createSprite(90,360,100,100);
  wollon.scale = 0.2;
  wollon.addImage(wollonImg)
}


function draw() 
{
  background(51);
  image(backgroundImg,0,0,400,400);
  Engine.update(engine);
  

  drawSprites()
}

