const formReserva=document.getElementById("formReserva");

const inputComensales=document.getElementById("comensalesReserva");
const inputEmail=document.getElementById("emailReserva");
const inputNombre=document.getElementById("nombreReserva");
const inputLocal=document.getElementById("localReserva");

const parrafoComensales=document.getElementById("errorComensales");
const parrafoEmail=document.getElementById("errorEmail");
const parrafoNombre=document.getElementById("errorNombre");
const parrafoLocal=document.getElementById("errorLocal");

// console.log(inputNombre);

formReserva.addEventListener("submit",e=>{
e.preventDefault();

let warningComensales="";
let warningEmail="";
let warningNombre="";
let warningLocal="";

let valorComensales = false;
let valorEmail=false;
let valorNombre=false;
let valorLocal=false;

parrafoComensales.innerHTML="";
parrafoEmail.innerHTML="";
parrafoNombre.innerHTML="";
parrafoLocal.innerHTML="";

let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// VALIDA LOS CAMPOS.


if(parseInt(inputComensales.value,10) < 1 || parseInt(inputComensales.value,10) > 25){
    warningComensales=`La cantidad no es valida.`
    valorComensales=true;
    // prompt(parseInt(inputComensales.value))
}

if(!regexEmail.test(inputEmail.value)){
    warningEmail=`El email no es valido.`
    valorEmail=true;
}

if(inputNombre.value.length<3){
   warningNombre=`El nombre es corto.`
   valorNombre=true;
}

if(inputLocal.value=="default"){
    warningLocal=`Elija una opcion.`
    valorLocal=true;
}

// ESCRIBE POR PANTALLA LOS MENSAJES EN LOS "P".

if(valorComensales){
    parrafoComensales.innerHTML=warningComensales;
}else{
    // parrafo.innerHTML="Enviado";
    // formRegister.reset();
}

if(valorEmail){
    parrafoEmail.innerHTML=warningEmail;
}else{
    // parrafo.innerHTML="Enviado";
    // formRegister.reset();
}

if(valorNombre){
    parrafoNombre.innerHTML=warningNombre;
}else{
    // parrafo.innerHTML="Enviado";
    // formRegister.reset();
}

if(valorLocal){
    parrafoLocal.innerHTML=warningLocal;
}else{
    // parrafo.innerHTML="Enviado";
    // formRegister.reset();
}

// BORRA TODO EL FORMULARIO SI TODOS LOS CAMPOS ESTAN BIEN.

if(!valorEmail && !valorNombre && !valorLocal && !valorComensales){
    formReserva.reset();
}

})