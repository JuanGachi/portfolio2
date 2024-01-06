
package proyectojava23;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.imageio.ImageIO;


public class Proyectojava23 {

  
    public static void main(String[] args) {
       
         try{
                Class.forName("com.mysql.cj.jdbc.Driver"); //importar el paquete "mysql-connector-java"
                System.out.println("Connection database...");
                //ahora establezco la conexion
                Connection conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/cursojava","cursojava","cursojava");
                //preparo una peticion a la base de datos
                Statement peticion = conexion.createStatement();
                
                //Inserto fila
                peticion.executeUpdate("INSERT INTO agenda VALUES (NULL,'Juan','1234','juan@correo.com')");
                
               //Traer filas
               ResultSet resultado = peticion.executeQuery("SELECT * FROM cursos");
               int numero = 1;
               
               while(resultado.next()){
                    //Imprimeme en pantalla el resultado
                    System.out.println(resultado.getString(3));
                    //////////////////////////////////////////////////////////////////////////////////////////////
                   
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
      graficos.drawString(resultado.getString(3),300,200);
      
      BufferedImage imagen1 = null;  
                    try {
                        imagen1 = ImageIO.read(new File("logos/"+resultado.getString(7)));
                    } catch (IOException ex) {
                        Logger.getLogger(Proyectojava23.class.getName()).log(Level.SEVERE, null, ex);
                    }
      graficos.drawImage(imagen1,0,0,400,400, null);
      
      BufferedImage imagen2 = null;  
                    try {
                        // El error estaba en esta linea
                        imagen2 = ImageIO.read(new File("fotos/Fotos Jose Vicente Carratala "+String.format("%05d",numero)+".jpg"));
                    } catch (IOException ex) {
                        Logger.getLogger(Proyectojava23.class.getName()).log(Level.SEVERE, null, ex);
                    }
      numero++;
      graficos.drawImage(imagen2,400,0,400,400, null);
     // utiliza || +String.format("%05d",numero)+ || para que continue sumando fotos a partir de la 0009
      graficos.setColor(Color.white);
      graficos.fillRect(390, 0, 20, 400);
      Color negrotransparente = new Color(0,0,0,127);
      graficos.setColor(negrotransparente);
      graficos.fillRect(0, 370, anchura, 400);
      
       graficos.setColor(Color.white);
       graficos.setFont(new Font("Arial",Font.PLAIN,30));
      graficos.drawString(resultado.getString(3),10 ,395);
      
      
      // ////////////// En este trozo puedes pintar ////////// //
      graficos.dispose();                                                       //libero el recurso
      
       /*
      */
      File archivo = new File("guardado/"+String.format("%05d",numero)+ " " +resultado.getString(2)+".png");//Apunto a un nuevo archivo
                    try {
                        ImageIO.write(imagencacheada,"png",archivo); // Con la libreria correspondiente, guardo el mng en ese archivo.     
                    } catch (IOException ex) {
                        Logger.getLogger(Proyectojava23.class.getName()).log(Level.SEVERE, null, ex);
                    }
         numero++;
         System.out.println(numero);
      
    
                    
                    
                    
                     ////////////////////////////////////////////////////////////////////////////////////////////// //
                }
            }catch(ClassNotFoundException | SQLException e){
            }    
    }
    

    }

