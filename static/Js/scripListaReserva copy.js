const listaReseras2 = [
  ["Central", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["1", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["2", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["3", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["4", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["5", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["6", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["7", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["8", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["9", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["10", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["11", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["12", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["13", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["14", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["15", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["16", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["17", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["18", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["19", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["20", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["21", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["22", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["23", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["24", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["25", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["26", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["27", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["28", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
  ["29", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"],
];

const lista1 = document.getElementById("listaFilas")

const numPagina = document.getElementById("numIngreso");
const numInicio = 0 + (15 * (numPagina.value - 1));
const numFinal = 15 + (15 * (numPagina.value - 1));

let contador = 0;

for (var i = numInicio; i < numFinal; i++) {
  const division = document.createElement('div');
  const valorID = "fila" + contador;
  division.setAttribute('id', valorID)
  lista1.appendChild(division);

  const filaCompleta = listaReseras2[i];

  // console.log((listaReseras2.length % 15) != 0);
  // console.log(contador < (listaReseras2.length % 15));
  // console.log(numPagina.value == parseInt(listaReseras2.length / 15) + 1)
  // console.log(parseInt(listaReseras2.length / 15));

  //////////// HAY QUE HACER PROCEDIMIENTO PARA VALIDAR QUE EL VALOR INGRESADO EN LABEL SEA > 0 Y NO TENGA CON "," ////////////
  //////////// HAY QUE HACER PROCEDIMIENTO PARA VALIDAR QUE EL VALOR INGRESADO EN LABEL SEA > 0 Y NO TENGA CON "," ////////////
  //////////// HAY QUE HACER PROCEDIMIENTO PARA VALIDAR QUE EL VALOR INGRESADO EN LABEL SEA > 0 Y NO TENGA CON "," ////////////
  //////////// HAY QUE HACER PROCEDIMIENTO PARA VALIDAR QUE EL VALOR INGRESADO EN LABEL SEA > 0 Y NO TENGA CON "," ////////////

  if ((listaReseras2.length % 15) == 0 &&
    (listaReseras2 / 15) != 0 &&
    numPagina.value <= ((parseInt(listaReseras2.length / 15)))) {
    for (var ii = 0; ii < 7; ii++) {
      const parrafo = document.createElement('p');
      parrafo.textContent = filaCompleta[ii];
      division.appendChild(parrafo);
      console.log("opcion 1");
    }
  } else if ((listaReseras2.length % 15) != 0) {

    if (numPagina.value == ((parseInt(listaReseras2.length / 15) + 1)) &&
      contador < (listaReseras2.length % 15)) {
        //Esto es para la ultima pagina.
      for (var ii = 0; ii < 7; ii++) {
        const parrafo = document.createElement('p');
        parrafo.textContent = filaCompleta[ii];
        division.appendChild(parrafo);
        console.log("opcion 2");
      }
    } else if (numPagina.value < ((parseInt(listaReseras2.length / 15) + 1))) {
      //Esto es para pagina intermedias.
      for (var ii = 0; ii < 7; ii++) {
        const parrafo = document.createElement('p');
        parrafo.textContent = filaCompleta[ii];
        division.appendChild(parrafo);
        console.log("opcion 3");
      }
    }
  } else {
    console.log("opcion 4");
  }

  contador++;
}

// for listagrande de 0 < 15
// 	tengo cada renglon --> creo los divs
// 		for fila de 0 < 7
// 			tengo filaxcolumna -->creo los parrafos


// Footer Reserva //
// Footer Reserva //
// Footer Reserva //

const numPaginas = document.getElementById("numPaginas")
const cantidadPaginas = (listaReseras2.length / 15)

if (cantidadPaginas > 1) {
  if (cantidadPaginas == parseInt(cantidadPaginas)) {
    const parrafoFooter = document.createElement('p');
    parrafoFooter.textContent = " de " + cantidadPaginas;
    numPaginas.appendChild(parrafoFooter);
    // console.log("es entero")
  }
  else {
    const parrafoFooter = document.createElement('p');
    parrafoFooter.textContent = " de " + (parseInt(cantidadPaginas) + 1);
    numPaginas.appendChild(parrafoFooter);
    // console.log("tiene fraccion")
  }
}
else {
  const parrafoFooter = document.createElement('p');
  parrafoFooter.textContent = "de 1";
  numPaginas.appendChild(parrafoFooter);
}

// Boton anterior //
// Boton anterior //
// Boton anterior //

// console.log(numIngreso.value);

function restarValor() {
  if (numIngreso.value > 1) {
    const valorPaginaNuevo = --numPagina.value;
    console.log(valorPaginaNuevo);
    numIngreso.setAttribute('value', valorPaginaNuevo);
  }
}

// Boton siguiente //
// Boton siguiente //
// Boton siguiente //

// console.log(numIngreso.value);

function sumarValor() {
  if (numIngreso.value < 10) {
    const valorPaginaNuevo = ++numPagina.value;
    console.log(valorPaginaNuevo);
    numIngreso.setAttribute('value', valorPaginaNuevo);
  }
}

