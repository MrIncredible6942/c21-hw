
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine, myWorld;
var groundObj;
var leftside;
var rightside;
var ball;
function setup() {
	createCanvas(800, 800);
	
	myEngine = Engine.create();
	myWorld = myEngine.world;
	
	var ball_options = {
		restitution : 0.75,
		density:1.2
	  }
	//Create the Bodies Here.
	ball = Bodies.circle(200, 200, 20, ball_options);
	World.add(myWorld, ball);
	//groundObj = new Ground(200, 150, 200, 10);
	
	groundObj = new Ground(width/2,670,width,20);
	leftside = new Ground(100,500,20,120);
	rightside = new Ground(300,500,20,120);
	rectMode(CENTER);
	
}


function draw() {
  
  background("magenta");

  Engine.update(myEngine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20);
 
  groundObj.display();
  leftside.display();
  rightside.display();
 
  
}

