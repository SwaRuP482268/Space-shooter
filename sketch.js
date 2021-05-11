var Oship,Eship,Fship;
var OImg,EImg,FImg;
var Fball,FBImg;
var Egroup,Fgroup;

function preload() {
  OImg=loadImage("Space ship.png");
  EImg=loadImage("Espaceship.jfif");
  FImg=loadImage("Fship.jfif");
  FBImg=loadImage("Fireball.jfif");
}


function setup() {
  createCanvas(800,600);

  Fball=createSprite(400,550,50,50);
  Fball.addImage(FBImg);
  Fball.scale=0.1;
 // Fball.visible=false;
   
  Oship=createSprite(400,550,50,50);
  Oship.addImage(OImg);
  Oship.scale=0.5;
  //Oship.visible=false;
 
  Egroup=createGroup();
  Fgroup=createGroup();

  
}

function draw() {
  background("black");
  
  Oship.x=mouseX;

  Fball.x=Oship.x;

  enemy();
  friend();

  if(keyDown("space")){

    Fball.velocityY=-8;
  }

  if(Egroup.isTouching(Fball) || Fball.isTouching(Egroup)){

    Eship.destroy();
    Fball.destroy();
  }

  if(Fgroup.isTouching(Fball) || Fball.isTouching(Fgroup)){

    
    Egroup.visible=false;
    Fgroup.visible=false;
    Fball.visible=false;
    Oship.visible=false;
    Egroup.destroy();
    Fball.destroy();
    Fgroup.destroy();

    text("Game Over",400,300);


  }
  
  drawSprites();
}

function enemy(){

  if(frameCount %50===0){

    Eship=createSprite(400,100,30,30);
    Eship.y=Math.round(random(100,400));
    Eship.x=Math.round(random(0,800));
    Eship.addImage(EImg);
    Eship.scale=0.3;
    Egroup.add(Eship);

  }



}

function friend(){
  
  if(frameCount %100===0){
    
    Fship=createSprite(300,200,30,30);
    Fship.y=Math.round(random(100,400));
    Fship.x=Math.round(random(0,800));
    Fship.addImage(FImg);
    Fship.scale=0.3;
    Fgroup.add(Fship);
  }

}

