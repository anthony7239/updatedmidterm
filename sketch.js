
function setup() { 
    createCanvas(1000, 700);
    design();   
}

function design() {
    var r = random(240,0)
    var g = random(240,0)
    var b = random(240,0)
    //var a = random(250,0)
    background(r, g, b);
    rectMode(CENTER);

    var column = width/8;
    var row = height/8;
    for (var x = 0; x <= width; x += column) {

        for (var y = 0; y <= height; y += row) {
            var r = random(20,255)
            var g = random(20,255)
            var b = random(20,255)
            fill(r, g, b);
            noStroke()

            var shape = Math.floor(random(0, 2));
            var size = random(35, 45);
            if (shape == 0) {
                ellipse(x, y, size, size);
            } else if (shape == 1) {  
                rect(x, y, size, size);
            }

        }

    }
}

function mouseClicked() {
    design();
}