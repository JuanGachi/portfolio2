

package com.mycompany.proyectojava4;

public class Proyectojava4 {

    public static void main(String[] args) {
       
        float operador1 = 4 ;
        float operador2 = 3 ;
        
    // Suma
    float suma = operador1 + operador2;
    System.out.println( " La suma es: "+ suma );
    // Resta
    float resta = operador1 - operador2 ;
    System.out.println( " La resta es: "+resta);
    // Multiplicacion
    float multiplicacion =  operador1 * operador2 ;
    System.out.println( " La multiplicación es: "+multiplicacion);
                       
    // División
    double division = operador1 / operador2;
    System.out.println("La división es: " + division );
    
    boolean igualdad = operador1 == operador2;
     System.out.println("La comparacion es: "+igualdad);
     
    boolean noigualdad = operador1 != operador2;
    System.out.println("La comparacion es: "+noigualdad);
    
    boolean igualdadexacta = operador1 == operador2;
    System.out.println("La comparacion es: "+igualdadexacta);
    
    boolean menorque = operador1 < operador2;
    System.out.println("La comparacion es: "+menorque);
    
    boolean mayorque = operador2 > operador2;
    System.out.println("La comparacion es: "+igualdadexacta);
    
   } 
}
