/*Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/
const suma = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let resultado = 0;
for (let i = 0; i < 50; i++) {
  let primerDado = Math.floor(Math.random() * 6) + 1;
  let segundoDado = Math.floor(Math.random() * 6) + 1;
  resultado = primerDado + segundoDado;
  switch (resultado) {
    case 2:
      suma[0] += 1;
      break;
    case 3:
      suma[1] += 1;
      break;
    case 4:
      suma[2] += 1;
      break;
    case 5:
      suma[3] += 1;
      break;
    case 6:
      suma[4] += 1;
      break;
    case 7:
      suma[5] += 1;
      break;
    case 8:
      suma[6] += 1;
      break;
    case 9:
      suma[7] += 1;
      break;
    case 10:
      suma[8] += 1;
      break;
    case 11:
      suma[9] += 1;
      break;
    case 12:
      suma[10] += 1;
      break;

    default:
      document.write("ocurrió un error");
      break;
  }
}

document.write(`

<table>
  <thead>
    <tr>
      <th>Suma🎲🎲</th>
      <th>Apariciones</th>
    </tr>
  </thead>
  <tbody>
`);
for (let i = 0; i < 11; i++) {
  document.write(`<tr>
    <td>${i + 2} </td>
    <td>${suma[i]} </td>
  </tr>`);
}
document.write("</tbody> </table>");
