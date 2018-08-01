var canvas;

var theta = 0.0;      // Start angle at 0
var magnitude = 400; // Height of wave

function setup() {
    canvas = createCanvas(document.documentElement.clientWidth, 600);
    canvas.parent("#sketch01");
    canvas.style("z-index","-1");
}

function draw() {
    background(100);
    renderWave();
}

function sinMag() {
    theta += 0.02;
    return magnitude * sin(theta); 
}

function cosMag() {
    theta += 0.02;
    return magnitude * cos(theta); 
}

function renderWave() {
    noStroke();
    
    push();
    translate(0,height/2);
    
    stroke(0,255,0);
    let angle = atan(height/(width/2));
    let tgVectorSin = p5.Vector.fromAngle(angle,sinMag());
    let tgVectorCos = p5.Vector.fromAngle(angle,cosMag());
    
    line(0,0,tgVectorSin.x,tgVectorSin.y);
    line(width,0,width-tgVectorCos.x,-tgVectorCos.y);
    
    stroke(255);
    strokeWeight(5);
    noFill();
    bezier(-10, 0, tgVectorSin.x,tgVectorSin.y,
            width-tgVectorCos.x,-tgVectorCos.y, width+10, 0);
    
    pop();
}