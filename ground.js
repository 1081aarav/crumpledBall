class Ground{

    constructor(x, y, width, height){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        };
        this.body=Bodies.rect(x, y, width, height, options);
        this.width=width;
        this.height=height;
    }
        display(){
            this.width=this.body.width;
            push();
            translate(pos.x, pos.y);
            rectMode(CENTER);
            fill("blue");
           rect(0, 0,width,height);
            pop();       
    }
}
