var canvas = document.getElementById("canvas")
var lienzo = canvas.getContext("2d")

var datos = document.getElementById("cajita")
var boton = document.getElementById("botoncito")
var anchocanvas = canvas.width
boton.addEventListener("click", dibujoPorClick)

function dibujoPorClick() {
  let yi, xf
  let lineas = parseInt(datos.value)//parseInt convierte a numerico
  let espacio = anchocanvas / lineas
  let l =0

  for (l =0; l< lineas; l++) {
    
    yi = espacio * l; //l relacionado al ciclo
    xf = espacio * (l + 1);
    dibujarLinea("blue",0,yi,xf,300,) 
  } 
}


function dibujarLinea(color,xi,yi,xf,yf){//lienzo definido arriba
  lienzo.beginPath()
  lienzo.strokeStyle = color
  lienzo.moveTo(xi,yi)
  lienzo.lineTo(xf,yf)
  lienzo.stroke()
  lienzo.closePath()
}

