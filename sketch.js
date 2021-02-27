
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,dustbinobj
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
dustbinobj = new Dustbin (1200,650)
ground = new Ground(800,670,1600,20)	//Create the Bodies Here.
paper = new Paper(200,450,40)

	Engine.run(engine);
  
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}

function draw() {
Engine.update(engine);
	rectMode(CENTER);
  background("white");
ground.display();
dustbinobj.display();
paper.display();
  drawSprites();
 
}



