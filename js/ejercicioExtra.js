/*Desarrollar un sistema de cajero automático en JavaScript que permita al usuario realizar varias operaciones bancarias mediante un menú interactivo. El usuario podrá consultar el saldo, realizar ingresos y egresos de dinero, y otras operaciones adicionales. Al principio del programa declara una variable `saldo` inicial con un valor de $1000 (puedes elegir otro valor si prefieres). las opciones que se mostrarán al usuario son: 1. Ver saldo de la cuenta. 2. Ingresar dinero. 3. Retirar dinero. 4. Ver últimas  transacciones. 5. Salir. Importante, el usuario puede realizar varias veces las operaciones del cajero.*/

let saldo = 1000;
const ultimasTransacciones = [];
let opcion;
do {
    switch (opcion = parseInt(prompt(`
    1. Ver saldo de la cuenta. 
    2. Ingresar dinero. 
    3. Retirar dinero. 
    4. Ver últimas transacciones. 
    5. Salir.
    Ingrese la accion que desea realizar`))) {
        case 1:
            verSaldo(saldo)

            break;

        case 2:
            saldoPrueba = ingresarDinero(saldo)
            if(!(isNaN(saldoPrueba) || !(typeof	saldoPrueba === undefined))){
                saldo = saldoPrueba
                alert(`Su nuevo valor de saldo es: ${saldo}`)
                ultimasTransacciones.push("Ingreso de dinero");
            }
            
            break;

        case 3:
            saldoPrueba = RetirarDinero(saldo)
            if(typeof saldoPrueba != undefined && !(isNaN(saldoPrueba))){
                saldo = saldoPrueba
                alert(`Su nuevo valor de saldo es: ${saldo}`)
                ultimasTransacciones.push("Retiro de dinero");
            }
            break;

        case 4:
            let mensaje = "Ultimas Transacciones:\n";
            for (let i = 0; i < ultimasTransacciones.length; i++) {
                mensaje += `${ultimasTransacciones[i]}\n`;
            }
            alert(mensaje);
            break;
        case 5:
            document.write("Vuelva Pronto!")
            break;

        default:
            break;
    }

}
while (opcion != 5)

function verSaldo(saldo) {
    return alert("Su saldo es: " + saldo);
}
function ingresarDinero(saldo) {
    montoIngreso = parseFloat(prompt("Ingrese el monto que desea ingresar a su cuenta"));
    if (!isNaN(montoIngreso) && montoIngreso > 0) {
        return (saldo + montoIngreso)
    }

}
function RetirarDinero(saldo) {
    montoRetiro = parseFloat(prompt("Ingrese el monto que desea retirar de su cuenta"));
    if (!isNaN(montoRetiro) && montoRetiro > 0 && montoRetiro < saldo) {
        return (saldo - montoRetiro)
    }
    if (montoRetiro > saldo) {
        return alert(`ERROR: No puede retirar mas dinero del que posee en su cuenta (${saldo}) `)
    }

}