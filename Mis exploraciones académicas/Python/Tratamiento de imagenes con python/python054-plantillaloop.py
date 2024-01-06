import tkinter as tk

class Persona(object):
    def saluda():
        print("yo soy una persona")
        
class Aplicacion(object):
    def __init__(self,master):
        self.master = master
        #Este metodo se va a ejecutar una sola vez
        print("este es el metodo constructor")
        ## Desde el constructor quiero arrancar una vez el bucle
        self.master.after(1000,self.bucle)
    def bucle(self):
        #Este metodo se va a ejecutar de forma continua
        print("el progama ha arrancado y empezara a dar vueltas")
        #fps en 1000
        self.master.after(1000,self.bucle)

root = tk.Tk()
aplicacion = Aplicacion(root)
