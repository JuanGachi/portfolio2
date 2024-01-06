
package proyectojava27;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Proyectojava27 {

    
    public static void main(String[] args) {
       
        Pattern patron = Pattern.compile("coco",Pattern.CASE_INSENSITIVE);
        Matcher frase = patron.matcher("El zumo que me he puesto tiene coco y piña");
        
        boolean encontrado = frase.find();
        
       if(encontrado){
           System.out.println("Si que se ha entontrado");
       }else{    
           System.out.println("No se ha encontrado");
       }
    }
    
}
