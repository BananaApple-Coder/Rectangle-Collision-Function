var sr1, sr2, sr3, sr4, mr

function setup() {
  createCanvas(windowWidth,windowHeight);
  sr1 = createSprite(width/2, height/2, width/24, height/10);
  sr2 = createSprite(width/9, height/10, width/10, height/50);
  sr3 = createSprite(width/4, height/3, width/35, height/7);
  sr4 = createSprite(width/2, height/7, width/16, height/5);
  mr = createSprite(width, height, width/15, height/27);
  sr1.shapeColor = "red"
  sr2.shapeColor = "red"
  sr3.shapeColor = "red"
  sr4.shapeColor = "red"
  mr.shapeColor = "red"
}

function draw() {
  background(0,0,0); 
  mr.x = World.mouseX
  mr.y = World.mouseY 
  sr1.width = sin(frameCount) * width/24 + width/24 + width/120
  sr1.height = cos(frameCount) * height/10 + height/10 + height/80 
  sr2.width = cos(frameCount) * width/24 + width/24 + width/120
  sr2.height = sin(frameCount) * height/10 + height/10 + height/80 
  sr3.height = tan(frameCount) * height/10 + height/10 + height/80 
  if (touching(mr,sr1)) {
    mr.shapeColor = "green"
    sr1.shapeColor = "green" 
  } else {
    if (!touching(mr,sr4)&&!touching(mr,sr2)&&!touching(mr,sr3)){
      mr.shapeColor = "red"
      sr1.shapeColor = "red"
    }
  }
  if (touching(mr,sr2)) {
    mr.shapeColor = "green"
    sr2.shapeColor = "green" 
  } else {
    if (!touching(mr,sr1)&&!touching(mr,sr4)&&!touching(mr,sr3)){
      mr.shapeColor = "red"
      sr2.shapeColor = "red"
    }
  }
  if (touching(mr,sr3)) {
    mr.shapeColor = "green"
    sr3.shapeColor = "green" 
  } else {
    if (!touching(mr,sr1)&&!touching(mr,sr2)&&!touching(mr,sr4)){
      mr.shapeColor = "red"
      sr3.shapeColor = "red"
    }
  }
  if (touching(mr,sr4)) {
    mr.shapeColor = "green"
    sr4.shapeColor = "green" 
  } else {
    if (!touching(mr,sr1)&&!touching(mr,sr2)&&!touching(mr,sr3)){
    mr.shapeColor = "red"
    sr4.shapeColor = "red"
    }
  }
  drawSprites();
}

function touching(obj1,obj2){
  let a = obj1.width/2 + obj2.width/2
  let b = obj1.height/2 + obj2.height/2
  if (abs(obj1.x - obj2.x) < a && abs(obj1.y - obj2.y) < b) {
    return true
  } else {
    return false
  }
}