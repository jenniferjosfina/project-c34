class Pendulum {
  constructor(x,y,color){    
  var options ={
      isStatic: false,
      restitution: 0.9,
      friction: 1.0,
      frictionAir: 0.0,
      slop: 1,
      inertia: Infinity
   }
   this.x =x;
   this.y=y;
   
   this.body = Bodies.rectangle(x,y,40,40, options);
   this.color = color;
   World.add(world, this.body);
  }

display(){
  var pos = this.body.position;
  var angle = this.body.angle;
  push();
  translate(pos.x, pos.y);
  rotate(angle);
   noStroke();
  fill("red");
  ellipse(0,0,60,60);
  pop();
}
}
