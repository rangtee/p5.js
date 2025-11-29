let x, y;
let fillColor;

function setup() {
  createCanvas(600, 400);
  x = 75;
  y = 240;
  fillColor = color('#009BF5');
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    fillColor = color('#73C883');
  }
  if (keyCode === DOWN_ARROW) {
    fillColor = color('#009BF5');
  }
   if (key === 's') {
    saveGif('mySketch', 10);
  }
}

function draw() {
  
  if (mouseIsPressed) {
    background(245, 162, 0, 40);
  } else {
    
    background('#F5A200');
  }
 
  if (keyIsDown(LEFT_ARROW)) {
    x -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 3;
  }

  fill(fillColor);
  stroke(0);
  strokeWeight(5);
  rect(x, y, 455, 180);

  line(x + 95, 300, x + 95, 450);
  line(x + 375, 300, x + 375, 450);

  fill(30);
  stroke(0);
  strokeWeight(5);
  ellipse(mouseX - 90, mouseY - 10, 40, 100);
  ellipse(mouseX + 90, mouseY - 10, 40, 100);
  arc(mouseX, mouseY - 30, 190, 200, radians(180), radians(360));

  fill('#F5D58C');
  stroke(0);
  strokeWeight(5);
  ellipse(mouseX, mouseY, 190, 200);

  fill(0);
  arc(mouseX, mouseY - 20, 180, 190, radians(180), radians(360));

  fill(255);
  stroke(0);
  strokeWeight(5);
  ellipse(mouseX - 55, mouseY + 5, 80, 80);
  ellipse(mouseX + 55, mouseY + 5, 80, 80);

  stroke(0);
  strokeWeight(5);
  line(mouseX - 15, mouseY + 5, mouseX + 15, mouseY + 5);
  line(mouseX - 15, mouseY + 70, mouseX + 15, mouseY + 70);
}


