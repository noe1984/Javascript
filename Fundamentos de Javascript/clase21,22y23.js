function Persona(n, ap, al) {
    this.nombre = n
    this.apellido = ap
    this.altura = al
}

// El orden en el que aparecen las funciones es determinante en este caso arriba
Persona.prototype.saludar = function () {
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}

// Persona.prototype.soyAlto = ()  =>  {
//     //debugger
//     return this.altura >= 1.8 
// }
// en arrow functions, "this" esta en un ambito global y equivale a "window"

Persona.prototype.soyAlto = function ()  {
    return this.altura >= 1.8 
}


var noe = new Persona ('noe', 'gonzalez', 1.68)
var morfeo = new Persona ('morfeo', 'matrix', 1.85)
var trinity = new Persona ('trinidad', 'black', 1.81)

noe.saludar()
morfeo.saludar()
trinity.saludar()

// noe.soyAlto()
// morfeo.soyAlto()
// trinity.soyAlto() esto se ejecuta en consola