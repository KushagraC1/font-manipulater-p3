var lhandx;
var rhandx;

var difference;



function setup(){
    canvas = createCanvas(500,500);
    canvas.position(1000,300);
    video = createCapture(VIDEO);
    video.position(200,300);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("red");
    text("kjdssadsa", 00,200);
    textSize(difference - 300);
    document.getElementById("text-output").innerHTML = "font size = " + difference;
}
function modelLoaded(){
    console.log("model loaded");
}
function gotPoses(results){
if(results[0] == null){
console.error("no data");
}else{
    console.log(results);

    lhandx = results[0].pose.leftWrist.x;
    rhandx = results[0].pose.rightWrist.x;
    
    difference =  lhandx - rhandx;
}
}