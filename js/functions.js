var xCen = 20;
var yCen = 30;
var w = window.innerWidth;
var h = window.innerHeight;
var xCen_px = xCen * 0.01 * w;
var yCen_px = h - yCen * 0.01 * h;
var xCoor, yCoor; // Mouse coordinates
var ray1, ray2, ray3, ray4, ray5, ray6, ray7, ray8, ray9, ray10, ray11, ray12;
var rays;
var angles = [];

function drawSVG(x, y) {
    xCen = x;
    yCen = y;
    document.getElementById("svg-planets").style.left = String(x) + '%';
    document.getElementById("svg-planets").style.top =  String(y) + '%';
    document.getElementById("svg-planets").style.transform = 'translate(-50%,-50%)';
    
    ray1 = [
        [xCen, yCen],
        [-10, 40],
        [-10, 35]
    ];
    document.getElementById("light-1").setAttribute("points", String(xCen) + "," + String(yCen) + " -10,40 -10,35");
    
    ray2 = [
        [xCen, yCen],
        [-10, 45],
        [-10, 40]
    ];
    document.getElementById("light-2").setAttribute("points", String(xCen) + "," + String(yCen) + " -10,45 -10,40");
    
    ray3 = [
        [xCen, yCen],
        [0, 100],
        [-10, 45]
    ];
    document.getElementById("light-3").setAttribute("points", String(xCen) + "," + String(yCen) + " 0,100 -10,45");
    
    var ray4 = [
        [xCen, yCen],
        [35, 100],
        [0, 100]
    ];
    document.getElementById("light-4").setAttribute("points", String(xCen) + "," + String(yCen) + " 35,100 0,100");
    
    ray5 = [
        [xCen, yCen],
        [80, 100],
        [35, 100]
    ];
    document.getElementById("light-5").setAttribute("points", String(xCen) + "," + String(yCen) + " 80,100 35,100");
    
    var ray6 = [
        [xCen, yCen],
        [150, 100],
        [80, 100]
    ];
    document.getElementById("light-6").setAttribute("points", String(xCen) + "," + String(yCen) + " 150,100 80,100");
    
    ray7 = [
        [xCen, yCen],
        [120, 70],
        [150, 100]
    ];
    document.getElementById("light-7").setAttribute("points", String(xCen) + "," + String(yCen) + " 120,70 150,100");
    
    ray8 = [
        [xCen, yCen],
        [120, 55],
        [120, 70]
    ];
    document.getElementById("light-8").setAttribute("points", String(xCen) + "," + String(yCen) + " 120,55 120,70");
    
    ray9 = [
        [xCen, yCen],
        [120, 50],
        [120, 55]
    ];
    document.getElementById("light-9").setAttribute("points", String(xCen) + "," + String(yCen) + " 120,50 120,55");
    
    ray10 = [
        [xCen, yCen],
        [120, 46],
        [120, 50]
    ];
    document.getElementById("light-10").setAttribute("points", String(xCen) + "," + String(yCen) + " 120,46 120,50");
    
    ray11 = [
        [xCen, yCen],
        [120, 44],
        [120, 46]
    ];
    document.getElementById("light-11").setAttribute("points", String(xCen) + "," + String(yCen) + " 120,44 120,46");
    
    ray12 = [
        [xCen, yCen],
        [120, 36],
        [120, 44]
    ];
    document.getElementById("light-12").setAttribute("points", String(xCen) + "," + String(yCen) + " 120,36 120,44");
    
    var rays = [ray1, ray2, ray3, ray4, ray5, ray6, ray7, ray8, ray9, ray10, ray11, ray12];
    
    for (var j=0; j<rays.length; j++) {
        angles.push(angle(rays[j]));
    }
    console.log(angles);
}

function angle(ray) {
    var xR = (ray[1][0] - ray[0][0]) * w; // x - center
    var xL = (ray[2][0] - ray[0][0]) * w; // x - center
    var yR = (ray[0][1] - ray[1][1]) * h; // center - y
    var yL = (ray[0][1] - ray[2][1]) * h; // center - y

    var angleR = Math.atan(xR/yR);
    angleR = Math.abs(angleR * 180/Math.PI);
    
    if (xR > 0 && yR < 0) {
        angleR = 180 - angleR;
    } else if (xR < 0 && yR < 0) {
        angleR = angleR + 180;
    } else if (xR < 0 && yR > 0) {
        angleR = 360 - angleR;
    }
    console.log(angleR);
    
    var angleL = Math.atan(xL/yL); 
    angleL = angleL * 180/Math.PI;
    
    if (xL > 0 && yL < 0) {
        angleL = 180 + angleL;
    } else if (xL < 0 && yL < 0) {
        angleL = angleL + 180;
    } else if (xL < 0 && yL > 0) {
        angleL = 360 - angleL;
    }
    console.log(angleL);
    return ([angleL, angleR]);
}

function writeText(coor, topic) {
    var xCoor = coor[0];
    var yCoor = coor[1];
    document.getElementById("topic").innerHTML=topic;
    document.getElementById("topic").style.display="block";
    document.getElementById("topic").style.transform="translate("+xCoor+"px, "+yCoor+"px)";
    console.log("translate("+xCoor+"px, "+yCoor+"px);");
}

var topics = [0,0,"What is Life?", "Biosignatures", "Exoplanets", "Telescopes and Techniques",0,0,0,0,0,0,0];
var links = [0,0,"whatislife", "biosignatures", "exoplanets", "telescopes",0,0,0,0,0,0,0];
var nr; // the index of the currently active ray.

function animateRays(coor) {
    w = window.innerWidth;
    h = window.innerHeight;
    xCen_px = xCen * 0.01 * w;
    yCen_px = h - yCen * 0.01 * h;
    
    var xCoor = coor[0];
    var yCoor = h - coor[1];
    
    xCoor = xCoor - xCen_px;
    yCoor = yCoor - yCen_px;
    
    var angle = Math.atan(xCoor/yCoor);
    angle = angle * 180/Math.PI;
    
    if (xCoor > 0 && yCoor < 0) {
        angle = angle + 180;
    } else if (xCoor < 0 && yCoor < 0) {
        angle = angle + 180;
    } else if (xCoor < 0 && yCoor > 0) {
        angle = angle + 360;
    }
    
    for (var i=0; i<angles.length; i++) {
        if (angle < angles[i][0] && angle > angles[i][1]) {
            document.getElementById("light-"+(i+1)).style.display="none";
            nr = i;
        } else {
            document.getElementById("light-"+(i+1)).style.display="block";
            document.getElementById("topic").style.display="none";
        }
    }
    if (topics[nr]) { 
        document.getElementById("title").innerHTML=topics[nr]; 
    } else {
        document.getElementById("title").innerHTML="The Light of Life.";
    }
}

// Mouse move event
function mousePosition(e) {
	var coor = [e.clientX, e.clientY];
    animateRays(coor);
}

// Mouse Down event
function mouseDown(e) {
	if (links[nr]) {
        console.log("animate: " + xCen + " " + yCen);
        var elem = document.getElementById("svg-planets");
        var clear = false;
        var id = setInterval(frame, 5);
        var r;
        function frame() {
            if (clear) {
                clearInterval(id);
            } else {
                xCen--;
                yCen--;
                if (r >= 30) {
                    r--;
                    console.log(r);
                    document.getElementById("planet").setAttribute('r', r);
                }
                console.log(xCen, yCen);
                drawSVG(xCen, yCen);
                if ((xCen <= 10) && (yCen <= 10)) {
                    clear = true;
                } else {
                    xCen--;
                    yCen--;
                    console.log(xCen, yCen);
                    drawSVG(xCen, yCen);
                }
            }
        }
        window.setTimeout(function(){window.location.href = "./" + links[nr] + ".html";}, 500);
    }
}

