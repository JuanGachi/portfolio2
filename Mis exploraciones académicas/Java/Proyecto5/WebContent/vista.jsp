<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
   <%@ page import = "java.util.Date" %> 
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script
  src="https://code.jquery.com/jquery-3.6.1.js"
  integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
  crossorigin="anonymous"></script>
  <script>
  $(document).ready(function(){
	  $("#enviar").click(function(){
		$("#resultado").load("http://localhost:8080/Proyecto5/Controlador?nombre="+$("#nombre").val()+"&email="+$("#email").val()+"&telefono="+$("#telefono").val());  
	  })
	  
  })
  
  </script>

</head>
<body>
<%
	
    out.println("Hoy es:" + new Date());

%>
<br>
<!--  http://localhost:8080/Proyecto5/Controlador"> -->

	<input type="text" name="nombre" placeholder="Introduce tu nombre" id="nombre">
	<br><br>
	<input type="text" name="email" placeholder="Introduce tu email" id="email">
	<br><br>
	<input type="text" name="telefono" placeholder="Introduce tu telefono" id="telefono">
<br><br>
	<input type="submit" value="Enviar" id="enviar">
	<div id="resultado"></div>


</body>
</html>