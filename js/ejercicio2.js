/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/
const nombres = [];
do {
  let ingreso = prompt("Ingrese una ciudad");
  if (ingreso != undefined && ingreso != null) {
    nombres.push(ingreso);
  }
} while (confirm("Desea ingresar otra ciudad?"));

document.write(`El arreglo de ciudades tiene ${nombres.length} elementos`);

document.write(`<ul>
<li> El elemento en la primera posicion: ${nombres[0]} </li>
<li> El elemento en la tercera posicion: ${nombres[2]} </li>
<li> El elemento en la ultima posicion: ${nombres[nombres.length - 1]} </li>


`);
nombres.push("Paris");
document.write(`
<li> El elemento en la ultima posicion: ${nombres[nombres.length - 1]} </li>
</ul>`);
nombres.splice(1,0,"Barcelona");
document.write(`<h1>Arreglo de ciudades </h1>`);
document.write(`<ul>`);
for (let i = 0; i < nombres.length; i++) {
  document.write(`<li> Elemento: ${nombres[i]} </li>`);
}
document.write(`</ul>`);
