// import { Bullet } from "./Bullet.js"

universalGravity = 100;

class Triangle{
  constructor(position,velocity,angle,height=30, colour = "#ee08dd"){
    this.colour = colour
    this.position = position;
    this.velocity = velocity
    this.angle = angle;
    this.height = height;
    this.speed = 10;
    
    this.reloadTime = 0.1;

    this.firedBullets = [];
  }

  left(){
    this.angle +=10;
  }

  right(){
    this.angle -=10;
  }

  updatePosition(timeStep){
    timeStep/=1000
    let velCp = this.velocity.copy()     
    this.position = p5.Vector.add(this.position, velCp.mult(timeStep));
  }

  doGravity(timeStep, planets){
    timeStep/=1000
    for (let planet of planets){

      let dirVect = p5.Vector.sub(planet.position, this.position)   
      if (dirVect.mag()<planet.radius){ ////TO AVOID DIVISION BY 0
          return
      }
      let magAcc = universalGravity*(planet.mass)/ dirVect.magSq()
      dirVect.normalize()
      let acc = p5.Vector.mult(dirVect, magAcc)
      this.velocity = p5.Vector.add(this.velocity, acc.mult(timeStep))
      
  }


  }


  forward(){
    this.velocity.x += this.speed*cos(this.angle)
    this.velocity.y -= this.speed*sin(this.angle)
  }

  backward(){
    this.velocity.x -= this.speed*cos(this.angle)
    this.velocity.y += this.speed*sin(this.angle) 
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
    this.firedBullets[this.firedBullets.length] = new Bullet(this.position, this.angle)
  }

  showBullets(){
    for(let bullet of this.firedBullets){
      bullet.updatePosition(deltaTime)
      bullet.show(offsetVector)
    }
  }

}




class Bullet{
  constructor(position, angle){
    this.position = position;
    this.angle = angle;
    this.speed = 500
    this.velocity = createVector(cos(angle), -sin(angle)).mult(this.speed)

    this.colour = "#000000"

    this.height = 5
  }

  updatePosition(timeStep){
    timeStep/=1000
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