//ELEMENTOS DEL FORMULARIO
const formularioRegistro = document.getElementById("formulario-registro");
const botonEnviar = document.getElementById("boton-form-enviar");
const seccionTabla = document.getElementById("registro-datos");
const botonBuscar = document.getElementById("boton-buscar");
const divFilaNueva = document.getElementById("div-nueva-fila");
const botonEliminar = document.getElementById("boton-eliminar");
let generarFila;

function iniciarApp() {
  agregarRegistros();
  consultarDatos();
  eliminarElemento();
}


function agregarRegistros(){

  formularioRegistro.addEventListener("submit", (event) => {
    event.preventDefault();


    const id = `${Math.random().toFixed(5)}`;
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const empresa = document.getElementById("empresa").value;

    generarFila = `
    <div class="dato">${id}</div>
    <div class="dato">${nombre}</div>
    <div class="dato">${correo}</div>
    <div class="dato">${telefono}</div>
    <div class="dato">${empresa}</div>

    `

    seccionTabla.innerHTML += generarFila;


    let transaction = {
      id:id,
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      empresa: empresa
    }

    let transactionJson = JSON.stringify(transaction);
    console.log(transactionJson);

    //mandar los datos al backend y guardalos ahi
    fetch("http://localhost:3000/registro",{
      method: "POST",
      headers:{
        "content-Type": "application/json"
      },
      body: transactionJson
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log("Error al enviar la solaicitud", error);
    })

  })

}

function consultarDatos(){
  botonBuscar.addEventListener("click", () => {
    const idModificar = document.getElementById("id-modificar").value;
    const idEnviar = String(idModificar);
    console.log("id del lado del frontend " + idModificar);
    /*let transaction = {
      id:idModificar
    }
    let transactionJson = JSON.stringify(transaction);
    console.log(transactionJson);*/

    //mandar los datos al backend y guardalos ahi
    fetch(`http://localhost:3000/buscar/${idModificar}`,{
      method: "GET",
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json();
    })
    .then(data => {
      console.log("la data devuelta es: ", data);


      let generarFila2 =`
        <div class="dato">${data.id}</div>
        <div class="dato">${data.nombre}</div>
        <div class="dato">${data.correo}</div>
        <div class="dato">${data.telefono}</div>
        <div class="dato">${data.empresa}</div>
      `
      divFilaNueva.innerHTML = generarFila2;
    })
    .catch(error => {
      console.log("Error al enviar la solaicitud", error);
    })

  })
}

function eliminarElemento(){
  botonEliminar.addEventListener("click", () => {
    const idModificar = document.getElementById("id-modificar").value;
    const idEnviar = String(idModificar);
    console.log("id del lado del frontend ELIMINAR " + idModificar);


    //mandar los datos al backend y guardalos ahi
    fetch(`http://localhost:3000/eliminar/${idModificar}`,{
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json();
    })
    .then(data => {
      console.log("la data devuelta es: ", data);
    })
    .catch(error => {
      console.log("Error al enviar la solaicitud", error);
    })

  })
}

window.addEventListener("load", iniciarApp);

