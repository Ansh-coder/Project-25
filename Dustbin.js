class Dustbin{
    constructor(x,y){
        this.image = loadImage("dustbingreen.png");
        this.width = 200;
        this.height = 100;
        this.thickness = 20;
        this.angle = 0;
        this.bottombody = Bodies.rectangle (x,y,this.width,this.thickness,{isStatic:true})
        this.leftbody = Bodies.rectangle(x-this.width/2, y-this.height/2,this.thickness,this.height,{isStatic:true})
        this.rightbody = Bodies.rectangle(x+this.width/2, y-this.height/2,this.thickness,this.height,{isStatic:true})
        Matter.Body.setAngle(this.leftbody, this.angle);
        Matter.Body.setAngle(this.rightbody,-1* this.angle);
        World.add(world,this.bottombody)
        World.add(world,this.leftbody)
        World.add(world,this.rightbody)
    }
    display(){
        var bottompos= this.bottombody.position
        var leftpos=this.leftbody.position;
        var rightpos=this.rightbody.position;

        push()
         translate(leftpos.x, leftpos.y);
         rectMode(CENTER) //strokeWeight(4);
          angleMode(RADIANS)
           fill(255) 
           stroke(255)
           rotate(this.angle)
    //        rect(0,0,this.thickness, this.height);
            pop()

            push()
            translate(rightpos.x, rightpos.y);
            rectMode(CENTER) //strokeWeight(4);
             angleMode(RADIANS)
              fill(255) 
              stroke(255)
//              rotate(-1*this.angle)
  //             rect(0,0,this.thickness, this.height);
               pop()

               push()
               translate(bottompos.x, bottompos.y);
               rectMode(CENTER) //strokeWeight(4);
                angleMode(RADIANS)
                 fill(255) 
                 stroke(255)
                // rotate(this.leftbody.angle)
                imageMode(CENTER)
                image(this.image,0,-this.height/2,this.width,200);
    //              rect(0,0,this.width, this.thickness);
                  pop()
    }
}