/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

document.write(paridad(parseInt(prompt('Digite un numero:'))))
function paridad(numero) {
    if(numero % 2 === 0){
        return "El numero es par";
    }
    return "El numero es impar";
}