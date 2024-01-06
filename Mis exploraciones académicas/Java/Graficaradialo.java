
package graficaradialo;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;
import static java.lang.Math.round;
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;
import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Graficaradialo extends JPanel {
public static int getRandomNumberInRange(int min,int max) {
    if (min >= max) {
            throw new IllegalArgumentException("max must be greater than min");
    }
    Random r = new Random();
    return r.nextInt((max - min) + 1) + min;
}  
    @Override public void paint(Graphics g){
        super.paint(g);
        Graphics2D misgraficos = (Graphics2D) g;
       // Creo un conjunto de datos en un array
         float [] barras = new float[]{ 33,33,33,33,43,3,34,654,54};
         List misbarras = new ArrayList();
       
       // System.out.println("Que sepas que la suma de las porciones es: "+suma);
        int acontinuacion = 0;
           ////////// en primer lugar me conecto a la base de datos y saco datos
        String url = "jdbc:sqlite:C://Users/JUANJO/OneDrive/Escritorio/DAM/BASES DE DATOS/registros.db";
        Connection conn = null;
         try {
            String sql = "SELECT * FROM horasdeldia";
            conn = DriverManager.getConnection(url);
            Statement stmt  = conn.createStatement();
            ResultSet rs    = stmt.executeQuery(sql);
            while (rs.next()) {misbarras.add(Integer.parseInt(rs.getString("numero")));}
               /*sql = "SELECT * FROM mac";
               rs  = stmt.executeQuery(sql);
             while (rs.next()) {misbarras.add(Integer.parseInt(rs.getString("numero")));}
              sql = "SELECT * FROM ubuntu";
               rs  = stmt.executeQuery(sql);
             while (rs.next()) {misbarras.add(Integer.parseInt(rs.getString("numero")));}
              sql = "SELECT * FROM iphone";
               rs  = stmt.executeQuery(sql);
             while (rs.next()) {misbarras.add(Integer.parseInt(rs.getString("numero")));}
              sql = "SELECT * FROM android";
               rs  = stmt.executeQuery(sql);
             while (rs.next()) {misbarras.add(Integer.parseInt(rs.getString("numero")));} */     
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
         int tamanio = misbarras.size();
          float suma = 0;
         for(Object numero : misbarras) {
             System.out.println(numero);
             suma += (int)numero;
         }
          System.out.println("la suma es: " +suma);
          System.out.println(misbarras.size()); 
        // Ahora dibujo la gráfica
        for(Object numero : misbarras) {
            int rojo = getRandomNumberInRange(0,255);
            int verde = getRandomNumberInRange(0,255);
            int azul = getRandomNumberInRange(0,255);
            Color micolor = new Color(rojo,verde,azul);
                misgraficos.setColor(micolor);
            
            int angulo = (int)(round(((int)numero/suma)*360));
            //System.out.println("quesito"+angulo);
            misgraficos.fillArc(0, 10, 380, 380, acontinuacion, angulo);
            acontinuacion += angulo;
        }
         misgraficos.setColor(Color.WHITE);
         misgraficos.fillArc(150, 160, 80, 80, 0, 360);
    }
    public static void main(String[] args) {
        JFrame marco = new JFrame("grafica");
        Graficaradialo mimarco = new Graficaradialo();
        marco.add(mimarco);
        marco.setSize(400,400);
        marco.setVisible(true);
        marco.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
    }
}



    
    
    

