const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ground;
var left
var right
var ball;

function preload() {

}

function setup() {
	createCanvas(400,400);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(200,390,400,20);
    left = new Ground(300, 350, 20, 20)
    right = new Ground(350, 350, 20, 20)

	//Create the Bodies Here.
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(45, 355, 20, ball_options);
	World.add(world,ball);
	ellipseMode(RADIUS);

}


function draw () {
	rectMode(CENTER);
	background("#282a36");
	ellipse(ball.position.x,ball.position.y,20);
	fill("#bd93f9")
	ground.show();
	left.show()
	right.show()
	Ground.display();
	leftSide.display()
	rightSide.display()
	drawSprites();
	Engine.update(engine);
}

function keyPressed () {
	if (keyDown === SPACE) {
		Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.03,y:-0.03})
	}
}