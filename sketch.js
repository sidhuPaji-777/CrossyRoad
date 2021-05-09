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
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  // Creating Logs
  for(var a = 0; a<40;a++)
  {
    logs = new Log(-8);
    logGroup1.add(logs.spt);
  }

  
  
}

function draw() {
  background("skyblue");
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

    cars = new Car(3);
    carGroup1.add(cars.spt);
   
    
  }
    
for(i=1;i<logGroup1.length;i++)
  { 
    if(logGroup1[i].x<0) 
    {
       logGroup1[i].x=width; 
    } 
  }
  
  
  
  drawSprites();
}

