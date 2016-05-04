var cvs = document.getElementById("myCanvas");
var ctx = cvs.getContext("2d");
var cWidth = cvs.width;
var cHeight = cvs.height;
var repeat = 0;

function draw() {
  var startRandom = 50 + (Math.random() * (cWidth - 100));
  var randomX = Math.random() * cWidth;
  var randomY = Math.random() * cHeight;
  var cp1x = Math.random() * (cWidth);
  var cp1y = Math.random() * (cHeight);
  var cp2x = Math.random() * (cWidth);
  var cp2y = Math.random() * (cHeight);
  var randomR = Math.round(Math.random() * 255);
  var randomB = Math.round(Math.random() * 255);
  var randomG = Math.round(Math.random() * 255);
  console.log(randomR + " " + randomG + " " + randomB);
  ctx.beginPath();
  if (randomG < randomR) {
    ctx.strokeStyle = "rgb(" + randomR + ", " + randomG + ", " + randomG + ")";
  } else {
    ctx.strokestyle = "rgb(" + randomR + ", " + randomR + ", " + randomR + ")";
  }
  ctx.lineWidth = 0.8;
  ctx.moveTo(startRandom, cHeight / 2);
  ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, randomX, randomY);
  ctx.stroke();
}

function start() {
  var counter = 0;
var i = setInterval(function(){
    draw();
    counter++;
    if(counter === 50) {
        clearInterval(i);
        $('#logo').fadeIn(800);
        $('#myCanvas').fadeOut(2000);
    }
}, 50);
}

start();