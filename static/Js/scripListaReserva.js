const listaReseras = ["1-1", "1-2", "1-3", "1-4", "1-5", "1-6", "1-7"];
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
