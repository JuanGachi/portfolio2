/* Aquí cargamos todo aquello que se va a ir repitiendo una y otra vez durante el juego */
function bucle(){
    /* Al principio de cada bucle, borramos el lienzo anterior */
    contexto.clearRect(0,0,anchuranavegador,alturanavegador);
    contextopunto.clearRect(0,0,512,512);
    contextopunto.fillRect(posx/50,posy/50,5,5)
    dibujaterreno();
    colisionpersonajeterreno()
    calculodesfase()
    pintanpc()
    pintarecogibles()
    pintaprops()
    pintapersonaje()
    colisionprops()
    pintopremio()
    muere()
    
    clearTimeout(temporizador); /* Eliminamos el temporizador actual */
    if(pause == false){
        temporizador = setTimeout("bucle()",33); /* Creamos un nuevo temporizador para volver a ejecutar el bucle */
    }
}