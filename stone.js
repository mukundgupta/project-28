class Stone {
    constructor(x, y, diameter) {
        var options = {
            isStatic: false,
          restitution:0 ,
            friction:1,
            density:1.0
        }
        this.diameter = diameter
        this.body = Bodies.circle(x, y,this.diameter/3, options);
        this.x = x;
        this.y = y;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image, 0, 0, this.diameter,this.diameter);
        pop();
      }
}