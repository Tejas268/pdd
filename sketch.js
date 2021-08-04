const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ground, stand1, stand2, ballI, ball, slingShot;
var r = 1;


function preload () {
  ballI = loadImage("polygon.png");
}
function setup() {
  createCanvas(1000, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();

  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(800,200,200,10);
 
  //level one
  block1 = new Block(300, 275);
  block2 = new Block(330, 275);
  block3 = new Block(360, 275);
  block4 = new Block(390, 275);
  block5 = new Block(420, 275);
  block6 = new Block(450, 275);
  block7 = new Block(480, 275);
  //level two
  block8 = new Block(330, 235);
  block9 = new Block(360, 235);
  block10 = new Block(390, 235);
  block11 = new Block(420, 235);
  block12 = new Block(450, 235);
  //level three
  block13 = new Block(360, 195);
  block14 = new Block(390, 195);
  block15 = new Block(420, 195);
  //top
  block16 = new Block(390, 155);
  //level one
  b1 = new Block(735, 175);
  b2 = new Block(765, 175);
  b3 = new Block(795, 175);
  b4 = new Block(825, 175);
  b5 = new Block(855, 175);
  //level two
  b6 = new Block(765, 135);
  b7 = new Block(795, 135);
  b8 = new Block(825, 135);
  //top
  b9 = new Block(795, 95);
  ball = Bodies.circle(85,256.73,20);
  World.add(world, ball);
  slingShot = new SlingShot(this.ball, {x : 85, y : 240});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill(186, 68, 68);
  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  b9.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  b6.display();
  b7.display();
  b8.display();
  fill("grey");
  block16.display();
  imageMode(CENTER);
  image(ballI, ball.position.x,ball.position.y,40,40);
  slingShot.display();
}


function mouseDragged() {
  if (r === 1) {
    Matter.Body.setPosition(this.ball, {x : mouseX, y : mouseY});
  }

}

function mouseReleased() {
  slingShot.fly();
  r = 2;
}

function keyPressed() {
  if (keyCode === 32) {
    r = 1;
    Matter.Body.setPosition(this.ball, {x : 85, y : 256.73})
    slingShot.attach(this.ball);
  }
}
