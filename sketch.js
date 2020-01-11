var noiseOff = 0.001;
var streams = [];
var fadeInterval = 1.6;
var symbolSize = 14;

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  background(0);

  var x = 0;
  for (var i = 0; i <= width / symbolSize; i++) {
    var stream = new Stream();
    stream.generateSymbols(x, random(-2000, 0));
    streams.push(stream);
    x += symbolSize
  }

  textSize(symbolSize);
}

function draw() {
  background(noise(noiseOff) * 51);
  streams.forEach(function(stream) {
    stream.render();
  });
  noiseOff += 0.05;
}
