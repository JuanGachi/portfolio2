package com.josevicentecarratala.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.Statement;

import com.mysql.jdbc.Driver;

/**
 * Servlet implementation class Controlador
 */
@WebServlet("/Controlador")
public class Controlador extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Controlador() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().println("tu registro se ha guardado en la base de datos");
		//response.getWriter().println("El nombre es: "+request.getParameter("nombre"));
		
			
		
	     try{
	          
	    	 Class.forName("com.mysql.cj.jdbc.Driver");
	           
	            System.out.println("Connection database...");
	            //ahora establezco la conexion
	            Connection conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/cursojava","aaa","aaa");
	            //preparo una peticion a la base de datos
	            Statement peticion = conexion.createStatement();
	            peticion.execute("INSERT INTO agenda VALUES (NULL,'"+request.getParameter("nombre")+"','"+request.getParameter("telefono")+"','"+request.getParameter("email")+"')");
	           
	           
	        }catch(Exception e){
	            e.printStackTrace();
	        }
	}  

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
