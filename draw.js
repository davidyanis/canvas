
 var nrOfDots = 12;
 var multiplier = 2;
 var circleRadius = 200;
 var dotRadius = 10;
 var lineWidth = 1;
 var lineHeight = 1;
 var offset = 50;
 var circleCenterPoint;

 var dotPositions = [];
 

function draw() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");

    drawCircle(context)
    drawDots(context)
    drawLines(context)
 }

 /**
  * 
  * @param {CanvasRenderingContext2D} context 
  */
function drawCircle(context) {
    context.lineWidth = lineWidth;
    circleCenterPoint = circleRadius + offset;
    context.arc(circleCenterPoint, circleCenterPoint, circleRadius, 0, 2 * Math.PI)
    context.stroke()
   
}

 /*    x = circleCenterPoint + (cos(t) * circleRadius);
    y = circleCenterPoint + (sin(t) * circleRadius); */

    function drawDots(context) {
       
        context.beginPath();
        context.fillStyle = "red";

    for (i = 0; i < nrOfDots; i++) {
        var angle = 2 * Math.PI / nrOfDots * i;
        var x = circleCenterPoint + circleRadius * Math.cos(angle);
        var y = circleCenterPoint + circleRadius * Math.sin(angle);
        context.moveTo(x, y);
        context.arc(x, y, dotRadius, 0, 2 * Math.PI);

        // save dots
        dotPositions.push({
            x: x,
            y: y
        })

    }
    context.fill();
    }

    function drawLines(context) {
        context.beginPath()
        for (var i = 0; i < nrOfDots; i++) {
            var startPoint = dotPositions[i];
            var nextIndex = (i * multiplier) % nrOfDots;
            var endPoint = dotPositions[nextIndex];
            context.moveTo(startPoint.x, startPoint.y);
            context.lineTo(endPoint.x, endPoint.y);
        }
        context.stroke()
    }
 