var cat,catimg1,catimg2,catimg3;
var bg,bgimg
var jerry,jerryimg1,jerryimg2,jerryimg3


function preload() {
    //load the images here
    bgimg = loadImage("garden.png");
    catimg1 = loadImage("cat1.png");
    jerryimg1 = loadImage("mouse1.png");
    catimg2 = loadAnimation("cat2.png","cat3.png");
    catimg3 = loadImage("cat4.png")
    jerryimg2 = loadAnimation("mouse2.png","mouse3.png");
    jerryimg3 = loadImage("mouse4.png")
}   

function setup(){
    createCanvas(1000,800);
    bg = createSprite(500,350,10,10);
    bg.addImage(bgimg)

    //create tom and jerry sprites here
    cat = createSprite(750,510,10,10);
    cat.addImage(catimg1);
    cat.scale = 0.2

    jerry = createSprite(100,510,10,10);
    jerry.addImage(jerryimg1);
    jerry.scale = 0.2
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
     if(cat.x - jerry.x < (cat.width/6+jerry.width)/6){
         cat.addAnimation("catRunning",catimg3);
         cat.changeAnimation("catRunning");
         cat.velocityX = 0;
         jerry.addImage("images",jerryimg3);
         jerry.changeAnimation("images")

      
        }  

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === RIGHT_ARROW){
     jerry.addAnimation("mouseTeasing",jerryimg2);
     jerry.changeAnimation("mouseTeasing");
     jerry.frameDelay = 25;
     cat.velocityX = -6;
     cat.addAnimation("catRunning",catimg2);        
     cat.changeAnimation("catRunning")

     } 
     if(keyCode === LEFT_ARROW){
        jerry.addAnimation("mouseTeasing",jerryimg2);   
        jerry.changeAnimation("mouseTeasing");
        jerry.frameDelay = 25;
        cat.velocityX = -6;
        cat.addAnimation("catRunning",catimg2);        
        cat.changeAnimation("catRunning")
        } 
}