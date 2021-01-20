class Paper{

    constructor(x, y, r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        };
        this.body=Bodies.circle(x, y, r, options);
        this.r=r;
    }
        display(){
            this.r=this.body.radius;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            circleMode(CENTER);
            fill("pink");
            circle(0, 0, r);
            pop();       
    }
}
