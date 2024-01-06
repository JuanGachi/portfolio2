<?php
    echo "Que sepas que el usuario que has enviado es ".$_POST['usuario']."<br>";
    echo "Que sepas que el password que has enviado es ".$_POST['password']."<br>";
//abro la conexion con la base de datos
$enlace = mysqli_connect("localhost", "cursoaplicacionesweb", "cursoaplicacionesweb", "cursoaplicacionesweb");

// Le pido algo a la base de datos
$resultado = mysqli_query($enlace, "
INSERT INTO usuarios
VALUES(NULL,
'".$_POST['usuario']."',
'".$_POST['password']."',
'".$_POST['nombre']."',
'".$_POST['apellidos']."',
'".$_POST['email']."',
'".$_POST['direccion']."',
'".$_POST['telefono']."'
)

");
// Cierro los recursos que haya abierto
mysqli_close($enlace);

echo "El registro se ha metido en la base de datos";

?>
