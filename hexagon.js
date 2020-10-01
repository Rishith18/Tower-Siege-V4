class Hexagon{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(50,200,30);
        World.add(world, this.body);
        this.image = loadImage("hexagon.png");
      }
      display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,60,60);
        pop();
      }
}