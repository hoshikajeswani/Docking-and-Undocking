var spacecraft,iss,spacebgI,issI, spacecraft1I, spacecraft2I, spacecraft3I, spacecraft4;
var hasdocked=false;

function preload(){
  spacebgI = loadImage("spacebg.jpg")
  spacecraft1I = loadImage("spacecraft1.png")
  spacecraft2I = loadImage("spacecraft2.png")
  spacecraft3I = loadImage("spacecraft3.png")
  spacecraft4I = loadImage("spacecraft4.png")
  issI = loadImage("iss.png")

}


function setup() {
  createCanvas(600,350);
  spacecraft=createSprite(285, 240);
  spacecraft.addImage(spacecraft1I)
  spacecraft.scale=0.2
  iss = createSprite(330, 130)
  iss.addImage(issI)
  iss.scale=0.35

  
}

function draw() {
  background(spacebgI); 

  if(!hasdocked){
    spacecraft.x += random(-1,1)
  }

  if(keyDown(UP_ARROW)){
    spacecraft.y = spacecraft.y-2
    
  }
  
  if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(spacecraft1I)
  }

  if(keyDown(LEFT_ARROW)){
    spacecraft.x = spacecraft.x+1
    spacecraft.addImage(spacecraft3I)

  }

  if(keyDown(RIGHT_ARROW)){
    spacecraft.x = spacecraft.x+1
    spacecraft.addImage(spacecraft2I)
  }
  
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasdocked= true;
    textSize(25)
    fill("white")
    text("Docking Succesful",200,300)
  }
  
  drawSprites();
}