var svg = document.getElementById("s");
var b1 = document.getElementById("b1");
var lastX = -1;
var lastY = -1;

var draw = function(e){
    mouseX =  e.offsetX.toString();
    mouseY = e.offsetY.toString();
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle" );
    circle.setAttribute("cx" , mouseX);
    circle.setAttribute("cy", mouseY);
    circle.setAttribute("r", "10");
    circle.setAttribute("fill", "black");
    svg.appendChild(circle);
    if (lastX != -1) {
	console.log("here");
	var line = document.createElementNS("http://www.w3.org/2000/svg", "line" );
	line.setAttribute("x1", lastX.toString());
	line.setAttribute("y1", lastY.toString());
	line.setAttribute("x2", mouseX);
	line.setAttribute("y2", mouseY);
	line.setAttribute("stroke", "black");
	svg.appendChild(line);		    
    }
    lastX = mouseX;
    lastY = mouseY;	
    
    
    
    
}

var clear = function(){
    svg.innerHTML = "";
    lastX = -1;
    lastY = -1
}


svg.addEventListener("click", draw);
b1.addEventListener("click" , clear);
