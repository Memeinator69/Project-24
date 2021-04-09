class Rubber{
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        
        World.add(world, this.body);
      }
      display(){
      
        var pos = this.body.position
 
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        fill(40, 60, 40)
        ellipse(0,0,this.r,this.r)
        pop();
      }
}