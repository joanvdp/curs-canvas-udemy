var lonGrid = 10;
var colorBg = 'rgba(200,200,200,0.2)';
var colorGrid1 = '#ccc';
var colorGrid2 = 'steelblue';
var colorGrid3 = 'crimson';

function pintaGrid (id,disX, disY, color, colorBg) {
  var canvas = document.getElementById(id);
  context = canvas.getContext('2d');
  context.fillStyle = colorBg;
  context.fillRect(0,0,canvas.width,canvas.height);
  context.strokeStyle = color;
  context.lineWidth = 0.5;

  for (var i = disX + 0.5, countX = 1; i < canvas.width; i += disX, countX++) {
    if (countX == 5) {
      countX = 0;
      context.lineWidth = 1;
    } else {
      context.lineWidth = 0.5;
    }
    context.beginPath();
    context.moveTo(i,0);
    context.lineTo(i,context.canvas.height);
    context.stroke();
  }
  for (var z = disY + 0.5, countY = 1; z < canvas.height; z += disY, countY++) {
    if (countY == 5) {
      countY = 0;
      context.lineWidth = 1;
    } else {
      context.lineWidth = 0.5;
    }
    context.beginPath();
    context.moveTo(0,z);
    context.lineTo(context.canvas.width,z);
    context.stroke();
  }
}

function pintaRegla (id,longitudGrid, color1, color2, lineWidth) {
  var canvas = document.getElementById(id);
  context = canvas.getContext('2d');

  // Puntos de control
  var milestonesX = Math.floor(canvas.width/longitudGrid);
  var milestonesY = Math.floor(canvas.height/longitudGrid);
  // Estilos linea
  context.lineWidth = lineWidth;
  // Impresión de regla - Eje X
  for (var i = 1; i <= milestonesX; i++) {
    if (i % 5 === 0) {
      context.strokeStyle = color2;
      milestoneLon = longitudGrid;
    } else {
      context.strokeStyle = color1;
      milestoneLon = longitudGrid / 2;
    }
    // Puntos inferiores
    context.beginPath();
    context.moveTo(i * longitudGrid, canvas.height);
    context.lineTo(i * longitudGrid, canvas.height - milestoneLon);
    context.stroke();
    // Puntos superiores
    context.beginPath();
    context.moveTo(i * longitudGrid, 0);
    context.lineTo(i * longitudGrid, milestoneLon);
    context.stroke();

  }
  // Impresión de regla - Eje Y
  for (var z = 1; z <= milestonesY; z++) {
    if (z % 5 === 0) {
      context.strokeStyle = color2;
      milestoneLon = longitudGrid;
    } else {
      context.strokeStyle = color1;
      milestoneLon = longitudGrid / 2;
    }
    // Puntos izquierda
    context.beginPath();
    context.moveTo(0, canvas.height - z * longitudGrid);
    context.lineTo(milestoneLon, canvas.height - z * longitudGrid);
    context.stroke();
    // Puntos derecha
    context.beginPath();
    context.moveTo(canvas.width, canvas.height - z * longitudGrid);
    context.lineTo(canvas.width - milestoneLon, canvas.height - z * longitudGrid);
    context.stroke();
  }
}

function ajustaCoord(id,xx,yy) {
  var canvas = document.getElementById(id);
  var posCanvas = canvas.getBoundingClientRect();
  var x = xx - posCanvas.left;
  var y = yy - posCanvas.top;
  return {x: x, y: y};
}
