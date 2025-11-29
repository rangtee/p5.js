let c1_colors = ['#DB3827', '#DB7727', '#DB5928', '#DB2C5E'];
let c2_colors = ['#20DB26', '#21DB66', '#67DB21', '#21DBA6'];
let c3_colors = ['#2D1DDB', '#1D49DB', '#1D85DB', '#6B1DDB'];
let c4_colors = [];

function setup() {
  createCanvas(600, 400);
  noStroke();

  c4_colors = [color(250), color(200), color(150), color(100)];
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('myAbstractArt_1mb', 10, { units: 'seconds', delay: 500 });
  }
}

function draw() {
  background(20);
  noStroke();

  let time = frameCount * 0.015;
  let pulse2 = map(sin(time + PI), -1, 1, -40, 40);    
  let pulse3 = map(sin(time + PI / 2), -1, 1, -40, 40); 


  let colorSpeed = 180;
  let offset = floor(frameCount / colorSpeed);


  fill(c1_colors[(0 + offset) % 4]);
  arc(0, 0, 350, 350, radians(0), radians(90));
  fill(c1_colors[(1 + offset) % 4]);
  arc(0, 0, 250, 250, radians(0), radians(90));
  fill(c1_colors[(2 + offset) % 4]);
  arc(0, 0, 150, 150, radians(0), radians(90));
  fill(c1_colors[(3 + offset) % 4]);
  arc(0, 0, 50, 50, radians(0), radians(90));

  fill(c2_colors[(0 + offset) % 4]);
  arc(600, 0, 340 + pulse2, 340 + pulse2, radians(90), radians(180));
  fill(c2_colors[(1 + offset) % 4]);
  arc(600, 0, 240 + pulse2, 240 + pulse2, radians(90), radians(180));
  fill(c2_colors[(2 + offset) % 4]);
  arc(600, 0, 140 + pulse2, 140 + pulse2, radians(90), radians(180));
  fill(c2_colors[(3 + offset) % 4]);
  arc(600, 0, 40 + pulse2, 40 + pulse2, radians(90), radians(180));
  
  fill(c3_colors[(0 + offset) % 4]);
  arc(0, 400, 350 + pulse3, 350 + pulse3, radians(270), radians(360));
  fill(c3_colors[(1 + offset) % 4]);
  arc(0, 400, 250 + pulse3, 250 + pulse3, radians(270), radians(360));
  fill(c3_colors[(2 + offset) % 4]);
  arc(0, 400, 150 + pulse3, 150 + pulse3, radians(270), radians(360));
  fill(c3_colors[(3 + offset) % 4]);
  arc(0, 400, 50 + pulse3, 50 + pulse3, radians(270), radians(360));

  fill(c4_colors[(0 + offset) % 4]);
  arc(600, 400, 340, 340, radians(180), radians(270));
  fill(c4_colors[(1 + offset) % 4]);
  arc(600, 400, 240, 240, radians(180), radians(270));
  fill(c4_colors[(2 + offset) % 4]);
  arc(600, 400, 140, 140, radians(180), radians(270));
  fill(c4_colors[(3 + offset) % 4]);
  arc(600, 400, 40, 40, radians(180), radians(270));
}