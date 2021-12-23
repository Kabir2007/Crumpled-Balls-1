class paper{

constructor(x,y){

var options = {
 
isStatic : false,
restitution : 0.3,
friction : 0.5,
density : 0.6

}

this.body = Matter.Bodies.rectangle(x,y,50,50,options);




World.add(world,this.body);

}

display(){

    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("yellow");
    ellipseMode(CENTER);
    ellipse( 0, 0, 50, 50);
    pop();

}

}