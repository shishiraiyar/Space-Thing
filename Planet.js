class Planet{//Stationary bodies
    constructor(mass, position, colour="#D0D000"){
        this.colour = colour
        this.mass = mass
        this.position = position
        this.density = 3
        this.radius = sqrt((this.mass/this.density)/PI)
    }
    
    show(offsetVector){
        fill(this.colour)
        circle(this.position.x - offsetVector.x, this.position.y - offsetVector.y, this.radius)
        fill("#ffffff")
    }

    updateVelocity(timeStep){
        for (let i=0; i<allBodies.length; i++){
            if(allBodies[i] != this){
                let otherBody = allBodies[i]
                let dirVect = p5.Vector.sub(otherBody.position, this.position)   
                if (dirVect.mag()<5){ ////TO AVOID DIVISION BY 0
                    return
                }
                let force = universalGravity*(otherBody.mass * this.mass)/ dirVect.magSq()
                dirVect.normalize()
                let acc = p5.Vector.mult(dirVect, force/this.mass)
                this.velocity = p5.Vector.add(this.velocity, acc.mult(timeStep))
            }
        }
    }
}