let video;
let poseNet;
let pose;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO)
  video.hide()
  poseNet = ml5.poseNet(video)
  poseNet.on("pose", gotPoses)
}

function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
  }
}

function draw() {
  background(220);
  image(video, 0, 0)
  
  if (keyIsPressed){
  saveCanvas()
  }
}