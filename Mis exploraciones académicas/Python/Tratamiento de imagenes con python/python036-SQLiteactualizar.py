##Para poder trabajar con bases de datos
import sqlite3 as lite
import sys
##me conecto a una base de datos llamada agenda
conexion = lite.connect("agenda.db")

##Establezco un cursor para saber que punto de la base de datos voy a trabajar
cursor = conexion.cursor()

##Le pido algo a la base de datos en lenguaje SQL
cursor.execute("UPDATE contactos SET telefono = '123456';")

conexion.commit()

