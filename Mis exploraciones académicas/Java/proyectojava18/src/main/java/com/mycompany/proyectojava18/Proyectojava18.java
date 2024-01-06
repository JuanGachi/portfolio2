
package com.mycompany.proyectojava18;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;


public class Proyectojava18 {

    public static void main(String[] args) {
  
        try{
          
            
            Class.forName("com.mysql.cj.jdbc.Driver"); //importar el paquete "mysql-connector-java"
            System.out.println("Connection database...");
            //ahora establezco la conexion
            Connection conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/cursojava","cursojava","cursojava");
            //preparo una peticion a la base de datos
            Statement peticion = conexion.createStatement();
            peticion.executeQuery("INSERT INTO agenda VALUES (NULL,'Juan','1234','juan@correo.com')");
           
        }catch(Exception e){
            e.printStackTrace();
        }
        
        
    }
}
// falla por que estaba creado como Maven y tenia que haber estado creado como Ant para poder acceder a las librerias.