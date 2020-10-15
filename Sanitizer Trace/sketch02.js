
let box07 = {
color: '192',
rectX: 0,
rectY: 0,
rectWidth: 18,
rectHeight: 25,
transX: 18,
transY: 25,
speedX: .75,
speedY: .75,

}

let box08 = {
rectX: 0,
rectY: 0,
color: 'grey',
rectWidth: 12,
rectHeight: 16,
transX: 12,
transY: 16,
speedX: -.75,
speedY: -.75,

}

let box09 = {
rectX: 0,
rectY: 0,
color: 'grey',
rectWidth: 10,
rectHeight: 52,
transX: 10,
transY: 52,
speedX: .5,
speedY: .5,

}

let box10 = {
rectX: 0,
rectY: 0,
color: 'grey',
rectWidth: 100,
rectHeight: 130,
transX: 100,
transY: 130,
speedX: -.5,
speedY: -.5,

}

let box11 = {
rectX: 0,
rectY: 0,
color: 'grey',
rectWidth: 10,
rectHeight: 120,
transX: 10,
transY: 120,
speedX: 3,
speedY: 3,

}


class MovedBox01 {
constructor (incomingBox) {
  this.incomingBox = incomingBox;
}

 moveBox01() {
  push();
  if (this.incomingBox.transX > width || this.incomingBox.transX < 0) {
    this.incomingBox.speedX = this.incomingBox.speedX*-1;
  }
  this.incomingBox.transX = this.incomingBox.transX + this.incomingBox.speedX;
  if (this.incomingBox.transY > width || this.incomingBox.transY < 0) {
    this.incomingBox.speedY = this.incomingBox.speedY*-1;
  }
  this.incomingBox.transY = this.incomingBox.transY + this.incomingBox.speedY;
  translate(this.incomingBox.transX, this.incomingBox.transY);

  stroke(255);
  strokeWeight(1)
  fill(this.incomingBox.color);
  rect(this.incomingBox.rectX, this.incomingBox.rectY, this.incomingBox.rectWidth, this.incomingBox.rectHeight);
  pop();
}

  trackingLines01() {
  stroke('red');
  strokeWeight(1)
  line(this.incomingBox.transX, 0,this.incomingBox.transX, height)
  line(0, this.incomingBox.transY, height, this.incomingBox.transY)
}
}
