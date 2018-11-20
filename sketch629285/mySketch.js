var img1;
var img2;
function preload(){
  img1 = loadImage("data/dian@2x.png");  // Load the image
	img2 = loadImage("data/heng@2x.png");
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	background("000");

}

function draw() {

	keyPressed();
}

function keyPressed(){
  if (keyCode === LEFT_ARROW) {
	image(img1, 100, 150);
}
	if (keyCode === RIGHT_ARROW) {
image(img2, 250, 150);
}

}
