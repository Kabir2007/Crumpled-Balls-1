const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbin1,dustbin2,dustbin3;
var ground1;
var paper1;

function setup() {

createCanvas(800,500);

engine = Engine.create();
world = engine.world;

ground1 = new ground(400,490);

paper1 = new paper(100,340);

dustbin1 = new dustbin(694,425,10,110);	
dustbin2 = new dustbin(598,475,180,10);	
dustbin3 = new dustbin(510,425,10,110);	

}


function draw() {
background("black");

Engine.update(engine);

dustbin1.display();
dustbin2.display();
dustbin3.display();

ground1.display();

paper1.display();


}

function keyPressed() {

if(keyCode === UP_ARROW){
     
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-70})   
    
}
    
}



