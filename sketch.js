
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//declare variables
var ground;
var border1,border2,border3,border4;
var divisionHeight = 300;
var width = 480;
var particle;

var particles = [];
var plinkos = [];
var divisions = [];

function preload()
{
	//add images
}

function setup() {
	createCanvas(480,800);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.

  border1 = new Ground(240,3,480,6);
  border2 = new Ground(240,797,480,6);
  border3 = new Ground(3,400,6,800);
  border4 = new Ground(477,400,6,800);

  ground = new Ground(240,784,480,20);

  //create divisions
  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k,800-(divisionHeight/2),10,divisionHeight));
  }

  for(var j=45; j <=  width; j = j + 50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 20; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 45; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 20; j <=width-10; j=j+50) {   
    plinkos.push(new Plinko(j,375));
  }

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  //add particles to array
  if(frameCount%30 === 0){
    particles.push(new Particle(random(50, 440),30,10));
  }
 
  //display particles
  for(var m = 0; m<particles.length; m++){
    particles[m].display();
  }
  
  //display divisions
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  
  fill("red");
  border1.display();
  border2.display();

  fill("white");
  ground.display();

  fill("red");
  border3.display();
  border4.display();

  drawSprites();

}
