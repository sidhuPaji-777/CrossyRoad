var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}
 
function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();

  // Creating Logs
  for(var a = 0; a<40;a++)
  {
    logs = new Log(-8);
    logGroup1.add(logs.spt);
  }

  // making for loop for muliple tasking
    for(var i = 0; i<6;i++)
    {
      var bottomGrass1 = createSprite(683, height-50-(i*400), width, grassHeight);
      bottomGrass1.shapeColor = "green";
      // Creating roads
      if(i%2===0)
      {
          var road = createSprite(683, height-150-(i*400)-grassHeight, width,300,);
          road.shapeColor = "black";
        }
        // one issue is of car, that car is now very slow and spwaning very low 
        cars = new Car(3);
        carGroup1.add(cars.spt);
        
        
        
      }
  
  player = new Player(width/2, height-25);
}

function draw() {
  background("skyblue");
  
  
  
  for(i=1;i<logGroup1.length;i++)
  { 
    if(logGroup1[i].x<0) 
    {
      logGroup1[i].x=width; 
    } 
  }
  
  
  translate(0, -player.spt.y+height-150);
  
  
  
  
  playerMovement();
  drawSprites();
}

// Making function for player movement

function playerMovement()
{
  if(keyDown("up"))
  {
    player.move(0, -1);
    // player.velocityY = 2;
  }

  else if(keyDown("down"))
  {
    player.move(0, 1);
  }

  else if(keyDown("right"))
  {
    player.move(1, 0);
  }

  else if(keyDown("left"))
  {
    player.move(-1, 0);
  }
}
