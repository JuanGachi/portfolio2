function colisionpersonajeterreno(){
    /*Colisión del personaje con el terreno*/
    var pixelpersonaje = contextomapa.getImageData(Math.round(posx/50)+1,Math.round(posy/50)+1,1,1)
    for(var i = 0;i<pixelpersonaje.data.length;i+=4){
        var cr = pixelpersonaje.data[i];
        var cg = pixelpersonaje.data[i+1];
        var cb = pixelpersonaje.data[i+2];
        var ca = pixelpersonaje.data[i+3];
        posz = cr*alturabloquez;
        if(ca == 0){
            
                console.log("te has caído")
            velocidadz *= 0.1;
            posz += velocidadz;
        }
    }    
    if(posz > 100){
        window.location = window.location;
    }
    
}

function calculodesfase(){
    /*
    if(isox(posx,posy)+desfasex < mediopantallax){desfasex+=velocidaddesfase;}else{desfasex-=velocidaddesfase;}
    if(isoy(posx,posy)+desfasey <= mediopantallay){desfasey+=velocidaddesfase;}else{desfasey-=velocidaddesfase;}
    */
    
    var mediopantallax = anchuranavegador/2;
    var mediopantallay = alturanavegador/2;
    desfasex = mediopantallax - isox(posx,posy)
    desfasey = mediopantallay - isoy(posx,posy)
    
}

function pintanpc(){
    ////////////////////////// PERSONAJES NPC /////////////////////////////////
    for(var i = 0;i<numeropersonajes;i++){
        
        var a = posx - arraypersonajes[i].x;
        var b = posy - arraypersonajes[i].y;
        var distancia = Math.sqrt( a*a + b*b )
        
        /* Muevo el personaje */
        if(distancia < 400){
            arraypersonajes[i].persigue();
            //arraypersonajes[i].mueve();
        }else{
            arraypersonajes[i].mueve();
        }
        
        if(distancia < 20){
            energia--;
        }
            
        
        var ytemp;
        
        if(arraypersonajes[i].direccionisometrica == 0){ytemp = 0;}
        if(arraypersonajes[i].direccionisometrica == 1){ytemp = 512;}
        if(arraypersonajes[i].direccionisometrica == 2){ytemp = 1024;}
        if(arraypersonajes[i].direccionisometrica == 3){ytemp = 1536;}
        
        if(arraypersonajes[i].color == 0){
            
        }
    else if(arraypersonajes[i].color == 1){
        
    }
    else if(arraypersonajes[i].color == 2){
        
    }
    else if(arraypersonajes[i].color == 3){
       
    }
    else if(arraypersonajes[i].color == 4){
        
    }
    else if(arraypersonajes[i].color == 5){
        
    }
        
        /* Dibujo al personaje */
        if(
                isox(arraypersonajes[i].x,arraypersonajes[i].y)+desfasex > -100
                &&
                isox(arraypersonajes[i].x,arraypersonajes[i].y)+desfasex < anchuranavegador
                &&
                isoy(arraypersonajes[i].x,arraypersonajes[i].y)+desfasey > -100
                &&
                isoy(arraypersonajes[i].x,arraypersonajes[i].y)+desfasey < alturanavegador
            ){
        contexto.drawImage(
            imagennpc1,
            arraypersonajes[i].estadoanim*256,
            ytemp+256,
            256,
            256,
            isox(arraypersonajes[i].x,arraypersonajes[i].y)+desfasex,
            isoy(arraypersonajes[i].x,arraypersonajes[i].y)+desfasey-arraypersonajes[i].z*alturabloquez,
            128,
            128
        ); 
        
        /* Dibujo la barra de energía */
        contexto.fillStyle = "grey";
        contexto.fillRect(
            isox(arraypersonajes[i].x,arraypersonajes[i].y)+32+desfasex,
            isoy(arraypersonajes[i].x,arraypersonajes[i].y)+desfasey-arraypersonajes[i].z*alturabloquez,
            64,10
        )
        contexto.fillStyle = "green";
        contexto.fillRect(
            isox(arraypersonajes[i].x,arraypersonajes[i].y)+32+2+desfasex,
            isoy(arraypersonajes[i].x,arraypersonajes[i].y+2)+desfasey-arraypersonajes[i].z*alturabloquez,
            60*(arraypersonajes[i].energia/100)
            ,6
        )
        }
    }
    ////////////////////////// PERSONAJES NPC ///////////////////////////////////////////////////////////////////
    
}

function pintarecogibles(){
    ////////////////////////// RECOGIBLES /////////////////////////////////
    for(var i = 0;i<numerorecogibles;i++){
        
        var a = posx - arrayrecogibles[i].x;
        var b = posy - arrayrecogibles[i].y;
        var distancia = Math.sqrt( a*a + b*b )
        if(distancia < 50){
            arrayrecogibles.splice(i, 1);
            numerorecogibles--;
            energia += 20;
        }
        
        /* Dibujo el recogible */
        if(arrayrecogibles[i].tipo == 1){
            contexto.drawImage(
            imagenrecogible1,
            isox(arrayrecogibles[i].x,arrayrecogibles[i].y)+desfasex,
            isoy(arrayrecogibles[i].x,arrayrecogibles[i].y)+desfasey-arrayrecogibles[i].z*alturabloquez,
            128,
            128
            ); 
        }
        if(arrayrecogibles[i].tipo == 2){
            contexto.drawImage(
            imagenrecogible2,
            isox(arrayrecogibles[i].x,arrayrecogibles[i].y)+desfasex,
            isoy(arrayrecogibles[i].x,arrayrecogibles[i].y)+desfasey-arrayrecogibles[i].z*alturabloquez,
            128,
            128
            ); 
        }
        if(arrayrecogibles[i].tipo == 3){
            contexto.drawImage(
            imagenrecogible3,
            isox(arrayrecogibles[i].x,arrayrecogibles[i].y)+desfasex,
            isoy(arrayrecogibles[i].x,arrayrecogibles[i].y)+desfasey-arrayrecogibles[i].z*alturabloquez,
            128,
            128
            ); 
        }
        
        
        
        
    }
    ////////////////////////// RECOGIBLES ///////////////////////////////////////////////////////////////////
    
}

function pintaprops(){
    ////////////////////////// PROPS /////////////////////////////////
    for(var i = 0;i<numeroprops;i++){
        
        /* Dibujo el recogible */
        
        contexto.drawImage(
            imagenprop1,
            isox(arrayprops[i].x,arrayprops[i].y)+desfasex,
            isoy(arrayprops[i].x,arrayprops[i].y)+desfasey-arrayprops[i].z*alturabloquez,
            128,
            128
        ); 
        
        
        
    }
    ////////////////////////// PROPS ///////////////////////////////////////////////////////////////////
}

function pintapersonaje(){
    ////////////////////////////////////////////////////////// PROTAGONISTA /////////////////////////////////////
        if(saltando == true){
            saltopersonaje += velocidadz;
            velocidadz -= 5;
            if(saltopersonaje < 0){
                saltando = 0;
            }
        }
        if(( moviendo == true && accion == false ) || accion == true ){
            estadoanimacion++;
            if(estadoanimacion > 7){estadoanimacion = 0;accion = false;}
        }else{
            estadoanimacion = 1;
        }
        if(accion == true){
        contexto.drawImage(
                imagenpersonajeaccion,
                estadoanimacion*256,
                angulo+256,
                256,
                256,
                isox(posx,posy)+desfasex,
                isoy(posx,posy)+desfasey-posz-saltopersonaje,
                128,
                128
            );
        }else{
        contexto.drawImage(
                imagenpersonaje,
                estadoanimacion*256,
                angulo+256,
                256,
                256,
                isox(posx,posy)+desfasex,
                isoy(posx,posy)+desfasey-posz-saltopersonaje,
                128,
                128
            ); 
    }
    /* Barra energía protagonista */
    contexto.fillStyle = "grey";
        contexto.fillRect(
            isox(posx,posy)+32+desfasex,
            isoy(posx,posy)+desfasey-posz-saltopersonaje,
            64,10
        )
        contexto.fillStyle = "green";
        contexto.fillRect(
            isox(posx,posy)+32+2+desfasex,
            isoy(posx,posy+2)+desfasey-posz-saltopersonaje,
            60*(energia/100)
            ,6
        )
}

function colisionprops(){
    if(direccion == 1){
        var solido = contextomapaprops.getImageData(Math.floor(posx/50),Math.floor(posy/50),1,1).data[3]
        if(solido == 0){
            posx -= velocidad;angulo=0;
        }
    }
    
    if(direccion == 2){
        var solido = contextomapaprops.getImageData(Math.floor(posx/50),Math.floor(posy/50),1,1).data[3]
        if(solido == 0){
            posx += velocidad;angulo=1024;
        }
    }
    
    if(direccion == 3){
        var solido = contextomapaprops.getImageData(Math.floor(posx/50),Math.floor(posy/50),1,1).data[3]
        if(solido == 0){
            posy += velocidad;angulo=1536;
        }
    }
    
    if(direccion == 4){
        var solido = contextomapaprops.getImageData(Math.floor(posx/50),Math.floor(posy/50),1,1).data[3]
        if(solido == 0){
            posy -= velocidad;angulo=512;
        }
    }
}

function pintopremio(){
    contexto.drawImage(imagenbalon,isox(balonx,balony)+desfasex,isoy(balonx,balony)+desfasey);
    a = posx - balonx;
    b = posy - balony;
    distancia = Math.sqrt( a*a + b*b )
    if(distancia < 30){
        console.log("premio")
        dificultad();
    }
}

function muere(){
    if(energia < 0){
        $("#bienvenidaaljuego").fadeIn("slow")
        reiniciar();
        contexto.clearRect(0,0,anchuranavegador,alturanavegador);
        pause = true;
    }

}