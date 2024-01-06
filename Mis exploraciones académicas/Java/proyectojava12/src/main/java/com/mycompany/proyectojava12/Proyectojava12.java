
package com.mycompany.proyectojava12;


public class Proyectojava12 {

    public static void main(String[] args) {
        saluda("Juanjo");
        saluda("Paco");
        saluda("Jose");
    }
    public static void saluda(String nombre){
        System.out.println("Hola,"+nombre+", como estas?"); 
     }    
    public static void saluda(String nombre,String dia){
        System.out.println("Hola,"+nombre+", como estas? Sabes que hoy es "+dia+"?");     
    
    }
        
}
