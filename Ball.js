class Ball{

    constructor(x,y){

     var options={
         'isStatic':false,
         'restitution':0.3,
         'friction':0.2,
         'density':1.2
     }

     this.body = Bodies.circle(x,y,20,options);
     this.radius = 150;
     this.image = loadImage("paper image.png");

     World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("pink");
        image(this.image,0,0,this.radius);
        pop();
    }
    }
