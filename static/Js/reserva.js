// const BASEURL ='http://127.0.0.1:5000/';

// // const BASEURL='https://com24187.pythonanywhere.com/'


// /**
//  * Función para realizar una petición fetch con JSON.
//  * @param {string} url - La URL a la que se realizará la petición.
//  * @param {string} method - El método HTTP a usar (GET, POST, PUT, DELETE, etc.).
//  * @param {Object} [data=null] - Los datos a enviar en el cuerpo de la petición.
//  * @returns {Promise<Object>} - Una promesa que resuelve con la respuesta en formato JSON.
//  */
// async function fetchData(url, method, data = null) {
//   const options = {
//       method: method,
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: data ? JSON.stringify(data) : null,  // Si hay datos, los convierte a JSON y los incluye en el cuerpo
//   };
//   // try {
//   //   const response = await fetch(url, options);  // Realiza la petición fetch
//   //   if (!response.ok) {
//   //     throw new Error(`Error: ${response.statusText}`);
//   //   }
//   //   return await response.json();  // Devuelve la respuesta en formato JSON
//   // } catch (error) {
//   //   console.error('Fetch error:', error);
//   //   alert('An error occurred while fetching data. Please try again.');
//   // }
// }

// /**
//  * Función para comunicarse con el servidor para poder Crear o Actualizar
//  * un registro de pelicula
//  * @returns 
//  */
// async function saveReserva(){
//   const idReserva = document.querySelector('#id-reserva').value;
//   // const fecha = document.querySelector('#fecha').value;
//   const hora = document.querySelector('#horaReserva').value;
//   const comensales = document.querySelector('#comensalesReserva').value;
//   const email = document.querySelector('#emailReserva').value;
//   const nombre = document.querySelector('#nombreReserva').value;
//   const local = document.querySelector('#localReserva').value;

//   // VALIDACION DE FORMULARIO
//   // if (!local || !hora || !comensales || !email || !nombre) {
//   //   Swal.fire({
//   //       fecha: 'Error!',
//   //       text: 'Por favor completa todos los campos.',
//   //       icon: 'error',
//   //       confirmButtonText: 'Cerrar'
//   //   });
//   //   return;
//   // }
//   // Crea un objeto con los datos de la película
//   const reservaData = {
//       // fecha: fecha,
//       hora: hora,
//       comensales: comensales,
//       email: email,
//       nombre: nombre,
//       local: local

//   };

    
//   let result = null;
//   // Si hay un idReserva, realiza una petición PUT para actualizar la película existente
//   if(idReserva!==""){
//     result = await fetchData(`${BASEURL}/api/reservas/${idReserva}`, 'PUT', reservaData);
//   }else{
//     // Si no hay idReserva, realiza una petición POST para crear una nueva película
//     result = await fetchData(`${BASEURL}/api/reservas/`, 'POST', reservaData);
//   }
  
//   const formReserva = document.querySelector('#formReserva');
//   formReserva.reset();
//   // Swal.fire({
//   //   // fecha: 'Exito!',
//   //   text: result.message,
//   //   icon: 'success',
//   //   confirmButtonText: 'Cerrar'
//   // })
//   showReservas();
// }


// /**
//  * Funcion que permite crear un elemento <tr> para la tabla de peliculas
//  * por medio del uso de template string de JS.
//  */
// async function showReservas(){
//   let reservas =  await fetchData(BASEURL+'/api/reservas/', 'GET');
//   const tableReservas = document.querySelector('#lista-table-reservas tbody');
//   tableReservas.innerHTML='';
//   reservas.forEach((reserva) => {
//     let tr = `<tr>
//                   <td>${reserva.hora}</td>
//                   <td>${reserva.comensales}</td>
//                   <td>${reserva.email}</td>
//                   <td>${reserva.nombre}</td>
//                   <td>${reserva.local}</td>
//                   <td>
//                       <button class="btn-reserva" onclick='updateReserva(${reserva.id_reserva})'><i class="fa fa-pencil" ></button></i>
//                       <button class="btn-reserva" onclick='deleteReserva(${reserva.id_reserva})'><i class="fa fa-trash" ></button></i>
//                   </td>
//                 </tr>`;
//     tableReservas.insertAdjacentHTML("beforeend",tr);
//   });
// }
  
// /**
//  * Function que permite eliminar una pelicula del array del localstorage
//  * de acuedo al indice del mismo
//  * @param {number} id posición del array que se va a eliminar
//  */
// function deleteReserva(id){
//   Swal.fire({
//       fecha: "Esta seguro de eliminar la pelicula?",
//       showCancelButton: true,
//       confirmButtonText: "Eliminar",
//   }).then(async (result) => {
//       if (result.isConfirmed) {
//         let response = await fetchData(`${BASEURL}/api/reservas/${id}`, 'DELETE');
//         showReservas();
//         Swal.fire(response.message, "", "success");
//       }
//   });
  
// }


// /**
//  * Function que permite cargar el formulario con los datos de la pelicula 
//  * para su edición
//  * @param {number} id Id de la pelicula que se quiere editar
//  */
// async function updateReserva(id){
//   //Buscamos en el servidor la pelicula de acuerdo al id
//   let response = await fetchData(`${BASEURL}/api/reservas/${id}`, 'GET');
//   const idReserva = document.querySelector('#id-reserva');
//   // const fecha = document.querySelector('#fecha');
//   const hora = document.querySelector('#hora');
//   const comensales = document.querySelector('#comensales');
//   const email = document.querySelector('#email');
//   const nombre = document.querySelector('#nombre');
//   const local = document.querySelector('#local');
  
//   idReserva.value = response.id_reserva;
//   // fecha.value = response.fecha;
//   hora.value = response.hora;
//   comensales.value = response.comensales;
//   email.value = response.email;
//   nombre.value = response.nombre;
//   local.value = response.local;
// }
  
// // Escuchar el evento 'DOMContentLoaded' que se dispara cuando el 
// // contenido del DOM ha sido completamente cargado y parseado.
// document.addEventListener('DOMContentLoaded',function(){
//   const btnSaveReserva = document.querySelector('#btn-save-reserva');
//   //ASOCIAR UNA FUNCION AL EVENTO CLICK DEL BOTON
//   btnSaveReserva.addEventListener('click',saveReserva);
//   showReservas();
// });
