// import { Bullet } from "./Bullet.js"

class Triangle{
    constructor(position,angle,height=30, colour = "#ee08dd"){
        this.colour = colour
        this.position = position;
        this.angle = angle;
        this.height = height;
        this.speed = 10;
        
        this.reloadTime = 0.1;

        this.firedBuls = [];
    }

    left(){
        this.angle +=10;
    }

    right(){
        this.angle -=10;
    }

    forward(){
        this.position.x += this.speed*cos(this.angle)
        this.position.y -= this.speed*sin(this.angle)
    }

    backward(){
        this.position.x -= this.speed*cos(this.angle)
        this.position.y += this.speed*sin(this.angle) 
    }

    show(offsetVector){
        fill(this.colour)
        let x1 = cos(this.angle)*this.height/2 + this.position.x
        let y1 = -sin(this.angle)*this.height/2 + this.position.y

        let x2 = cos(this.angle + 120)*this.height/2 + this.position.x
        let y2 = -sin(this.angle + 120)*this.height/2 + this.position.y

        let x3 = cos(this.angle + 240)*this.height/2 + this.position.x
        let y3 = -sin(this.angle + 240)*this.height/2 + this.position.y
        // -sin coz 4th quad

        triangle(x1 - offsetVector.x, y1 - offsetVector.y, x2 - offsetVector.x, y2 - offsetVector.y, x3 - offsetVector.x, y3 - offsetVector.y)
        fill("#ffffff")

    }

    fire(){
        this.firedBuls[this.firedBuls.length] = new Bullet(this.position, this.angle)
    }

}


class Bullet{
    constructor(position, angle){
        this.position = position;
        this.angle = angle;
        this.speed = 0.5
        this.velocity = createVector(cos(angle), -sin(angle)).mult(this.speed)

        this.colour = "#000000"

        this.height = 5
    }

    updatePosition(timeStep){
        let velCp = this.velocity.copy()     
        this.position = p5.Vector.add(this.position, velCp.mult(timeStep));
    }

    show(offsetVector){
        fill(this.colour)
        let x1 = cos(this.angle)*this.height/2 + this.position.x
        let y1 = -sin(this.angle)*this.height/2 + this.position.y

        let x2 = cos(this.angle + 120)*this.height/2 + this.position.x
        let y2 = -sin(this.angle + 120)*this.height/2 + this.position.y

        let x3 = cos(this.angle + 240)*this.height/2 + this.position.x
        let y3 = -sin(this.angle + 240)*this.height/2 + this.position.y
        // -sin coz 4th quad

        triangle(x1 - offsetVector.x, y1 - offsetVector.y, x2 - offsetVector.x, y2 - offsetVector.y, x3 - offsetVector.x, y3 - offsetVector.y)
        fill("#ffffff")

    }



}