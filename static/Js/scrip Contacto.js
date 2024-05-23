const formContacto=document.getElementById("formContacto");

const inputEmail=document.getElementById("emailContacto");
const inputNombre=document.getElementById("nombreContacto");
const inputAsunto=document.getElementById("asuntoContacto");
const inputMensaje=document.getElementById("mensajeContacto");


const parrafoEmail=document.getElementById("errorEmail");
const parrafoNombre=document.getElementById("errorNombre");
const parrafoAsunto=document.getElementById("errorAsunto");
const parrafoMensaje=document.getElementById("errorMensaje");

// console.log(inputNombre);

formContacto.addEventListener("submit",e=>{
e.preventDefault();

let warningEmail="";
let warningNombre="";
let warningAsunto="";
let warningMensaje="";

let valorEmail=false;
let valorNombre=false;
let valorAsunto=false;
let valorMensaje=false;

parrafoEmail.innerHTML="";
parrafoNombre.innerHTML="";
parrafoAsunto.innerHTML="";
parrafoMensaje.innerHTML="";


let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



// VALIDA LOS CAMPOS.

if(!regexEmail.test(inputEmail.value)){
    warningEmail=`El email no es valido.`
    valorEmail=true;
}

if(inputNombre.value.length<3){
   warningNombre=`El nombre es corto.`
   valorNombre=true;
}

if(inputAsunto.value.length<1){
    warningAsunto=`El mensaje debe incluir un Asunto.`
    valorAsunto=true;
 }

if(inputMensaje.value.length<1){
    warningMensaje=`El mensaje esta vacio.`
    valorMensaje=true;
 }

// ESCRIBE POR PANTALLA LOS MENSAJES EN LOS "P".

if(valorEmail){
    parrafoEmail.innerHTML=warningEmail;
}

if(valorNombre){
    parrafoNombre.innerHTML=warningNombre;
}

if(valorAsunto){
    parrafoAsunto.innerHTML=warningAsunto;
}

if(valorMensaje){
    parrafoMensaje.innerHTML=warningMensaje;
}

// BORRA TODO EL FORMULARIO SI TODOS LOS CAMPOS ESTAN BIEN.

if(!valorEmail && !valorNombre && !varlorAsunto && !valorMensaje){
    formContacto.reset();
}

})