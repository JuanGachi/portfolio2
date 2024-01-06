<?php
//abro la conexion con la base de datos
$enlace = mysqli_connect("localhost", "cursoaplicacionesweb", "cursoaplicacionesweb", "cursoaplicacionesweb");

// Le pido algo a la base de datos
$resultado = mysqli_query($enlace, "SELECT * FROM usuarios");
// Devuelvo por pantalla lo que me de
while ($fila = $resultado->fetch_assoc()) {
   echo $fila['nombre']." ".$fila['apellidos']."<br>";
}

mysqli_close($enlace);
?>