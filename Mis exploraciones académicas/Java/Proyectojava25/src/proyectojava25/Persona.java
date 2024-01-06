
package proyectojava25;


public class Persona {
     double minx = 0;                                                      //Establezco un minimo
     double maxx = 1920;                                                       //Establezco un maximo
     double randomx = minx + Math.random() * (maxx - minx);
     public double x = randomx;
     double miny = 0;
     double maxy = 1080;
                                                                                 //Establezco un minimo
                                                                                     //Establezco un maximo
     double randomy = miny + Math.random() * (maxy - miny);
     public double y = randomy;
     public float direccion = 0;
    
     public void mueveBola(){                                                    // Esta funcion mueve la bola
        double min = -0.5;                                                      //Establezco un minimo
        double max = 0.5;                                                       //Establezco un maximo
        double random = min + Math.random() * (max - min);                      //Creo un numero aleatorio entre el minimo y el maximo
        direccion += random ;                                                   // Vario la direccion de forma aleatoria
        x += Math.cos(direccion);                                               // Aumento la x en base a la direccion y su coseno
        y += Math.sin(direccion);                                               // Aumento la y en base a la direccion y su seno
        if(x > 1920){direccion += Math.PI;}                                      // En el caso que la x sea menor que 500 pega la vuelta al colisionar.
        if(x < 0){direccion += Math.PI;}                                        // Pega la vuelta al colisinar
        if(y > 1080){direccion += Math.PI;}                                      // Pega la vuelta al colisinar 
        if(y < 0){direccion += Math.PI;}                                        // Pega la vuelta al colisinar
    }
}
