function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background('#F5A200');

  stroke(0);
  strokeWeight(5);

  fill('#009BF5');
  rect(75, 240, 455, 180);

  line(170, 300, 170, 450); 
  line(450, 300, 450, 450); 

  fill(30);
  ellipse(210, 140, 40, 100); 
  ellipse(390, 140, 40, 100); 
  arc(300, 120, 190, 200, radians(180), radians(360)); 

  fill('#F5D58C');
  ellipse(300, 150, 190, 200);

  fill(0);
  arc(300, 130, 180, 190, radians(180), radians(360)); 

  fill(255);
  ellipse(245, 155, 80, 80); 
  ellipse(355, 155, 80, 80); 

  line(285, 155, 315, 155); 
  line(285, 220, 315, 220);
}