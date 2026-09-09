// projeto 4 - Adicionando textos
function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  if(mouseIsPressed) {
    textSize(30);
    fill("white");
    text("BIBs", mouseX, mouseY);
  }
}