/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:




Input:
lado A = 24
lado B = 5

Output: 58
*/

const altura = parseInt(prompt('Ingrese la altura del rectangulo'));
const base = parseInt(prompt('Ingrese la base del rectangulo'));
document.write(`El perimetro del rectangulo es: ${perimetro(base, altura)}`)
function perimetro(base, altura) {
    return 2 * (base + altura);
}