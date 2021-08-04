class Ground{

    constructor(){
        
        this.ground = Bodies.rectangle(500,390,1000,20,{isStatic : true})
        World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,1000,20);
    }
}