const express = require("express");
//importamos CORS
const cors = require("cors");

//SE CREA LA APP
const app = express();
//se referencia el puerto
const port = 3000;

//se referencian los archivos static
app.use(express.static('public'));
//usa el modulo cors para que no hayan restricciones
app.use(cors());
app.use(
  express.urlencoded({
    extended: true
  })
)
//permite usar json en express
app.use(express.json({
  type:"*/*"
}));

//------------------------------------------**********************--------------------*********************************------------
let registrosApp = [];


//------------------------------------------**********************--------------------*********************************------------

//cuando me hagan un GET al http://localhost:3000/registro
app.get("/", (req,res) => {
  res.send(registrosApp);
});

//cuando me hagan un POST al http://localhost:3000/registro
app.post("/registro", (req, res) =>{
  const body = req.body;
  registrosApp.push(body);
  res.send(JSON.stringify("Peticion Guardada"));
  console.log(registrosApp);

});


app.listen(port, () =>{
  console.log("CORRIENDO EN PUERTO: " + port);
})
