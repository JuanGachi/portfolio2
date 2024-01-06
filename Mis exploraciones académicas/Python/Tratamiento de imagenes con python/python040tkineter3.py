from tkinter import *
import sqlite3 as lite
import sys

def guarda(nombre,telefono,email):
    ##me conecto a una base de datos llamada agenda
    conexion = lite.connect("agenda.db")

    ##Establezco un cursor para saber que punto de la base de datos voy a trabajar
    cursor = conexion.cursor()

    ##Le pido algo a la base de datos en lenguaje SQL
    cursor.execute("INSERT INTO contactos VALUES(NULL,'"+nombre+"','"+telefono+"','"+email+"');")

    conexion.commit()
def lee():
    print("voy a leer la base de datos")
    
    conexion = lite.connect("agenda.db")
    cursor = conexion.cursor()
    cursor.execute("SELECT * FROM contactos;")
    longaniza = ""
    datos = cursor.fetchall()
    for i in datos:
        longaniza += str(" nombre:"+i[1]+"\t telefono: "+i[2]+"\t email:"+i[3]+"\n")
    titulodevuelve.insert(INSERT,longaniza)
    

    
    
marco = Frame(width=300,height=300)
marco.pack(padx=30,pady=30)


titulo = Label(marco,text="Programa agenda v0.1",fg="black",font=("Arial,Verdana,sans-serif",24))
titulo.pack(side=TOP)
autor = Label(marco,text="Juan José Galán",fg="grey",font=("Arial,Verdana,sans-serif",16))
autor.pack(side=TOP)

foto = PhotoImage(file="nelo4.png",width=100,height=100,)
textofoto = Label(marco,image=foto)
textofoto.pack(side=TOP)

titulo = Label(marco,text="Introduce el nombre",fg="black",font=("Arial,Verdana,sans-serif",14))
titulo.pack(side=TOP)
camponombre = Entry(marco)
camponombre.pack(side=TOP)

titulo = Label(marco,text="Introuduce un telefono",fg="black",font=("Arial,Verdana,sans-serif",14))
titulo.pack(side=TOP)
campotelefono = Entry(marco)
campotelefono.pack(side=TOP)

titulo = Label(marco,text="Introduce un emial",fg="black",font=("Arial,Verdana,sans-serif",14))
titulo.pack(side=TOP)
campoemail = Entry(marco)
campoemail.pack(side=TOP)


boton = Button(marco,text="Guarda este archivo en la base de datos",command=lambda:guarda(camponombre.get(),campotelefono.get(),campoemail.get()))
boton.pack(side=TOP,padx=10,pady=10)

titulo = Label(marco,text="Dame los resultados de la base de datos",fg="black",font=("Arial,Verdana,sans-serif",14))
titulo.pack(side=TOP)

botondame = Button(marco,text="Devuelve los registros",command=lambda:lee())
botondame.pack(side=TOP,padx=10,pady=10)

titulodevuelve = Text(marco,height=30, width=60)
titulodevuelve.pack(side=TOP)

mainloop()
