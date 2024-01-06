var archivos = require('fs');
archivos.writeFile("nuevo.txt",'Este es mi contenido2\n',function(err){
    if(err) throw err;
    console.log("Mision cumplida")
})