const formReserva=document.getElementById("formReserva")

const inputEmail=document.getElementById("emailReserva");
const inputNombre=document.getElementById("nombreReserva");
const inputLocal=document.getElementById("local-reserva");


const parrafoEmail=document.getElementById("errorEmail");
const parrafoNombre=document.getElementById("errorNombre");
const parrafoLocal=document.getElementById("errorLocal");

// console.log(inputNombre);

formReserva.addEventListener("submit",e=>{
e.preventDefault();

let warningEmail="";
let warningNombre="";
let warningLocal="";

let valorEmail=false;
let valorNombre=false;
let valorLocal=false;

parrafoEmail.innerHTML="";
parrafoNombre.innerHTML="";
parrafoLocal.innerHTML="";

let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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


if(valorEmail){
    parrafoEmail.innerHTML=warningEmail;
}else{
    parrafo.innerHTML="Enviado";
    formRegister.reset();
}

if(valorNombre){
    parrafoNombre.innerHTML=warningNombre;
}else{
    parrafo.innerHTML="Enviado";
    formRegister.reset();
}

if(valorLocal){
    parrafoLocal.innerHTML=warningLocal;
}else{
    parrafo.innerHTML="Enviado";
    formRegister.reset();
}

})