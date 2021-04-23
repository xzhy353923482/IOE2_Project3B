
//Written by William Luk
// posts data to an Adafuit.io feed
var url = 'https://io.adafruit.com/api/v2/xzhy353923482/feeds/testdata/data';
var data = 0;
var val;
var num;
var slider;
function setup() {
    createCanvas(windowWidth,windowHeight);
    slider = createSlider(0,255,0);
    slider.position(windowWidth/2-350,windowHeight-200);
    slider.style('width','700px');
}

function draw() {
    background(255);
    val = slider.value();
    noFill();
    strokeWeight(60);
    stroke (153, 204, 102, val);
    ellipse (windowWidth/2, windowHeight/2-200, 700, 700 );
    // background(val);
    var num = round(map(val,0,255,0,100));
    noStroke();
    stroke (153, 204, 102, 250);
    strokeWeight(20);
    fill(153, 204, 102, 250);
    textSize(250);
    textAlign(CENTER);
    text(num + '%',windowWidth/2,windowHeight/2-100);
    
    if(data != val){
        lightData();
    }
}
function lightData(){
    data = val;
    console.log(data);
    sendData(data);
}

function sendData(turnOn){
  let postData ={
    "value": turnOn,
    "X-AIO-Key": "aio_hzUf642W6VKEYSzlvmAAyFNSzs34"
  };
  httpPost(url, 'json', postData, function(result){
    console.log(result);
  });
}