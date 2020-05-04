var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pokacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png"; 
  
var coleccion = [];
coleccion.push(new Pakiman("cauchin", 100, 40));
coleccion.push(new Pakiman("pokacho", 100, 30)); 
coleccion.push(new Pakiman("tocinauro", 100, 30));

for (var pakin of coleccion) { //"for of" muestra directamente la instancia de la clase
  pakin.mostrar();
}

for (var x in coleccion) { //"for in" muestra el indice de la coleccion
  console.log(x);
  //console.log(coleccion[x]) para poder hacer lo equivalente a for de arriba
}

for (var x in coleccion[0]) { //muestra los atributos del objeto
  console.log(x);
}

