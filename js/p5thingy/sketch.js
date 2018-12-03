/*
 * @name Regular Polygon
 * @description What is your favorite? Pentagon? Hexagon? Heptagon? No? 
 * What about the icosagon? The polygon() function created for this example is 
 * capable of drawing any regular polygon. Try placing different numbers into 
 * the polygon() function calls within draw() to explore.
 */
function setup() {
  createCanvas(720, 400);

}

function draw() {
  background(0);

  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount / 10);
  ellipse(0, 0, 20, 300); 
  pop();
    
  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount / 15);
  ellipse(0, 0, 20, 300); 
  pop();
  
  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount / 20);
  ellipse(0, 0, 20, 300); 
  pop();
    
  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount / 25);
  ellipse(0, 0, 20, 300); 
  pop();
  
  
  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount / 30);
  ellipse(0, 0, 20, 300); 
  pop();
    
  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount / 35);
  ellipse(0, 0, 20, 300); 
  pop();
  
    
  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount / 40);
  ellipse(0, 0, 20, 300); 
  pop();
  
    
  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount / 45);
  ellipse(0, 0, 20, 300); 
  pop();
  
  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount / 50);
  ellipse(0, 0, 20, 300); 
  pop();
    
  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount / 55);
  ellipse(0, 0, 20, 300); 
  pop();
  
    
  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount / 60);
  ellipse(0, 0, 20, 300); 
  pop();
    
  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount / 65);
  ellipse(0, 0, 20, 300); 
  pop();
  
    
  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount / 70);
  ellipse(0, 0, 20, 300); 
  pop();
    
  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount / 75);
  ellipse(0, 0, 20, 300); 
  pop();
  
    
  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount / 80);
  ellipse(0, 0, 20, 300); 
  pop();
    
  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount / 85);
  ellipse(0, 0, 20, 300); 
  pop();
  
    
  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount / 90);
  ellipse(0, 0, 20, 300); 
  pop();
      
  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount / 95);
  ellipse(0, 0, 20, 300); 
  pop();
  
  push();
  fill(240)
  translate(width*0.5, height*0.5);
  rotate(frameCount /100);
  ellipse(0, 0, 20, 300); 
  pop();
  
}

function ellipse(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}