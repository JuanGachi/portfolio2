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
        SELECT * FROM entradas
     
        `,function(err,result){
        if(err) throw err;
        console.log(result)
    })
})