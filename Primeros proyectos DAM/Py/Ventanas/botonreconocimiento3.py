import sqlite3
import speech_recognition as sr
import webbrowser
import tkinter as tk
from ttkthemes import ThemedTk
from tkinter import ttk
import os


# Conectar a la base de datos y obtener los datos de la tabla "opciones"
conn = sqlite3.connect("Usuarios.db")
cursor = conn.cursor()
cursor.execute("SELECT opcion, url FROM opciones WHERE url <> ''")
opciones = {row[0]: row[1] for row in cursor.fetchall()}
conn.close()

# Configuración del reconocimiento de voz
r = sr.Recognizer()
mic = sr.Microphone()

# Función para abrir la página web
def open_webpage(url):
    if url:
        try:
            webbrowser.open(url)
        except webbrowser.Error:
            open_url(url)


def open_url(url):
    os.system(f"start {url}")

# Función para reconocer la voz y abrir la página web
def recognize_webpage():
    try:
        with mic as source:
            r.adjust_for_ambient_noise(source)
            label.config(text="Di la opción que deseas abrir...")
            audio = r.listen(source)
        try:
            query = r.recognize_google(audio, language='es-ES')
        except sr.UnknownValueError:
            query = r.recognize_google(audio, language='ca-ES')

        print("Has dicho: " + query)

        for button in inner_frame.winfo_children():
            if isinstance(button, tk.Button):
                if button.cget("text").lower() in query.lower():
                    url = opciones[button.cget("text")]
                    open_url(url)
                    label.config(text="Abriendo " + button.cget("text"))
                    inner_frame.update_idletasks()  # Actualizar el tamaño del frame interno
                    return

        label.config(text="No te he entendido, por favor repite.")
    except sr.UnknownValueError:
        print("Lo siento, no he entendido lo que has dicho.")
        label.config(text="No te he entendido, por favor repite.")
    except sr.RequestError:
        print("Lo siento, ha ocurrido un error al procesar tu solicitud.")
        label.config(text="Ha ocurrido un error al procesar tu solicitud.")


# función para crear los botones
def create_buttons():
    # Crear botones para las opciones
    for opcion in opciones:
        button = tk.Button(inner_frame, text=opcion, command=lambda url=opciones[opcion]: open_webpage(url))
        button.pack(pady=5, ipadx=10, ipady=5)

# Configuración de la interfaz gráfica
root = ThemedTk(theme="equilux")
root.title("Reconocimiento de voz")
root.geometry("350x600+400+200")  
root.resizable(False, False)

# Configuración del frame
frame = ttk.Frame(root)
frame.pack(fill=tk.BOTH, expand=True)

# Configuraión del canvas y scrollbar
canvas = tk.Canvas(frame, width=360)
scrollbar = ttk.Scrollbar(frame, orient="vertical", command=canvas.yview)
canvas.configure(yscrollcommand=scrollbar.set)
scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
canvas.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)

# Frame interno para los widgets
inner_frame = ttk.Frame(canvas)
canvas.create_window(0, 0, window=inner_frame, anchor="nw")

# Etiqueta para mostrar el mensaje
label = ttk.Label(inner_frame, text="Selecciona una opción o busca por voz:", font=("Arial", 14))
label.pack(pady=20)

# Crear los botones
create_buttons()

# Botón para reconocer la voz y abrir la página web
voice_button = ttk.Button(inner_frame, text="Reconocer voz", command=recognize_webpage)
voice_button.pack(pady=20, ipadx=10, ipady=5)

# Configurar el tamaño del frame interno
inner_frame.update_idletasks()
canvas.config(scrollregion=canvas.bbox("all"))

root.mainloop()





    
