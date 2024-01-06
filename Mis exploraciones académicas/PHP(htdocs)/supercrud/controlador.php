
<?php
class Supercontrolador{
    
    function formulario($tabla){
        include "config.php";
        echo '<form action="?" method="POST">';
        echo '<input type="hidden" name="clave" value="procesaformulario">';
        echo '<input type="hidden" name="tabla" value="'.$tabla.'">';
        $mysqli = new mysqli($mydbserver, $mydbuser, $mydbpassword, $mydb);
        $consulta = "SHOW FULL COLUMNS FROM ".$tabla;
        $resultado = $mysqli->query($consulta);
        while ($fila = $resultado->fetch_assoc()) {

          //  var_dump(json_decode($fila["Comment"])->visible);
          if(json_decode($fila["Comment"])->visible == "true"){
                  preg_match('#\((.*?)\)#', $fila["Type"], $match);
             echo '
                <div class="campo">
                    <h3>'.json_decode($fila["Comment"])->titulo.'</h3>
                    
                    <p>'.json_decode($fila["Comment"])->descripcion.' - Caracteres minimo '.json_decode($fila["Comment"])->min.' maximo '.$match[1].' </p>
                    ';
                    if ($fila["Null"] == "NO") {echo "<p>*este campo es requerido</p> ";}
                    if (json_decode($fila["Comment"])->deshabilitado == "true"){echo "<p>* Este campo esta deshabilitado ya que lo rellena automaticamente el sistema</p> ";}
                  
                    echo '
                    <div class="contienecampo">
                    <table><tr><td width="80%">
                    <input type="'.json_decode($fila["Comment"])->tipodato.'" name="' . $fila["Field"] . '" id="' . $fila["Field"].'"
                ';
                if ($fila["Null"] == "NO") {echo " required ";}
                 if (json_decode($fila["Comment"])->deshabilitado == "true") {echo " readonly ";}
                    preg_match('#\((.*?)\)#', $fila["Type"], $match);
                    echo '
                    maxlength = "'.$match[1].'"
                    minlength = "'.json_decode($fila["Comment"])->min.'"
                    placeholder = "'.json_decode($fila["Comment"])->placeholder.'"
                    ';
                    if(isset(json_decode($fila["Comment"])->parametroget)){
                        echo ' value = "'.$_GET[json_decode($fila["Comment"])->parametroget].'"';
                    }
                    echo '
                >
                </td><td width="20%">
                <div class="tipocampo"><i class="'.json_decode($fila["Comment"])->icono.'"></i></div>
                </td></tr></table>
                </div>
                
                <div class="clearfix"></div>
                </div>
                ';
            }
        
        }
        echo '<input type="submit">';
        $mysqli->close();
}

    function procesaformulario(){
        //vamos a analizar que es lo que viene antes de meterlo
         foreach($_REQUEST as $nombre_campo => $valor){
             //echo "el campo es: ".$nombre_campo." y el valor es .$valor";
             if(preg_match('~\b(delete|drop|truncate)\b~i', $nombre_campo)){
                 $volcado = implode(",", $_REQUEST).",".$_SERVER['REMOTE_ADDR'].",".$_SERVER['HTTP_USER_AGENT']."\n";
                 $myfile = fopen("volcado.txt", "a");
                 fwrite($myfile, $volcado);
                 die("ejecucion detenida");
             }
              if(preg_match('~\b(delete|drop|truncate)\b~i', $valor)){
                   $volcado = implode(",", $_REQUEST).",".$_SERVER['REMOTE_ADDR'].",".$_SERVER['HTTP_USER_AGENT']."\n";
                 $myfile = fopen("volcado.txt", "a");
                 fwrite($myfile, $volcado);
                  die("ejecucion detenida");
              }
         }
  
        include "config.php";
        $listadocolumnas = "";
        $listadovalores = "";
        foreach($_POST as $nombre_campo => $valor){
            //echo "recibo el campo ".$nombre_campo." con el valor ".$valor."<br>";
            if($nombre_campo != 'tabla' && $nombre_campo != 'clave'){
                $listadocolumnas .= ",".$nombre_campo."";
                $listadovalores .= ",'".$valor."'";
            }
        }
     /////////////// 
        /*
     $cabeceras = 'From: noreply@jocarsa.com' . "\r\n" .
        'Reply-To: noreply@jocarsa.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();                                      I
        //$cabeceras .=  'MIME-Version: 1.0' . "\r\n";
        //$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        //$mensaje = "<h1>Has enviado un formulario al sistema de entregas</h1><br><p><br>A continuacion te mostramos un comprobante de los campos que has enviado desde el formulario</p><br>";
         foreach($_POST as $nombre_campo => $valor){
            //echo "recibo el campo ".$nombre_campo." con el valor ".$valor."<br>";
            if($nombre_campo != 'tabla' && $nombre_campo != 'clave'){
                $mensaje .= "".ucfirst($nombre_campo)."; <b>".$valor."</b><br>";
            }
          
       }    
        $mensaje .= "<br><p>Puedes consultar tus entregas previamente realizadas haciendo click:";
        $mensaje .= "<a href='https://jocarsa.com/proyectos/entregas/informe.php?clave=".codifica($_POST['email'])."'>AQUI</a></p>";
        $mensaje .= "<p style='color:red;'>IMPORTANTE: Este enlace contiene un clave con tu identificacion  no compratas este correo electronico</p><br>"
       mail(
         $_POST['email'],
         "Formulario enviado",
         $mensaje,
         $cabeceras
     );
       */ 
        /////////////////////////

        $mysqli = new mysqli($mydbserver, $mydbuser, $mydbpassword, $mydb);
        $consulta = "INSERT INTO ".$_POST['tabla']." (Identificador".$listadocolumnas.") VALUES (NULL".$listadovalores.")";
        // echo $consulta;
        $mysqli->query($consulta);
        include "registro.php";
        echo '
            <div class="notice">
                <h1>Registro guardado correctamente</h1>
                <p>Tu registro se ha guardado correctamente en la aplicación. Redirigiendo en 5 segundos</p>
            </div>
        
        ';
        echo '<meta http-equiv="refresh" content="5; url=?" />
        ';
     
    }
    function leer($tabla){
        include "config.php";
        //echo "A continuacion te pongo el contenido de la tabla ".$tabla;
        $mysqli = new mysqli($mydbserver, $mydbuser, $mydbpassword, $mydb);
        $consulta = "SHOW FULL COLUMNS FROM ".$tabla;
        $resultado = $mysqli->query($consulta);
        echo '<table>';
        echo '<tr>';
        $contadorcolumna = 0;
        while ($fila = $resultado->fetch_assoc()) {
            echo '<th>'.@json_decode($fila["Comment"])->titulo.'</th>';
            $nombrecolumna[$contadorcolumna] = $fila["Field"];
            $contadorcolumna++;
        }
        echo '<th>Operaciones</th>';
        echo '</tr>';
        $consulta = "SHOW FULL COLUMNS FROM ".$tabla;
        $resultado = $mysqli->query($consulta);
        echo '<tr>';
        echo '<form action="?tabla='.$tabla.'&buscar=si" method="POST">';
        $contadorcolumna = 0;
        while ($fila = $resultado->fetch_assoc()) {
            echo '<th><input type="text" name="'.$fila["Field"].'" class="campobuscador"><i class="fas fa-search iconobusca"></i></th>';
            $comentarios[$contadorcolumna] = $fila["Comment"];
           $contadorcolumna++;
        }
        
        echo '<th><input type="submit" value="Busca"></th>';
        echo '</form>';
        echo '</tr>';
        $consulta = "
        SELECT * FROM ".$tabla." ";
        
        
        if(isset($_GET['buscar'])){
            $consulta .= "WHERE ";
            foreach($_POST as $clave=>$valor){
                $consulta .= $clave." LIKE '%".$valor."%' AND ";
            }
            $consulta .= " true";
        }
        if(!isset($_GET['buscar'])){
        $consulta .=" LIMIT ".$_SESSION['elementosporpagina']." "; 
        $consulta .=" OFFSET ".($_SESSION['elementosporpagina']*$_SESSION['pagina'])." ";
        }
        //echo $consulta;
        $resultado = $mysqli->query($consulta);
        
        while ($fila = $resultado->fetch_assoc()) {
            $identificador = "";
            echo '<tr>';
            $contadorcolumna = 0;
            //var_dump($fila);
            foreach($fila as $nombre_campo => $valor){
                
                //echo $nombre_campo;
                if($nombrecolumna[$contadorcolumna] == "Identificador"){$identificador = $valor;}
               // echo $comentarios[$contadorcolumna];
                if(isset(json_decode($comentarios[$contadorcolumna])->FKtabla) && json_decode($comentarios[$contadorcolumna])->FKtabla != ""){
                    $consulta2 = "SELECT  ".json_decode($comentarios[$contadorcolumna])->FKmostrar." AS campo FROM ".json_decode($comentarios[$contadorcolumna])->FKtabla ." WHERE ".json_decode($comentarios[$contadorcolumna])->FKclave." ='".$valor."'";
                    //echo $consulta2;
                    $resultado2 = $mysqli->query($consulta2);
                    while ($fila2 = $resultado2->fetch_assoc()) {
                   echo '<td externo="si" tabla="'.$tabla.'" claveexterna="'.json_decode($comentarios[$contadorcolumna])->FKclave.'" tablaexterna="'.json_decode($comentarios[$contadorcolumna])->FKtabla.'" columna="'.$nombrecolumna[$contadorcolumna].'" identificador= "'.$identificador.'" columnaexterna="'.json_decode($comentarios[$contadorcolumna])->FKmostrar.'"><b>'.$valor."</b> - ".$fila2['campo'].'
                   '; 
                    }
                    echo '</td>';
                }else{
                echo '<td externo="no" class="'.$nombrecolumna[$contadorcolumna].'" columna="'.$nombrecolumna[$contadorcolumna].'" tabla="'.$tabla.'" identificador= "'.$identificador.'" ';

                if(filter_var($valor, FILTER_VALIDATE_URL)){echo "urlsi";}
                echo   '">';
                if(filter_var($valor, FILTER_VALIDATE_URL)){echo "<a href='".$valor."' target='_blank'>";}
                if(filter_var($valor, FILTER_VALIDATE_EMAIL)){echo "<a href='mailto:".$valor."' target='_blank'>";}
                echo $valor;
                if(filter_var($valor, FILTER_VALIDATE_EMAIL)){echo "</a>";}
                if(filter_var($valor, FILTER_VALIDATE_URL)){echo "</a>";} 
                /*
                if(filter_var($valor, FILTER_VALIDATE_URL)){
                    $url = $valor;
                    $parsed = parse_url($url);
                    if($parsed['host'] == "www.youtube.com" || $parsed['host'] == "youtu.be"){
                    $parts = parse_url($url);
                    parse_str($parts['query'], $query);
                    $miparte = $query['v'];
                    echo '<iframe width="300" height="200" src="https://www.youtube.com/embed/'.$miparte.'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                        }
                
                            }
                        */
                        echo '</td>
                        ';
                }
                $contadorcolumna++;
                    }
           
            echo '<td>';
            echo '<a href="?tabla='.$_GET['tabla'].'&informe='.$fila['Identificador'].'"><i class="fas fa-file-alt"></i></a>';
            echo '<a href="?tabla='.$_GET['tabla'].'&update='.$fila['Identificador'].'"><i class="fas fa-pen-square"></i></a>';
            echo '<a href="?tabla='.$_GET['tabla'].'&delete='.$fila['Identificador'].'"><i class="fas fa-minus-square"></li></a>';
            echo '</td>';
                

            echo '</tr>';
           
        }
      
        echo '</table>';
        echo '<a href="?create='.$_GET['tabla'].'" id="create"><i class="fas fa-plus-circle"></i></a>';
        echo '<div class="paginacion">
            <a href="?tabla='.$_GET['tabla'].'&pagina=primera"><i class="fas fa-arrow-circle-left"></i></a>
            <a href="?tabla='.$_GET['tabla'].'&pagina=anterior"><i class="fas fa-chevron-circle-left"></i></a>
            <a href="?tabla='.$_GET['tabla'].'&pagina=siguiente"><i class="fas fa-chevron-circle-right"></i></a>
            <a href="?tabla='.$_GET['tabla'].'&pagina=ultima"><i class="fas fa-arrow-circle-right"></i></a>
        
        
        </div>';
    }
    function informe($tabla,$identificador){
        echo "<h1>Informe</h1>";
          include "config.php";
        //echo "A continuacion te pongo el contenido de la tabla ".$tabla;
        $mysqli = new mysqli($mydbserver, $mydbuser, $mydbpassword, $mydb);
        $consulta = "SELECT * FROM ".$tabla." WHERE Identificador = ".$identificador." ";
        $resultado = $mysqli->query($consulta);
        echo '<table>';
        
        while ($fila = $resultado->fetch_assoc()) {
            echo '';
            foreach($fila as $indice=>$valor){
                echo '<tr><td>'.$indice.'</td><td>'.$valor.'</td></tr>';
            }
            echo '';
          
        }
         echo '</table>';
        
         echo '<table>'; 
             
         $consulta = "SELECT * FROM informes WHERE tabla = '".$tabla."'";
        $resultado = $mysqli->query($consulta);
        while ($fila = $resultado->fetch_assoc()) {
                echo "La peticion que voy a hacer es: ".str_replace('[X]',$identificador,$fila['consulta']);
                $consulta2 = str_replace('[X]',$identificador,$fila['consulta']);
                $resultado2 = $mysqli->query($consulta2);
                while ($fila2 = $resultado2->fetch_assoc()){
                    echo '<tr>';
                    foreach($fila2 AS $clave=>$valor){
                        echo '<td>'.valor.'</td>';
                    }
                    echo '</tr>';
                }
        }
         echo '</table>';
    }
    function insertar($tabla){
        include "config.php";
        echo '<form action="?tabla='.$tabla.'" method="POST">';
        echo '<input type="hidden" name="clave" value="procesainsertar">';
        echo '<input type="hidden" name="tabla" value="'.$tabla.'">';
        $mysqli = new mysqli($mydbserver, $mydbuser, $mydbpassword, $mydb);
        $consulta = "SHOW FULL COLUMNS FROM ".$tabla;
        $resultado = $mysqli->query($consulta);
        while ($fila = $resultado->fetch_assoc()) {

          //  var_dump(json_decode($fila["Comment"])->visible);
          if(json_decode($fila["Comment"])->visible == "true"){
                  preg_match('#\((.*?)\)#', $fila["Type"], $match);
             echo '
                <div class="campo">
                    <h3>'.json_decode($fila["Comment"])->titulo.'</h3>
                    
                    <p>'.json_decode($fila["Comment"])->descripcion.' - Caracteres minimo '.json_decode($fila["Comment"])->min.' maximo '.$match[1].' </p>
                    ';
                    if ($fila["Null"] == "NO") {echo "<p>*este campo es requerido</p> ";}
                    if (json_decode($fila["Comment"])->deshabilitado == "true"){echo "<p>* Este campo esta deshabilitado ya que lo rellena automaticamente el sistema</p> ";}
                  
                    echo '
                    <div class="contienecampo">
                    <table><tr><td width="80%">
                    <input type="'.json_decode($fila["Comment"])->tipodato.'" name="' . $fila["Field"] . '" id="' . $fila["Field"].'"
                ';
                if ($fila["Null"] == "NO") {echo " required ";}
                 if (json_decode($fila["Comment"])->deshabilitado == "true") {echo " readonly ";}
                    preg_match('#\((.*?)\)#', $fila["Type"], $match);
                    echo '
                    maxlength = "'.$match[1].'"
                    minlength = "'.json_decode($fila["Comment"])->min.'"
                    placeholder = "'.json_decode($fila["Comment"])->placeholder.'"
                    ';
                    if(isset(json_decode($fila["Comment"])->parametroget)){
                        echo ' value = "'.$_GET[json_decode($fila["Comment"])->parametroget].'"';
                    }
                    echo '
                >
                </td><td width="20%">
                <div class="tipocampo"><i class="'.json_decode($fila["Comment"])->icono.'"></i></div>
                </td></tr></table>
                </div>
                
                <div class="clearfix"></div>
                </div>
                ';
            }
        
        }
        echo '<input type="submit">';
        $mysqli->close();
}
      function procesainsertar(){
        //vamos a analizar que es lo que viene antes de meterlo
         foreach($_REQUEST as $nombre_campo => $valor){
             //echo "el campo es: ".$nombre_campo." y el valor es .$valor";
             if(preg_match('~\b(delete|drop|truncate)\b~i', $nombre_campo)){
                 $volcado = implode(",", $_REQUEST).",".$_SERVER['REMOTE_ADDR'].",".$_SERVER['HTTP_USER_AGENT']."\n";
                 $myfile = fopen("volcado.txt", "a");
                 fwrite($myfile, $volcado);
                 die("ejecucion detenida");
             }
              if(preg_match('~\b(delete|drop|truncate)\b~i', $valor)){
                   $volcado = implode(",", $_REQUEST).",".$_SERVER['REMOTE_ADDR'].",".$_SERVER['HTTP_USER_AGENT']."\n";
                 $myfile = fopen("volcado.txt", "a");
                 fwrite($myfile, $volcado);
                  die("ejecucion detenida");
              }
         }
  
        include "config.php";
        $listadocolumnas = "";
        $listadovalores = "";
        foreach($_POST as $nombre_campo => $valor){
            //echo "recibo el campo ".$nombre_campo." con el valor ".$valor."<br>";
            if($nombre_campo != 'tabla' && $nombre_campo != 'clave'){
                $listadocolumnas .= ",".$nombre_campo."";
                $listadovalores .= ",'".$valor."'";
            }
        }
     

        $mysqli = new mysqli($mydbserver, $mydbuser, $mydbpassword, $mydb);
        $consulta = "INSERT INTO ".$_POST['tabla']." (Identificador".$listadocolumnas.") VALUES (NULL".$listadovalores.")";
        // echo $consulta;
          
          
        $mysqli->query($consulta);
        include "registro.php";
        
     
    }
      function delete($tabla,$identificador){
      
  
        include "config.php";
        
     

        $mysqli = new mysqli($mydbserver, $mydbuser, $mydbpassword, $mydb);
        $consulta = "DELETE FROM ".$tabla." WHERE Identificador = ".$identificador." ";
        // echo $consulta;
          
          
        $mysqli->query($consulta);
        include "registro.php";
        
     
    }
     function update($tabla,$identificador){
        include "config.php";
        echo '<form action="?tabla='.$tabla.'" method="POST">';
        echo '<input type="hidden" name="clave" value="procesaupdate">';
        echo '<input type="hidden" name="tabla" value="'.$tabla.'">';
         echo '<input type="hidden" name="identificador" value="'.$identificador.'">';
        $mysqli = new mysqli($mydbserver, $mydbuser, $mydbpassword, $mydb);
        $consulta = "SHOW FULL COLUMNS FROM ".$tabla;
        $resultado = $mysqli->query($consulta);
        while ($fila = $resultado->fetch_assoc()) {

          //  var_dump(json_decode($fila["Comment"])->visible);
          if(json_decode($fila["Comment"])->visible == "true"){
                  preg_match('#\((.*?)\)#', $fila["Type"], $match);
             echo '
                <div class="campo">
                    <h3>'.json_decode($fila["Comment"])->titulo.'</h3>
                    
                    <p>'.json_decode($fila["Comment"])->descripcion.' - Caracteres minimo '.json_decode($fila["Comment"])->min.' maximo '.$match[1].' </p>
                    ';
                    if ($fila["Null"] == "NO") {echo "<p>*este campo es requerido</p> ";}
                    if (json_decode($fila["Comment"])->deshabilitado == "true"){echo "<p>* Este campo esta deshabilitado ya que lo rellena automaticamente el sistema</p> ";}
                  
                    echo '
                    <div class="contienecampo">
                    <table><tr><td width="80%">
                    <input type="'.json_decode($fila["Comment"])->tipodato.'" name="' . $fila["Field"] . '" id="' . $fila["Field"].'"
                ';
                if ($fila["Null"] == "NO") {echo " required ";}
                 if (json_decode($fila["Comment"])->deshabilitado == "true") {echo " readonly ";}
                    preg_match('#\((.*?)\)#', $fila["Type"], $match);
                    echo '
                    maxlength = "'.$match[1].'"
                    minlength = "'.json_decode($fila["Comment"])->min.'"
                    placeholder = "'.json_decode($fila["Comment"])->placeholder.'"
                    ';
                    // Me conecto a la base de datos y busco el valor
                    $consulta2 = "SELECT * FROM ".$tabla." WHERE Identificador = ".$identificador." ";
                    $resultado2 = $mysqli->query($consulta2);
                    while ($fila2 = $resultado2->fetch_assoc()) {
                        echo 'value = "'.$fila2[$fila["Field"]].'"';
                    }
                    // Me conecto a la base de datos y busco el valor
                    echo '
                >
                </td><td width="20%">
                <div class="tipocampo"><i class="'.json_decode($fila["Comment"])->icono.'"></i></div>
                </td></tr></table>
                </div>
                
                <div class="clearfix"></div>
                </div>
                ';
            }
        
        }
        echo '<input type="submit">';
        $mysqli->close();
}
      function procesaupdate($tabla,$identificador){
        //vamos a analizar que es lo que viene antes de meterlo
         foreach($_REQUEST as $nombre_campo => $valor){
             //echo "el campo es: ".$nombre_campo." y el valor es .$valor";
             if(preg_match('~\b(delete|drop|truncate)\b~i', $nombre_campo)){
                 $volcado = implode(",", $_REQUEST).",".$_SERVER['REMOTE_ADDR'].",".$_SERVER['HTTP_USER_AGENT']."\n";
                 $myfile = fopen("volcado.txt", "a");
                 fwrite($myfile, $volcado);
                 die("ejecucion detenida");
             }
              if(preg_match('~\b(delete|drop|truncate)\b~i', $valor)){
                   $volcado = implode(",", $_REQUEST).",".$_SERVER['REMOTE_ADDR'].",".$_SERVER['HTTP_USER_AGENT']."\n";
                 $myfile = fopen("volcado.txt", "a");
                 fwrite($myfile, $volcado);
                  die("ejecucion detenida");
              }
         }
  
        include "config.php";
        $cadena = "";
        foreach($_POST as $nombre_campo => $valor){
            //echo "recibo el campo ".$nombre_campo." con el valor ".$valor."<br>";
            if($nombre_campo != 'tabla' && $nombre_campo != 'clave'){
                $cadena .= $nombre_campo."='".$valor."',";
            }
        }
        $cadena = substr($cadena, 0,-1);

        $mysqli = new mysqli($mydbserver, $mydbuser, $mydbpassword, $mydb);
        //$consulta = "INSERT INTO ".$_POST['tabla']." (Identificador".$listadocolumnas.") VALUES (NULL".$listadovalores.")";
        $consulta = "UPDATE " .$tabla." SET ".$cadena."   WHERE Identificador = ".$identificador." ";
        
        // echo $consulta;
          
          
        $mysqli->query($consulta);
        include "registro.php";
        
     
    }
}
?>

