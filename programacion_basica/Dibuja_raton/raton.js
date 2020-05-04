var canvitas = document.getElementById("canvas");
var papel= canvitas.getContext("2d");

document.addEventListener("mousedown", iniciarLinea);
document.addEventListener("mousemove", trazarLinea);
document.addEventListener("mouseup", terminarLinea);
var pulsando = false;

function iniciarLinea() {
  pulsando = true;
  papel.beginPath();
}

function trazarLinea(eventito) { // "eventito" para llenar de info con mouse
  if (pulsando==true) {  // el if  para  condicionar que se esté pulsando
    let pos = obtenerPosMouse(canvitas, eventito);
      dibujarLinea("blue", pos.x, pos.y, papel);
  }
}

function terminarLinea() {
  pulsando = false;
  papel.closePath();
}


function dibujarLinea(color, x, y, lienzo) {
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.lineTo(x, y);
  lienzo.stroke();
}

function obtenerPosMouse(objeto, evento) { //"(objeto, evento)" los elige el programador
  console.log(objeto, evento) // ver coordenadas de pantalla y cliente
  var rect = objeto.getBoundingClientRect();
  return {
    x : evento.clientX - rect.left,
    y : evento.clientY - rect.top
  }
}