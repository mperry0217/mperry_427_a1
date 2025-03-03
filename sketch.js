let anchorY = 720;


function setup() {
  createCanvas(1400, 800);
}

function draw() {
  background(146,226,255);
  noStroke();

  //bush
  fill(71,184,46);
  rect(0,500,width,height);
  circle(0,500,100);
  circle(100,500,100);
  circle(200,500,100);
  circle(300,500,100);
  circle(400,500,100);

  circle(1400,500,100);
  circle(1300,500,100);
  circle(1200,500,100);
  circle(1100,500,100);
  circle(1000,500,100);

  fill(255);
  rect(0,650,width,75)

  //front legs
  fill(255,135,7);
  rect(300,525,250,75, 100,0,50,20);
  
  fill(255,161,60);
  rect(300,575,250,75, 100,0,50,20);

  //leg stripes
  fill(255,135,7);
  rect(420,575,30,75);
  rect(360,575,30,75);
    
  //body
  fill(255,161,60);
  ellipse(730,500,600,300);

  //neck
  push();
  angleMode(DEGREES);
  rotate(35);
  square(500,-25,200);
  pop();

  //head
  circle(400,350,280);

  //back leg
  fill(255,135,7);
  circle(900,500,275);
  rect(700,600,250,75, 100,0,50,20);

  //fence
  fill(255);
  rect(-50,600,200,height, 50,50);
  rect(170,600,200,height, 50,50);
  rect(390,600,200,height, 50,50);
  rect(610,600,200,height, 50,50);
  rect(830,600,200,height, 50,50);
  rect(1050,600,200,height, 50,50);
  rect(1270,600,200,height, 50,50);

  //expression function if/else
  // angryFace();
  if (mouseX > 430 && mouseX < 1030 && mouseY > 350 && mouseY < 650 && !mouseIsPressed){
    happyFace();
    tailUp();
  } else if (mouseX > 430 && mouseX < 1030 && mouseY > 350 && mouseY < 650 && mouseIsPressed) {
    angryFace();
    tailDown();
  } else {
    startFace();
    tailDown();
  }

  fill(0);
  noStroke();
  textSize(38);
  text('Pet the cat!', 400,700);
}

function startFace(){
  fill(255,161,60);

  //ears
  triangle(300,260, 340,250, 320,150);
  triangle(400,260, 480,250, 440,150);

  //mouth
  fill(255,135,7);
  ellipse(350,400,100,80);

  push();
  angleMode(DEGREES);
  stroke(0);
  strokeWeight(3);

  arc(320,380,50,50,0,90,OPEN)
  arc(370,380,50,50,90,180,OPEN)
  pop();

  fill(255,178,206);
  triangle(335,370, 355,370, 345,380);

  //eyes
  fill(178,210,255);
  circle(300,345,50);

  fill(178,255,196);
  circle(400,345,50)

  fill(0);
  ellipse(300,345,20,40);
  ellipse(400,345,20,40);

  //eyebrows
  fill(255,135,7);
  circle(380,300,40);
  circle(320,300,40);
}

function happyFace(){
  fill(255,161,60);

  //ears
  triangle(300,260, 380,250, 320,150);
  triangle(400,260, 480,250, 460,150);

  //mouth
  fill(255,135,7);
  ellipse(400,400,100,80);

  push();
  angleMode(DEGREES);
  stroke(0);
  strokeWeight(3);

  arc(375,380,50,50,0,180,OPEN)
  arc(425,380,50,50,0,180,OPEN)
  pop();

  fill(255,178,206);
  triangle(390,370, 410,370, 400,380);

  //eyes HAPPY
  push();
  angleMode(DEGREES);
  strokeWeight(5);
  fill(255,161,60);

  stroke(178,210,255);
  arc(340,350,50,50, 250,0);

  stroke(178,255,196);
  arc(450,350,50,50, 180,300);
  pop();

  //eyebrows
  fill(255,135,7);
  circle(420,300,40);
  circle(370,300,40);
}

function angryFace(){
  fill(255,161,60);

  //ears ANGRY
  triangle(300,280, 380,250, 225,200);
  triangle(400,260, 500,300, 555,200);

  //mouth
  fill(255,135,7);
  ellipse(400,400,100,80);

  fill(255,178,206);
  square(375,390,50)

  //teeth
  fill(255);
  triangle(375,440, 385,440, 380,420);
  triangle(415,440, 425,440, 420,420);

  push();
  angleMode(DEGREES);
  fill(255,135,7);
  stroke(0);
  strokeWeight(3);

  arc(375,380,50,50,0,180,OPEN)
  arc(425,380,50,50,0,180,OPEN)
  pop();

  fill(255,178,206);
  triangle(390,370, 410,370, 400,380);

  //eyes ANGRY
  fill(178,210,255);
  circle(340,350,50);

  fill(178,255,196);
  circle(450,350,50)

  fill(0);
  ellipse(340,350,10,40);
  ellipse(450,350,10,40);

  //eyebrows ANGRY
  fill(255,135,7);
  circle(420,320,40);
  circle(370,320,40);
}

//tail

function tailDown(){
  stroke(255,135,7);
  strokeWeight(50);
  noFill();
  bezier(1000,450, 1500,550, 1000,800, 900,anchorY);

  // anchorY++;
  // if (anchorY > 720) {
  //   anchorY--;
  // } else if (anchorY < 600) {
  //   anchorY++;
  // }
}

function tailUp(){
  stroke(255,135,7);
  strokeWeight(50);
  noFill();
  bezier(1000,450, 1500,550, 1200,100, 900,200);
}