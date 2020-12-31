class Projectile{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.00,
            length:10,
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(myworld,this.body);
    }

    release(){
        this.body.bodyA = null;  
    }

    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(1);
            stroke("grey");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}