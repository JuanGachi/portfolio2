
package proyectojava22;

import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;


public class Proyectojava22 {

  
    public static void main(String[] args) throws IOException {
      
        int anchura = 800;                                                      //Anchura que tendrá la imagen
        int altura = 400;                                                       //Altura que tendra la imagen
        
         BufferedImage imagen = null;                                                                          //Recurso vacio por si mas adelante nos interesa
      
      BufferedImage imagencacheada = new BufferedImage(anchura,altura,BufferedImage.TYPE_INT_RGB); //Creo una imagen con su altura y anchura y tipo de color
      
      Graphics2D graficos = imagencacheada.createGraphics();                    //Digo que dentro de esa imagen voy a pintar cosas
      // ////////////// En este trozo puedes pintar ////////// //
      graficos.setColor(Color.white);
      graficos.fillRect(0, 0, 300, 300);
      
      
      graficos.setColor(Color.RED);                                           //digo que lo que voy a pintar es con color rojo  
      graficos.fillRect(20,20,300,300);                         //Pinto un rectangulo
    
      graficos.setColor(Color.green);
      graficos.drawString("Programa de Juan Jose",300,200);
      
    
      imagen = ImageIO.read(new File("logos/javascript_logo.png"));
      graficos.drawImage(imagen,0,0,null);
      graficos.drawImage(imagen,0,0,400,400, null);
      
      
      // ////////////// En este trozo puedes pintar ////////// //
      graficos.dispose();                                                       //libero el recurso
      
      for(int i = 0;i<10;i++){
      
      File archivo = new File("guardado/primeraprueba.png"); //Apunto a un nuevo archivo
     
      ImageIO.write(imagencacheada,"png",archivo); // Con la libreria correspondiente, guardo el mng en ese archivo.     
      
      
    }
    
    }
}