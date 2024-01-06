
package graficabbdd;
import java.awt.Graphics;
import java.awt.Graphics2D;
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;
import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

        

public class GraficaBBDD extends JPanel {
   
    
    @Override public void paint(Graphics g){
        super.paint(g);
        Graphics2D misgraficos = (Graphics2D) g;
        int basegrafica = 360;
        //misgraficos.fillOval(200, 20, 200, 200);
        misgraficos.drawLine(10, 10, 10, 360);                      // linea vertical
        misgraficos.drawLine(10, basegrafica, 360,basegrafica); 
        
        int[] barras = new int[]{ 100,300,200,200,100,200,50,200,25,50,100 };
         ////////// en primer lugar me conecto a la base de datos y saco datos
        String url = "jdbc:sqlite:C://Users/PC/Desktop/DAM/BASES DE DATOS/registros.db";
        Connection conn = null;
        try {
            String sql = "SELECT * FROM logmeses";
            conn = DriverManager.getConnection(url);
            Statement stmt  = conn.createStatement();
            ResultSet rs    = stmt.executeQuery(sql);
            int contador = 0;
            while (rs.next()) {
                
                System.out.println(rs.getInt("mes") + "\t" +
                                    rs.getString("numero"));
                
                //////////////////// cojo los datos de la base de datos y los meto en una matriz
                barras[contador] = Integer.parseInt(rs.getString("numero"))/10;
                contador++;
           }
            
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        
        String sql = "SELECT * FROM logmeses";
        //////// pinto los datos de la matriz en una grafica
        
        for (int i = 0;i<barras.length;i++){
            //Hecho por el profesor
            //int randomNum = ThreadLocalRandom.current().nextInt(10,300 + 1);
            
            //Hecho en casa
            //Random randomObjeto = new Random();
            //int randomNum = randomObjeto.nextInt(200);
            //System.out.println("Número random :" + randomNum);
            int randomNum = barras[i];
            misgraficos.fillRect(i*30+20, basegrafica-randomNum, 20, randomNum);                    //dibujo una primera barra
        }
    }   
        //misgraficos.drawRect(30, 260, 30, 100);                 // linea horizontal    
                     
        
        
        
        
    
   
    public static void main(String[] args) {
        
        JFrame marco = new JFrame("grafica");
        GraficaBBDD mimarco = new GraficaBBDD();
        marco.add(mimarco);
        marco.setSize(400,400);
        marco.setVisible(true);
        marco.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
        
    }
}
    

