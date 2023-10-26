// Ejercicio cajero

var opcion = parseInt(prompt("Ingresa una opcion: "))
var saldo = 10000


switch (opcion) {
    case 1:
        alert("consultar saldo")
        alert("El saldo actual es: " + saldo)
        break;
    case 2:
        var dineroAEnviar=parseInt(prompt("Ingresá el dinero a enviar"))
        if (saldo > dineroAEnviar) {
            console.log("Podés enviar "+ dineroAEnviar)
        } else if (saldo < dineroAEnviar) {
           console.log("No tenés fondos")
        } else {
            console.log("Quedás en 0")
        }
     break;
    case 3:

            var montoExtraer=parseInt(prompt("Ingrese el monto a extraer"))
            if(montoExtraer>=0 && montoExtraer < saldo){
                alert("Usted puede extraer")
               var nuevoSaldo=saldo-montoExtraer
                alert("Su saldo es: " + nuevoSaldo)
            }else{
            alert("No puede extraer " + montoExtraer + " porque no posee dichos fondos. Usteed tiene en la cuenta: " + saldo)
            }

    break;
    default:
        break;
}
