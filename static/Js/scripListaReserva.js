const listaReseras = ["Central", "2024/12/05", "18:30", "Homero Simpson", "icelacreyo@hotmial.com", "20", "correcto"];
// listaReseras.forEach((Element) => console.log(Element));

const lista =document.getElementById("fila1")
// console.log(lista)

function logArrayElements(element) {
    // console.log("a[" + index + "] = " + element);
    const parrafo = document.createElement('p');
    parrafo.textContent= element;
    lista.appendChild(parrafo);
  }

listaReseras.forEach(logArrayElements);
// prompt(listaReseras);
