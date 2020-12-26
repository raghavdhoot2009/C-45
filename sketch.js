const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;

var child,parents,chocolates,door;
var childImg;
var invisibleGround,Background;
var wall1,wall2,wall3,wall4,wall5,wall6;

function preload(){
childImg=loadImage("child img.jpg")  
}


function setup() {
  createCanvas(3000,800);
  engine=Engine.create();
  world=engine.world;

  child=createSprite(200,400,10,80);
  child.addImage(childImg);
  child.scale=0.20;

  wall1=new wall(900,300,30,100);
  wall2=new wall(800,300,30,100);
  wall3=new wall(700,300,30,100);
  wall4=new wall(600,300,30,100);
  wall5=new wall(500,300,30,100);
  wall6=new wall(400,300,30,100);


}

function draw() {
background(180);
  //Engine.update(engine);

wall1.display();
wall2.display();
wall3.display();
wall4.display();
wall5.display();
wall6.display();

drawSprites();
}