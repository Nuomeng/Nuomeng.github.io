var img1;
var img2;
function preload(){
  img1 = loadImage("https://myimage6002.oss-us-east-1.aliyuncs.com/dian%402x.png");  // Load the image
	img2 = loadImage("https://myimage6002.oss-us-east-1.aliyuncs.com/dian%402x.png");
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
