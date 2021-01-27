var sur1,sur2,sur3,sur4,ball;
var music,Sound,backSound,backSound2;
var block1,block2,block3,block4;

function preload(){
    music = loadSound("music.mp3");
    backSound=loadSound("backSound.wav");
    backSound2=loadSound("backSound2.mp3");
    Sound=loadSound("music.wav")
}


function setup(){
    createCanvas(750,600);
    sur1=createSprite(150,587,70,15);
    sur1.shapeColor="red";
    sur2=createSprite(300,587,70,15);
    sur2.shapeColor="blue";
    sur3=createSprite(450,587,70,15);
    sur3.shapeColor="green"
    sur4=createSprite(600,587,70,15);
    sur4.shapeColor="yellow";
    ball=createSprite(200,300,30,30);
    ball.velocityX=7
    ball.velocityY=-6; 
    backSound.play();
    block1=createSprite(1,300,1,600);
    block2=createSprite(749,300,1,600);
    block3=createSprite(375,1,750,1);
    block4=createSprite(375,599,750,1);
    
}


function draw() {
    background(0);
    
   if(sur1.isTouching(ball)&& ball.bounceOff(sur1)){
       ball.shapeColor="red";
       backSound.stop();
       music.stop();
       Sound.stop();
       backSound2.play();
   }
   if(sur2.isTouching(ball)&& ball.bounceOff(sur2)){
       ball.shapeColor="blue";
       backSound.stop();
       backSound2.stop();
       Sound.stop();
       music.play();
   }
   if(sur3.isTouching(ball)&& ball.bounceOff(sur3)){
       ball.shapeColor="green";
       music.stop();
       backSound.stop();
       Sound.play();
       backSound2.stop();
   }
   if(sur4.isTouching(ball)&& ball.bounceOff(sur4)){
       ball.shapeColor="yellow";
       Sound.stop();
       music.stop();
       backSound.play();
       backSound2.stop();
   }
   if(block1.isTouching(ball)||block2.isTouching(ball)||block3.isTouching(ball)){
       ball.bounceOff(block1);
       ball.bounceOff(block2);
       ball.bounceOff(block3);
   }
   if(block4.isTouching(ball)&&ball.bounceOff(block4)){
       Sound.stop();
       music.stop();
       backSound.stop();
       backSound2.stop();
   }
    drawSprites();
}
