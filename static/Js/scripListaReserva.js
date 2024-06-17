// const listaReseras = ["Central", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"];
// // listaReseras.forEach((Element) => console.log(Element));

// const lista =document.getElementById("fila1")
// // console.log(lista)

// function logArrayElements(element) {
//     // console.log("a[" + index + "] = " + element);
//     const parrafo = document.createElement('p');
//     parrafo.textContent= element;
//     lista.appendChild(parrafo);
//   }

// listaReseras.forEach(logArrayElements);
// // prompt(listaReseras);


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
  
];
// listaReseras2.forEach((Element) => console.log(Element));

const lista1 =document.getElementById("listaFilas")

let contador = 1;

function logArrayElements2(element) {
  const division = document.createElement('div');
  const valorID = "fila"+contador;
  division.setAttribute('id', valorID)
  // division.textContent= element;
  // console.log(element)
  lista1.appendChild(division);

  function logArrayElements2(element2) {
    // console.log("a[" + index + "] = " + element);
    const parrafo = document.createElement('p');
    parrafo.textContent= element2;
    // console.log(element2)
    division.appendChild(parrafo);

  }
  element.forEach(logArrayElements2);
  contador++;
}
listaReseras2.forEach(logArrayElements2)




// Footer Reserva //
// Footer Reserva //
// Footer Reserva //

const numPaginas =document.getElementById("numPaginas")
const cantidadPaginas = (listaReseras2.length / 15)
// console.log(numPaginas)
// console.log(listaReseras2.length);
// console.log(parseInt(listaReseras2.length/15))
// console.log((listaReseras2.length / 15) >0)
if (cantidadPaginas >1){
    if(cantidadPaginas == parseInt(cantidadPaginas)){
      const parrafoFooter = document.createElement('p');
      parrafoFooter.textContent= " de " + cantidadPaginas;
      numPaginas.appendChild(parrafoFooter);
      console.log("es entero")
    }
    else{
      const parrafoFooter = document.createElement('p');
      parrafoFooter.textContent= " de " + (parseInt(cantidadPaginas)+1);
      numPaginas.appendChild(parrafoFooter);
      console.log("tiene fraccion")
    }
}
else{
  const parrafoFooter = document.createElement('p');
  parrafoFooter.textContent= 1;
  numPaginas.appendChild(parrafoFooter);
}
