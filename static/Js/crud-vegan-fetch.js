
// const BASEURL ='http://127.0.0.1:5000/';

const BASEURL='https://vegan.pythonanywhere.com/';

/**
 * Función para realizar una petición fetch con JSON.
 * @param {string} url - La URL a la que se realizará la petición.
 * @param {string} method - El método HTTP a usar (GET, POST, PUT, DELETE, etc.).
 * @param {Object} [data=null] - Los datos a enviar en el cuerpo de la petición.
 * @returns {Promise<Object>} - Una promesa que resuelve con la respuesta en formato JSON.
 */
async function fetchData(url, method, data = null) {
  const options = {
      method: method,
      headers: {
          'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : null,  // Si hay datos, los convierte a JSON y los incluye en el cuerpo
  };
  try {
    const response = await fetch(url, options);  // Realiza la petición fetch
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();  // Devuelve la respuesta en formato JSON
  } catch (error) {
    console.error('Fetch error:', error);
    alert('"Ocurrió un error al recuperar los datos. Por favor, inténtalo nuevamente"');
  }
}

/**
 * Función para comunicarse con el servidor para poder Crear o Actualizar
 * un registro de reserva.
 * @returns 
 */
async function saveReserva(){
  const idReserva = document.querySelector('#id-reserva').value;
  const local = document.querySelector('#local').value;
  const hora = document.querySelector('#hora').value;
  const nombre = document.querySelector('#nombre').value;
  const email = document.querySelector('#email-form').value;
  const comensales = document.querySelector('#comensales-form').value;

  //VALIDACION DE FORMULARIO
  if (!local || !hora || !nombre || !email || !comensales) {
    Swal.fire({
        title: 'Error!',
        text: 'Por favor completa todos los campos.',
        icon: 'error',
        confirmButtonText: 'Cerrar'
    });
    return;
  }

  // Crea un objeto con los datos de la reserva
  const reservaData = {
      local: local,
      hora: hora,
      nombre: nombre,
      email: email,
      comensales: comensales
  };

  let result = null;
  // Si hay un idReserva, realiza una petición PUT para actualizar la reserva existente
  if(idReserva !== ""){
    result = await fetchData(`${BASEURL}/api/reservas/${idReserva}`, 'PUT', reservaData);
  } else {
    // Si no hay idReserva, realiza una petición POST para crear una nueva reserva
    result = await fetchData(`${BASEURL}/api/reservas/`, 'POST', reservaData);
  }

  const formReserva = document.querySelector('#form-reserva');
  formReserva.reset();
  Swal.fire({
    title: 'Éxito!',
    text: result.message,
    icon: 'success',
    confirmButtonText: 'Cerrar'
  });
  showReservas();
}

/**
 * Funcion que permite crear un elemento <tr> para la tabla de reservas
 * por medio del uso de template string de JS.
 */
async function showReservas(){
  let reservas = await fetchData(BASEURL+'/api/reservas/', 'GET');
  const tableReservas = document.querySelector('#list-table-reservas tbody');
  tableReservas.innerHTML = '';
  reservas.forEach((reserva) => {
    let tr = `<tr>
                  <td>${reserva.local}</td>
                  <td>${reserva.hora}</td>
                  <td>${reserva.nombre}</td>
                  <td>${reserva.email}</td>
                  <td>${reserva.comensales}</td>
                  <td>
                      <button class="btn-cac" onclick='updateReserva(${reserva.id_reserva})'><i class="fa fa-pencil"></i></button>
                      <button class="btn-cac" onclick='deleteReserva(${reserva.id_reserva})'><i class="fa fa-trash"></i></button>
                  </td>
                </tr>`;
    tableReservas.insertAdjacentHTML("beforeend", tr);
  });
}

/**
 * Function que permite eliminar una reserva del array del localstorage
 * de acuerdo al índice del mismo
 * @param {number} id posición del array que se va a eliminar
 */
function deleteReserva(id){
  Swal.fire({
      title: "¿Está seguro de eliminar la reserva?",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText:"Cancelar",
  }).then(async (result) => {
      if (result.isConfirmed) {
        let response = await fetchData(`${BASEURL}/api/reservas/${id}`, 'DELETE');
        showReservas();
        Swal.fire(response.message, "", "success");
      }
  });
}

/**
 * Function que permite cargar el formulario con los datos de la reserva
 * para su edición
 * @param {number} id Id de la reserva que se quiere editar
 */
async function updateReserva(id){
  //Buscamos en el servidor la reserva de acuerdo al id
  let response = await fetchData(`${BASEURL}/api/reservas/${id}`, 'GET');
  const idReserva = document.querySelector('#id-reserva');
  const local = document.querySelector('#local');
  const hora = document.querySelector('#hora');
  const nombre = document.querySelector('#nombre');
  const email = document.querySelector('#email-form');
  const comensales = document.querySelector('#comensales-form');
  
  idReserva.value = response.id_reserva;
  local.value = response.local;
  hora.value = response.hora;
  nombre.value = response.nombre;
  email.value = response.email;
  comensales.value = response.comensales;
}

// Escuchar el evento 'DOMContentLoaded' que se dispara cuando el
// contenido del DOM ha sido completamente cargado y parseado.
document.addEventListener('DOMContentLoaded', function(){
  const btnSaveReserva = document.querySelector('#btn-save-reserva');
  //ASOCIAR UNA FUNCION AL EVENTO CLICK DEL BOTON
  btnSaveReserva.addEventListener('click', saveReserva);
  showReservas();
});
