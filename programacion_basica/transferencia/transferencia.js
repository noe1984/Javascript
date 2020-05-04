class cuenta {
    constructor(b, n, s,){
        this.banco = b
        this.numero_cuenta = n
        this.saldo = s
    }
}

cuenta_cliente = []
cuenta_cliente.push( new cuenta ("bancoMEX", 1010, 1000100))

cuenta_destino = []
cuenta_destino.push( new cuenta("bancoUSA", 1020, 0))

var datos = document.getElementById("datos")
var resultado = document.getElementById("resultado")
mostrar()

var banco_destino = document.getElementById("banco")
var monto = document.getElementById("cantidad")
var boton = document.getElementById("boton")
boton.addEventListener("click", transferir)

var cliente = true
var destino = true
var hora = 10 

var comision = 100

function transferir(){
var cantidad = parseInt(monto.value)
for (c of cuenta_cliente){
    d.banco = banco_destino.value
    if (cliente&&destino&&c.banco == d.banco&&c.saldo>=cantidad&&
        ((hora>=9&&hora<=12)||(hora>=15&&hora<=20))){
        c.saldo = c.saldo - cantidad
            for (d of cuenta_destino){
            d.saldo = d.saldo + cantidad
            comision = 0
            resultado.innerHTML += "cantidad enviada: " + cantidad + " comision: " + comision +"<br/>"
            } 
        }
        else if (cliente&&destino&&c.banco!=d.banco&&c.saldo>=(cantidad+comision)&&
        ((hora>=9&&hora<=12)||(hora>=15&&hora<=20))) {
            for (c of cuenta_cliente){
                c.saldo = c.saldo - (cantidad+comision)
                    for (d of cuenta_destino){
                    d.saldo = d.saldo + cantidad  
                    resultado.innerHTML += "cantidad enviada: " + cantidad + " comision: " + comision +"<br/>"
                }
            }
        }
        else{
            resultado.innerHTML += "ERROR: SALDO INSUFICIENTE  <br> O REVISE NUESTRO HORARIO DE ATENCION DE 9 A 12 Y DE 15 A 20 HRS "
        }
    }
    mostrar()
}


function mostrar() {
    for (var c of cuenta_cliente) {
        if (c.saldo >= 0) {
            datos.innerHTML = "BANCO CLIENTE: "+ c.banco + "<br />" + " CTA: " + c.numero_cuenta + "<br />" + " SALDO: " +c.saldo+"<hr/>"
        }
    }
    for (d of cuenta_destino) {
        if (d.saldo >= 0) {
            datos.innerHTML += "BANCO DESTINO: "+ d.banco + "<br />" + " CTA: " + d.numero_cuenta + "<br />" + " SALDO: " +d.saldo+"<br/>"
        }
    }
}

        
        







