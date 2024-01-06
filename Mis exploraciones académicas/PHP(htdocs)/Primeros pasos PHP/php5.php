<?php
$edad = 42;
if($edad < 30){
    
    echo "Eres una persona joven<br>";
}else{
    echo "Ya no eres una persona joven<br>";
}
    
$dia = "viernes";
switch($dia){
    case "lunes": echo "Hoy es el peor dia de la semana";break;
        case "martes": echo "Hoy es el segundo dia de la semana";break;
        case "miercoles": echo "Hoy estamos en medio de la semana";break;
        case "jueves": echo "Falta un dia para el fin de semana";break;
        case "viernes": echo "Ya es viernes por fin";break;
        case "sabado": echo "El sabado me toca estudiar y salir";break;
        case "domingo": echo "El domingo toca estudiar mas";break;
        default : echo "Lo que has escrito no es un dia de la semana";
        
}




?>