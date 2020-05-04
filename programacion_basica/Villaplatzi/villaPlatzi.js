var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener('keydown', moverCerdo)
var x = 300
var y = 300
var teclas = {UP:38, DOWN:40, LEFT:37, RIGHT:39}

var fondo = {url: "tile.jpg", cargaOK: false};
var pollo = {url: "pollo.png", cargaOK: false};
var cerdo = {url: "cerdo.png", cargaOK: false};


fondo.imagen = new Image()
fondo.imagen.src = fondo.url
fondo.imagen.addEventListener("load", cargarFondo)

pollo.imagen = new Image()
pollo.imagen.src = pollo.url
pollo.imagen.addEventListener("load", cargarPollos)

cerdo.imagen = new Image()
cerdo.imagen.src = cerdo.url
cerdo.imagen.addEventListener("load", cargarCerdo)

function cargarFondo() {
  fondo.cargaOK = true
  dibujar()
}
function cargarPollos() {
  pollo.cargaOK = true
  dibujar()
}
function cargarCerdo() {
  cerdo.cargaOK = true
  dibujar()
}


function dibujar() {
  if(fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0)
  }
  for (let i = 0; i < 10; i++) {
    if(pollo.cargaOK) {
      papel.drawImage(pollo.imagen, ale(500, 100), ale(100, 400))
    }    
  }
  if(cerdo.cargaOK) {
    papel.drawImage(cerdo.imagen, x, y)
  }
}

function moverCerdo (event) {
  console.log(event)
  const movi = 10
    switch (event.keyCode) {
      case teclas.UP:
        y = y - movi
        break;
      case teclas.DOWN:
        y = y + movi
        break;
      case teclas.LEFT:
        x = x - movi
        break;
      case teclas.RIGHT:
        x = x + movi
        break;
    }
    dibujar()
}


function ale (max, min) {
  return Math.floor(Math.random() * (max - min + 1 )) + min
}