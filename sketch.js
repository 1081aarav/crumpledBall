
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall=new Paper(200, 600, 5);
	ground=new Ground(400, 615, 800, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	paperBall.display();
	ground.display();
    drawSprites();
 
}



