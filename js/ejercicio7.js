/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

tablaDeMultiplicar(parseInt(prompt('Ingrese un numero')))

function tablaDeMultiplicar(numero) {
    document.write(`
<table>
  <thead>
    <tr>
      <th>Tabla del ${numero} </th>
    </tr>
  </thead>
  <tbody>
`);

for (let i = 1; i <= 10; i++) {
    document.write(`<tr>
      <td> ${numero} x ${i} = ${numero * i} </td>
    </tr>`);
    document.write('</tbody>')
  }
}