var num = 60;
var mx = [];
var my = [];

function setup() {
  createCanvas(720, 400);
  noStroke();
  fill(255, 255);
  for (var i = 0; i < num; i++) {
    mx.push(i);
    my.push(i);
  }
}

function draw() {
  background(237,34,93); 
  
  // Cycle through the array, using a different entry on each frame. 
  // Using modulo (%) like this is faster than moving all the values over.
  var which = frameCount % num;
  mx[which] = mouseX;
  my[which] = mouseY;
  
  for (var i = 0; i < num; i++) {
    // which+1 is the smallest (the oldest in the array)
    var index = (which+1 + i) % num;
    ellipse(mx[index], my[index], i, i);
  }
}