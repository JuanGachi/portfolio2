
package com.mycompany.proyectojava17;
import java.io.FileWriter;
//import java.io.File;
//importo la libreria para abrir archivos
import java.io.IOException;
//Captura errores que se puedan producir al abrir el archivo.
 import java.io.File;   
import java.util.Scanner;

    
public class Proyectojava17 {

    public static void main(String[] args) {
     
         try{                                                                     //Primero intenta hacer algo
            FileWriter miarchivo = new FileWriter("archivo.txt");         //abre un archivo
            miarchivo.write("Hola que sepas que esto se ha escrito desde Java");   //le escribo algo en el contenido
            miarchivo.close();                                                          //Cierra los recursos despues de usarlos   
        } catch(IOException e){                                                   //En el caso de que el try falle
            e.printStackTrace();                                                  //Dime en que ha fallado.
      }
       /////////////////////////////////////////////////////////////////
       try{                                                                     //Primero intento hacer algo
             File miotroarchivo = new File("archivo.txt");              //Abro un archivo
                Scanner lector = new Scanner(miotroarchivo);                //Leo nl contenido del archivo
                 while(lector.hasNextLine()){                                   //Mientras que el archivo tenga lineas de texto
                     System.out.println(lector.nextLine());                     //Imprimeme la linea actual en la pantalla
       }
       }catch(IOException e){                                                   //En el caso de que de error de lectura
           e.printStackTrace();                                                 //Dime en que ha consistido el error
           
       }
                  
       }
       
       
       
       
       
       
       /* try{
         File miarchivo = new File("archivo.txt");
        }catch(IOException){
        e.printStackTrace();
        
        
        }
       //intenta hacer algo si puedes hacerlo haces lo primero, y sinos haces lo otro, parecida a if/else */
       
    }

