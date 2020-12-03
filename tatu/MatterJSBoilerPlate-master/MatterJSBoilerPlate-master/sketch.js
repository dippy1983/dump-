
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
var box1,box2,box3,box4;



function preload()
{
	
}

function setup() {
	var createCanvas=(400, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,250,400,20)
box1=new Box(350,250,5,50)



	Engine.run(engine);
  
}


function draw() {
	background("black");
	Engine.update(engine)


	box1.display()
 
  
ground.display()



  drawSprites();
 
}



