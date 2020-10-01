
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score = 0;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,680,1000,20);
	ground1 = new Ground(500,550,300,20);
	hexagon = new Hexagon(100,350);
	sling = new SlingShot(hexagon.body,{x:100,y:350})
	box1 = new Box(500,520,40,50);
	box2 = new Box(550,520,40,50);
	box3 = new Box(600,520,40,50);
	box4 = new Box(450,520,40,50);
	box5 = new Box(400,520,40,50);
	box6 = new Box(525,460,40,50);
	box7 = new Box(575,460,40,50);
	box8 = new Box(475,460,40,50);
	box9 = new Box(425,460,40,50);
	box10 = new Box(500,400,40,50);
	box11 = new Box(550,400,40,50);
	box12 = new Box(450,400,40,50);
	box13 = new Box(525,340,40,50);
	box14 = new Box(475,340,40,50);
	box15 = new Box(500,280,40,50);

	ground2 = new Ground(800,300,200,20);
	box16 = new Box(800,240,40,50);
	box17 = new Box(850,240,40,50);
	box18 = new Box(750,240,40,50);
	box19 = new Box(825,180,40,50);
	box20 = new Box(775,180,40,50);
	box21 = new Box(800,120,40,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  strokeWeight(3);
  background(40);
  
  drawSprites();

  ground.display();
  ground1.display();
  ground2.display();
  hexagon.display();
  sling.display();
  fill("lightBlue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  fill("pink");
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  fill("lightGreen");
  box10.display();
  box11.display();
  box12.display();
  fill("lightBlue");
  box13.display();
  box14.display();
  fill("pink");
  box15.display();

  fill("lightBlue");
  box16.display();
  box17.display();
  box18.display();
  fill("pink");
  box19.display();
  box20.display();
  fill("lightGreen");
  box21.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();

  text("SCORE : "+score,750,40);
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		sling.attach(hexagon.body);
		Matter.Body.setPosition(hexagon.body, {x:100, y:350});
	}
}
