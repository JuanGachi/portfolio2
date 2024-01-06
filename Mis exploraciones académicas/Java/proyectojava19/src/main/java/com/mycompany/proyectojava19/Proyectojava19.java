

package com.mycompany.proyectojava19;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class Proyectojava19 {

    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        
        try{
            Class.forName("com.mysql.jdbc.Driver"); //importar el paquete "mysql-connector-java"
            //ahora establezco la conexion
            Connection conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/cursojava","cursojava","cursojava");
            //preparo una peticion a la base de datos
            Statement peticion = conexion.createStatement();
            //A continuacion le pedimos algo a la base d edatos y lo guardamos dentro de un objeto (como si fuera una variable)
            ResultSet resultado = peticion.executeQuery("SELECT * FROM agenda");
            //Mientras que el resultado tenga lineas 
            while(resultado.next()){
                //Imprimeme en pantalla el resultado
                System.out.println(resultado.getString(1)+"-"+resultado.getString(2)+"-"+resultado.getString(3));
               
            }
        }catch(Exception e){
            e.printStackTrace();
        }
           
    }
}
