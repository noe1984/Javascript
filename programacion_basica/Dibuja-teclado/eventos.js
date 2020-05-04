var canvas = document.getElementById("canvas");
var papel =  canvas.getContext("2d");
document.addEventListener("keydown", dibujarTeclado);

var teclas = {UP:38, DOWN:40, LEFT:37, RIGTH:39};
var x = 150;
var y = 150;
var movi = 5;

function dibujarLinea(color,xi,yi,xf,yf,lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
  }

  dibujarLinea("blue",149,149,151,151,papel);

  function dibujarTeclado(evento) {
    console.log(evento);
      switch (evento.keyCode) {
          case teclas.UP:
                dibujarLinea("blue",x,y,x,y-movi,papel);
                y=y-movi;
              break;
          case teclas.DOWN:
                dibujarLinea("blue",x,y,x,y+movi,papel);
                y = y+movi;
              break;
          case teclas.LEFT:
                dibujarLinea("blue",x,y,x-movi,y,papel);
                x = x-movi;
              break;
          case teclas.RIGTH:
                dibujarLinea("blue",x,y,x+movi,y,papel);
                x = x+movi;
              break;
      }
  }