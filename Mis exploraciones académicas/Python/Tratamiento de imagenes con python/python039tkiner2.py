from tkinter import *

def saluda():
    print("Has pulsado un boton")
    
marco = Frame(width=300,height=300)
marco.pack(padx=30,pady=30)


titulo = Label(marco,text="Programa agenda v0.1",fg="black",font=("Arial,Verdana,sans-serif",24))
titulo.pack(side=TOP)


autor = Label(marco,text="Juan José Galán",fg="grey",font=("Arial,Verdana,sans-serif",24))
autor.pack(side=TOP)


foto = PhotoImage(file="nelo4.png",width=100,height=100,)


textofoto = Label(marco,image=foto)
textofoto.pack(side=TOP)

boton = Button(marco,text="Pulsame",command=saluda)
boton.pack(side=TOP,padx=10,pady=10)



mainloop()
