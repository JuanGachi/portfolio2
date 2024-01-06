var mysql = require("mysql")
//npm intall mysql

var conexion = mysql.createConnection({
    host:"localhost",
    user:"nodejs",
    password:"nodejs",
    database:"nodejs"
});
conexion.connect(function(err){
    if(err) throw err;
    console.log("conectado")
    conexion.query(`
        CREATE TABLE entradas
        ( 
            id INT AUTO_INCREMENT PRIMARY
            KEY,
            titulo VARCHAR(255),
            texto TEXT,
            fecha VARCHAR(255)   
        )
        
        `,function(err,result){
        if(err) throw err;
        console.log("Se ha crado la tabla")
    })
})