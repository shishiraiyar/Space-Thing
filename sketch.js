// import { Triangle } from "./Triangle";

function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);
  frameRate(30)
  fill(220,60,180)
  strokeWeight(1)

  player = new Triangle(createVector(200,200), 45);
  offsetVector = createVector(0,0)
  

}

  
function draw() {
  background(220); 


  //KEEPS THE PLAYER IN THE MIDDLE OF THE MAP
  //offsetVector = getOffset(player.position) 
  //ALLOWS MAP TO BE LARGER THAN CANVAS

  getOffsetFancy(offsetVector, player.position)
  

 
  console.log(player.position.x, player.position.y)
  player.show(offsetVector)

  circle(400 - offsetVector.x,200 - offsetVector.y,25)
 

  for(bullet of player.firedBuls){
    bullet.updatePosition(deltaTime)
    bullet.show(offsetVector)
  }
 
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


function getOffsetFancy(offset, playerPosition){
  let xOnCanvas = playerPosition.x - offset.x
  let yOnCanvas = playerPosition.y - offset.y

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
