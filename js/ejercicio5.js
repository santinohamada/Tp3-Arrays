/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

document.write(informacion(prompt("Ingrese un texto: ")))

function informacion(cadena) {
    if(!(/[a-z]/.test(cadena))){
        return "La cadena solo contiene Mayusculas";
    }
    if(!(/[A-Z]/.test(cadena))){
        return "La cadena solo contiene Minusculas";
    }
    return "La cadena está formada por mayusculas y minusculas";
}