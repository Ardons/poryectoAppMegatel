//ELEMENTOS DEL FORMULARIO
const formularioRegistro = document.getElementById("formulario-registro");


function iniciarApp() {
  formularioRegistro.addEventListener("submit", (event) => {
    event.preventDefault();

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

