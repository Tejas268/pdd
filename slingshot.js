class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            'stiffness' : 0.04,
            'length' : 10,
            bodyA : bodyA,
            pointB : pointB
        }
        this.sling1 = loadImage("sling1.png");
        this.sling2 = loadImage("sling2.png");
        this.sling3 = loadImage("sling3.png");
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    fly () {
        this.slingshot.bodyA = null;
    }

    attach (body) {
        this.slingshot.bodyA = body;
    }

    display () {
        push();
        scale(0.85,0.85);
        image(this.sling1, 100, 350);
        image(this.sling2, 70, 310);
        pop();
        if (this.slingshot.bodyA) {
            push();
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.slingshot.pointB;

            strokeWeight(5);
            stroke(48,22,8)
            line(pointA.x, pointA.y, pointB.x - 30, pointB.y);
            line(pointA.x, pointA.y, pointB.x + 10, pointB.y);
            image(this.sling3, pointA.x - 20, pointA.y - 5);
            pop();
        }
    }
}