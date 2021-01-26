const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,box1,box2,box3,dustbinImage,PaperImage;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = new Ball(100,600);
    ground = new Ground(400,680,800,20);
    box1 = new Box(600,600,20,50);
    box2 = new Box(620,600,100,20);
    box3 = new Box(720,600,20,50);

	Engine.run(engine);
  
}

function draw() {
  background("white");
  Engine.update(engine);
  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();

  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  }
  
  drawSprites();
 
}