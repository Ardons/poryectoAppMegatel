const express = require("express");
const app = express();

const port = 3000;


app.use(express.static('public'));
//usa el modulo cors para que no hayan restricciones
app.use(cors());
//permite usar json en express
app.use(express.json());



app.get("/", (req,res) => {
  res.send("HOLA MUNDO");
});



app.listen(port, () =>{
  console.log("CORRIENDO EN PUERTO: " + port);
})
