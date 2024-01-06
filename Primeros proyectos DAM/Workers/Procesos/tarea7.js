onmessage = function(datos){
    //console.log(datos)
                
                var destino = 0;
                for(var i = 0;i<datos.data.px.data.length-8;i+=4){
                    var borde = false; //en principio supongo que no hay un borde en el pixel que estoy registrando
                    // para cada uno de los pixeles compruebo si hay mucha diferenecia de color o no lo hay
                    if(Math.abs(datos.data.px.data[i] - datos.data.px.data[i-(datos.data.mianchurabucket*4)-4]) > datos.data.miumbral){borde = true;} // pixel de arriba a la izquierd
                    if(Math.abs(datos.data.px.data[i] - datos.data.px.data[i-(datos.data.mianchurabucket*4)]) > datos.data.miumbral){borde = true;}// pixel de arriba
                    if(Math.abs(datos.data.px.data[i] - datos.data.px.data[i-(datos.data.mianchurabucket*4)+4]) > datos.data.miumbral){borde = true;}//pixel de arriba a la derecha
                    if(Math.abs(datos.data.px.data[i] - datos.data.px.data[i-4]) > datos.data.miumbral){borde = true;} //pixel de la izquierda
                    if(Math.abs(datos.data.px.data[i] - datos.data.px.data[i+4]) > datos.data.miumbral){borde = true;} //pixel de la derecha
                    if(Math.abs(datos.data.px.data[i] - datos.data.px.data[i-(datos.data.mianchurabucket*4)-4]) > datos.data.miumbral){borde = true;} //pixel de abajo a la izquierda
                    if(Math.abs(datos.data.px.data[i] - datos.data.px.data[i-(datos.data.mianchurabucket*4)]) > datos.data.miumbral){borde = true;} //pixel de abajo
                    if(Math.abs(datos.data.px.data[i] - datos.data.px.data[i-(datos.data.mianchurabucket*4)+4]) > datos.data.miumbral){borde = true;} //pixel de abajo a la derecha
                    if(borde == true){ //en el caso de que si que haya un borde, en ese caso pinto de negro
                      
                      
                        
                         datos.data.pxdst.data[i] = 0; //pongo la componente rojo acero
                        datos.data.pxdst.data[i+1] = 0; //pongo la componente verde en cero
                        datos.data.pxdst.data[i+2] = 0; //pongo la componente azul en cero
                        datos.data.pxdst.data[i+3] = 255;//pongo la trasparencia opaca*/
                    }else{ // y en eel caso de que no haya un borde, en ese caso pinto de blanco.
                    
                        
                        datos.data.pxdst.data[i] = 255; //pongo la componente roja al maximo valor
                        datos.data.pxdst.data[i+1] = 255; //pongo la componente verde al maximo valor
                        datos.data.pxdst.data[i+2] = 255; //pongo la componente azul al maximo valor
                        datos.data.pxdst.data[i+3] = 255; // La trasparencia y la sigo poniendo opaca.*/
                    }
                }
                json = {mix:datos.data.mix,miy:datos.data.miy,resultado:datos.data.pxdst,miidworker:datos.data.idworker}
                postMessage(json)
}