const formReserva = document.getElementById("formReserva");

const inputHora = document.getElementById("horaReserva");
const inputComensales = document.getElementById("comensalesReserva");
const inputEmail = document.getElementById("emailReserva");
const inputNombre = document.getElementById("nombreReserva");
const inputLocal = document.getElementById("localReserva");

const parrafoHora = document.getElementById("errorHora");
const parrafoComensales = document.getElementById("errorComensales");
const parrafoEmail = document.getElementById("errorEmail");
const parrafoNombre = document.getElementById("errorNombre");
const parrafoLocal = document.getElementById("errorLocal");

// console.log(inputNombre);

formReserva.addEventListener("submit", e => {
    e.preventDefault();

    let warningHora = "";
    let warningComensales = "";
    let warningEmail = "";
    let warningNombre = "";
    let warningLocal = "";

    let valorHora = false;
    let valorComensales = false;
    let valorEmail = false;
    let valorNombre = false;
    let valorLocal = false;

    parrafoHora.innerHTML = "";
    parrafoComensales.innerHTML = "";
    parrafoEmail.innerHTML = "";
    parrafoNombre.innerHTML = "";
    parrafoLocal.innerHTML = "";

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // VALIDA LOS CAMPOS.
    
    if (inputHora.value != "09:00" ||
        inputHora.value != "09:30" ||
        inputHora.value != "10:00" ||
        inputHora.value != "10:30" ||
        inputHora.value != "11:00" ||
        inputHora.value != "11:30" ||
        inputHora.value != "12:30" ||
        inputHora.value != "13:00" ||
        inputHora.value != "13:30" ||
        inputHora.value != "14:00" ||
        inputHora.value != "14:30" ||
        inputHora.value != "15:00" ||
        inputHora.value != "15:30" ||
        inputHora.value != "16:00" ||
        inputHora.value != "16:30" ||
        inputHora.value != "17:00" ||
        inputHora.value != "17:30" ||
        inputHora.value != "18:00") {
        warningHora = `La hora no es valida.`
        valorHora = true;
        // prompt(parseInt(inputComensales.value))
    }

    if (parseInt(inputComensales.value, 10) < 1 || parseInt(inputComensales.value, 10) > 25) {
        warningComensales = `La cantidad no es valida.`
        valorComensales = true;
        // prompt(parseInt(inputComensales.value))
    }

    if (!regexEmail.test(inputEmail.value)) {
        warningEmail = `El email no es valido.`
        valorEmail = true;
    }

    if (inputNombre.value.length < 3 || validarNombre == false) {
        warningNombre = `El nombre es corto.`
        valorNombre = true;
    }

    if (inputLocal.value == "default") {
        warningLocal = `Elija una opcion.`
        valorLocal = true;
    }

    // ESCRIBE POR PANTALLA LOS MENSAJES EN LOS "P".

    if (valorHora) {
        parrafoHora.innerHTML = warningHora;
    } else {
        // parrafo.innerHTML="Enviado";
        // formRegister.reset();
    }

    if (valorComensales) {
        parrafoComensales.innerHTML = warningComensales;
    } else {
        // parrafo.innerHTML="Enviado";
        // formRegister.reset();
    }

    if (valorEmail) {
        parrafoEmail.innerHTML = warningEmail;
    } else {
        // parrafo.innerHTML="Enviado";
        // formRegister.reset();
    }

    if (valorNombre) {
        parrafoNombre.innerHTML = warningNombre;
    } else {
        // parrafo.innerHTML="Enviado";
        // formRegister.reset();
    }

    if (valorLocal) {
        parrafoLocal.innerHTML = warningLocal;
    } else {
        // parrafo.innerHTML="Enviado";
        // formRegister.reset();
    }

    // BORRA TODO EL FORMULARIO SI TODOS LOS CAMPOS ESTAN BIEN.

    if (!valorEmail && !valorNombre && !valorLocal && !valorComensales && !valorHora) {
        formReserva.reset();
    }

})

// PRUEBA PARA VALIDAR EL NOMBRE.
function validarNombre() {
    var nombre = inputNombre.value.trim();
    if (nombre === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }

    for (var i = 0; i < nombre.length; i++) {
        var charCode = nombre.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
            alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
            return false;
        }
    }
}