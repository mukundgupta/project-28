class Mango {
    constructor(x, y, diameter) {
        var options = {
            isStatic: true,
          restitution:0 ,
            friction:1,
            density:1.0
        }
        this.diameter = diameter
        this.body = Bodies.circle(x, y, this.diameter/2, options);
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.diameter, this.diameter);
        pop();
      }
}