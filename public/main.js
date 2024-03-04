//ELEMENTOS DEL FORMULARIO
const formularioRegistro = document.getElementById("formulario-registro");
const botonEnviar = document.getElementById("boton-form-enviar");

alert("hola")

function iniciarApp() {

}

function generarId(){
  botonEnviar.addEventListener("click", (event) =>{
    /*const id = `${Math.random()}`;
    console.log("se genera in id" + id);
    agregarRegistros(id)*/
    alert("Hola")

  })
}

function agregarRegistros(){

  formularioRegistro.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("hola")
    const id = `${Math.random()}`;
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const empresa = document.getElementById("empresa").value;



    let transaction = {

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

window.addEventListener("load", iniciarApp);

