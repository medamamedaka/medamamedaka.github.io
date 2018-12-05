

//movement
var x=500;
var speed=2;
function setup(){
  createCanvas(1200,600);

}

function draw(){
  
  background(245,226,185);
 
  //bear ears and head
   strokeWeight(5);
   fill(232,151,70);
 ellipse(450,130,200,200);
 ellipse(750,130,200,200);
 ellipse(600,300,400,400);
  ellipse(600,430,400,180);
  
 noStroke();
 fill(232,151,70);
 ellipse(450,130,195,195);
 ellipse(750,130,195,195);
 
  fill(245,226,185);
 ellipse(450,130,110,110);
 ellipse(750,130,110,110);

 fill(232,151,70);
 ellipse(600,300,395,395);

 //muzzle
 fill(245,226,185);
 ellipse(600,440,140,120);
 stroke(0);

 //eyes
 fill(255,255,255);
 ellipse(500,350,130,130);
 ellipse(700,350,130,130);

//nose
 strokeWeight(15);
 strokeJoin(ROUND);
 triangle(590,400,610,400,600,405);

//mouth
 strokeWeight(5);
 line(600,405,600,470);
 noFill();
 arc(600,420,100,100,0,PI,OPEN);
 


 //moving eyes
fill(0);
  x=x+speed;
  ellipse(x,350,70,70);
 ellipse(x+200,350,70,70);
  if(x>530 || x<470){
    speed=-speed;
	
 }}