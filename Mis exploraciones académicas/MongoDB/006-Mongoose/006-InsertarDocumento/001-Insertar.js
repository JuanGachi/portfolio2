var mongoose = require("mongoose");
//npm intall mongoose

const conexion = 'mongodb://127.0.0.1/contacto'

const formularioSchema = new
mongoose.Schema({
    nombre:String,
    asunto:String,
    mensaje:String,
    fecha:String
})

const Formulario =
mongoose.model("Formulario",formularioSchema)

const NuevoFormulario = new Formulario({
    nombre:"Juan Jose",
        asunto:"Este es un mensaje desde node",
        mensaje:"Este es el cuerpo del mensaje",
        fecha:"2023-08-15"
    })


mongoose.connect(conexion,
{useNewUrlParser:true,useUnifiedTopology:true}).then(function(){
    console.log("conectado a mongo")
    NuevoFormulario.save()
    .then(function(formularios){
        console.log("Insertado")
    })
    
})