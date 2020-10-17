const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var tree,tree1;
var boy;
var mango1,mango2,mango3,mango4,mango4,mango6,mango7,mango8,mango9,mango11,mango12,mango13,mango14;
var stone1;

function preload()
{
	tree = loadImage("tree.png")
	boyImage = loadImage("boy.png")
}

function setup() {
  createCanvas(1000, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(600,700,1200,10)
stone1 = new Stone(100,540,50)


sling1 = new SlingShot(stone1.body,{x: 100,y: 550})

mango1 = new Mango(700,415,50,50)
mango2 = new Mango(723,400,50,20)
mango3 = new Mango(794,420,50,50)
mango4= new Mango(687,475,50,50)
mango5 = new Mango(567,390,50,50)
mango6 = new Mango(850,320,50,50)
mango7 = new Mango(930,400,50,50)
mango8= new Mango(780,380,50,50)
mango9 = new Mango(890,408,50,50)
mango10 = new Mango(840,380,50,50)
mango11 = new Mango(730,325,50,50)
mango12 = new Mango(764,320,50,50)
mango13 = new Mango(890,310,50,50)
mango14 = new Mango(810,300,50,50)


	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine)
  imageMode(CENTER)
  image(tree,780,450,500,500)
  image(boyImage,150,621,200,200);
    ground.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);
  detectCollision(stone1,mango9);
  detectCollision(stone1,mango10);
  detectCollision(stone1,mango11);
  detectCollision(stone1,mango12);
  detectCollision(stone1,mango13);
  detectCollision(stone1,mango14);
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling1.fly();
}

function detectCollision(Lstone,Lmango){
  stoneBodyPosition = Lstone.body.position
mangoBodyPosition = Lmango.body.position
console.log(Lmango.diameter + Lstone.diameter)
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
console.log(distance)
if (distance<=Lmango.r+Lstone.r) {
Matter.Body.setStatic(Lmango.body,false)
}
}
