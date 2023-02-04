
function setup() {
  angleMode(DEGREES);
  canvasHeight = windowHeight//400 set to 400 for old stuff
  canvasWidth = windowWidth//400
  createCanvas(canvasWidth, canvasHeight);
  frameRate(30)
  fill(220,60,180)
  strokeWeight(1)

  player = new Triangle(createVector(200,200), createVector(0,0),0,20);

  planets = []
  planets[0] = new Planet(50000, createVector(000,200), "#42f572")
  planets[1] = new Planet(50000, createVector(400,200), "#4287f5")
  offsetVector = createVector(0,0)

}

function windowResized(){
  canvasWidth = windowWidth
  canvasHeight = windowHeight
  resizeCanvas(canvasWidth, canvasHeight);

}

function draw() {
  background(220); 
  //console.log(player.velocity.mag())
  console.log(deltaTime)
  for (let planet of planets){
    planet.show(offsetVector)

  }
  


  //KEEPS THE PLAYER IN THE MIDDLE OF THE MAP
  //offsetVector = getOffset(player.position) 
  //ALLOWS MAP TO BE LARGER THAN CANVAS

  //getOffsetFancy(offsetVector, player)

  getCircularOffset(offsetVector, player)

  player.doGravity(deltaTime, planets)
  
  player.updatePosition(deltaTime)

 
  player.show(offsetVector)

  //drawRandomCircles()
  

  player.showBullets()
 

  
 
  if (keyIsDown(68)){
    player.right()
  }

  if (keyIsDown(65)){
    player.left()
  }

  if (keyIsDown(87)){
    player.forward()
  }

  if (keyIsDown(83)){
    player.backward()
  }

  if (keyIsDown(SHIFT)){
    player.fire()
  }
}

//gun
//procedurally generated map
//follower thing
//gravity


function getOffsetFancy(offset, player){
 
  let xOnCanvas = player.position.x - offset.x
  let yOnCanvas = player.position.y - offset.y

  if (xOnCanvas > 205)
    offset.x +=  (player.speed)*(xOnCanvas - 200)/150   //idek how it works but it does 

  if (xOnCanvas < 195)
    offset.x -= (player.speed)*(200 - xOnCanvas)/150

  if (yOnCanvas > 205)
    offset.y +=  (player.speed)*(yOnCanvas - 200)/150   //idek how it works but it does (now ik)

  if (yOnCanvas < 195)
    offset.y -=  (player.speed)*(200 - yOnCanvas)/150
  
    //150 represents how far off the centre can the player go

}

function getCircularOffset(offset, player){ //Make it depend on acceleration?
  //When player has 0 acceleration, stays at the centre. 
 offset.x = player.position.x - canvasWidth/2
 offset.y = player.position.y - canvasHeight/2
  

}

function drawRandomCircles(){
  for(let i=0; i<100; i++){
    for(let j=0;j<100;j++)
      circle(0 + i*50 -offsetVector.x,400 - j*50 - offsetVector.y, 15 )
  }
  circle(400 - offsetVector.x,200 - offsetVector.y,25)
  circle(600 - offsetVector.x,300 - offsetVector.y,35)

  circle(-100 - offsetVector.x,300 - offsetVector.y,20)
}

//Old function
// function getOffset(playerPosition){
//   offSet = createVector(0,0)
//   if(playerPosition.x >=300){
//     offSet.x = playerPosition.x - 300
//   }
//   else if (playerPosition.x <=100){
//     offSet.x = playerPosition.x - 100
//   }
//   else
//     offSet.x = 0

//   if(playerPosition.y >=300){
//     offSet.y = playerPosition.y - 300
//   }
//   else if (playerPosition.y <=100){
//     offSet.y = playerPosition.y - 100
//   }
//   else
//     offSet.y = 0

//   return offSet;
// }
