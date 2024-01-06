<?php

    class Persona{
        //propiedades --- son variables
            private $edad = 0;
            private $pelo = "no mucho";
            private $nombre = "JuanJo";
        //metodos --- funciones
        public function diHola(){
        echo "Te estoy diciendo hola";
        }
        public function getNombre(){
            echo "Me llamo ".$this->nombre."<br>";
        }
        public function setNombre($nuevonombre){
            
            $this->nombre = $nuevonombre;
        }
    }
$juan = new Persona();
//echo "La edad de Juan es ".$juan->edad."<br>";
//echo " El pelo de Juan es ".$juan->pelo."<br>";
//echo " El nombre  de Juan es ".$juan->nombre."<br>";

//$juan->nombre = "Juan";

//echo " El nombre  de Juan es ".$juan->nombre."<br>";
$juan->diHola();
$juan->getNombre();
$juan->setNombre("Pedro");
$juan->getNombre();
?>