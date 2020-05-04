class Billete {
    constructor(v, c) {
        this.imagen = new Image
        this.valor = v
        this.cantidad = c
        this.imagen.src = imagenes[this.valor]
    }
}

var boton = document.getElementById('extraer')
boton.addEventListener('click', entregarDinero)
var pavos = document.getElementById('dinero')
var datosCaja = document.getElementById('datosCaja')
var datosEntregado = document.getElementById('datosEntregado')

var imagenes = []
imagenes[100] = 'cien.png'
imagenes[50] = 'cincuenta.png'

var caja =[]
caja.push( new Billete (100, 4) );
caja.push( new Billete (50, 1) );

var entregado = []

var dineroExtraer = 0 
var division = 0
var billetes = 0
mostrarSaldo()


function entregarDinero () {
    entregado = []
    moverDinero ()
    if (dineroExtraer > 0) {
        datosEntregado.innerHTML = 'no puedo entregar esa cantidad'
    } else {
        for (const e of entregado) {
            if (e.cantidad > 0) {
                for (let i = 0; i < e.cantidad; i++) {
                    datosEntregado.innerHTML += '<img src =' + imagenes[e.valor] + ' />'   
                } 
                datosEntregado.innerHTML += '<br />' + e.cantidad + ' billetes de ' + e.valor + '<br />'
            } 
        }
    }
    mostrarSaldo()
}


function moverDinero () {
    dineroExtraer = parseInt(pavos.value)
    for (const c of caja) {
        if (dineroExtraer > 0) {
            division = Math.floor(dineroExtraer / c.valor)
            if (division > c.cantidad) {
                billetes = c.cantidad
            }else {
                billetes = division
            }
            entregado.push(new Billete (c.valor, billetes))
            dineroExtraer -=(c.valor * billetes)
            c.cantidad -= billetes 
        }
    }
}


function mostrarSaldo () {
    datosCaja.innerHTML = ' '
    let saldo = 0
    for (const c of caja) {
        datosCaja.innerHTML += c.cantidad + ' billetes de ' + c.valor + '<br />'
        saldo += c.cantidad * c.valor
    }
    datosCaja.innerHTML += 'Saldo en caja: ' + saldo + '<br />'
}


