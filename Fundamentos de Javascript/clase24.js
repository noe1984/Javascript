function heredaDe(Hijo, Padre) { //funcion de herencia
    var fn = function () {}
    fn.prototype = Padre.prototype
    Hijo.prototype = new fn
    Hijo.prototype.constructor = Hijo
}

function Persona(n, ap, al) { //funcion constructora
    this.nombre = n
    this.apellido = ap
    this.altura = al
}


Persona.prototype.saludar = function () {
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function ()  {
    return this.altura >= 1.8 
}

var noe = new Persona ('noe', 'gonzalez', 1.68)




function Desarrollador(n, ap, al) {
    this.nombre = n
    this.apellido = ap
    this.altura = al
}

heredaDe(Desarrollador, Persona) //el mecanismo se coloca inmediatamente de la funcion Desarrollador

Desarrollador.prototype.saludar = function () {
    console.log(`hola me llamo ${this.nombre} y soy desarrollador`)
}
var trinity = new Desarrollador ('trinidad', 'black', 1.81)
trinity.soyAlto()  //hereda el metodo soyAlto de Persona, en consola arroja un "true"
trinity.saludar()  //hereda el metodo saludar pero modificado para Desarrollador






