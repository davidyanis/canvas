
/**
 * 
 * @param {CanvasRenderingContext2D} context 
 */

function drawHead(context) {
    context.beginPath();
    context.arc(100,75,50,0,2 * Math.PI); 
    context.stroke();
}

function drawEyes(context) {
    context.beginPath();
    context.strokeRect(70, 60, 10, 10)
    context.strokeRect(120, 60, 10, 10)
}

function drawMouth(context) {
    context.beginPath();
    context.arc(100, 90, 20, 0,1 * Math.PI)
    context.stroke();
 
}

function drawBody(context) {
    context.beginPath();
    context.arc(100, 117, 30, 0,1 * Math.PI)
    context.stroke();
}
