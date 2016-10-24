var x = 320;
var y = 235;
var speed = 3;
var speedb = 0;
	

function preload() {
  img = loadImage('battersbox.jpg');
  mySound = loadSound('Cheer.mp3');
  image2 = loadImage('Bat.jpg');
  image3 = loadImage('baseball.jpg');
}

function setup() {
  createCanvas(600, 600);
  img.loadPixels();
  image2.loadPixels();
  image3.loadPixels();

}

function draw() {
  background(220);
  image(img, 0, 0, 650, 500);
  baseball();
  pitch();
  returnball();
  bat();
  swing();
}

function baseball() {
  fill(255);
  ellipse(x, y, 25, 25);
  image(image3,x-15,y-10,25,25); 
}

function pitch() {
  y = y + speed;
  x = x + speedb;
  if (y >= height) {
    y = 235;
  }

}

function returnball() {
  if (x > 600 || x < 0 || y > 600 || y < 0) {
    baseball();
    x = 320;
    y = 235;
    speed = 3;
    speedb = 0;
  }
}

function bat() {
  translate(135, 400);
  rotate(mouseY / 600.0);
  fill(100, 100, 100);
  rect(40, 30, 160, 20);
  print(mouseY); 
  image(image2, 40, 30, 160, 20);
}

function swing() {
    d = dist(x, y, x, 430);
  if (d < 1 && mouseY/100 < 0.25) {
    mySound.play(); 
    speed = speed * random(-4, -1);
    speedb = speedb + random(-10, 5);
  }
}
