let boxes = [box01, box02, box03, box04, box05, box06];
let boxPosition = [];

let boxes01 = [box07, box08, box09, box10, box11];
let boxPosition01 = [];



function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < boxes.length; i++) {
  boxPosition[i] = new MovedBox(boxes[i]);
 }

 for (let i = 0; i < boxes01.length; i++) {
 boxPosition01[i] = new MovedBox01(boxes01[i]);
}



}

function draw() {
  background(0);
  rectMode(CENTER);

  for (i = 0; i < boxes.length; i++) {
  boxPosition[i].moveBox();
  boxPosition[i].trackingLines();
 }

 for (i = 0; i < boxes01.length; i++) {
 boxPosition01[i].moveBox01();
 boxPosition01[i].trackingLines01();
}



}
