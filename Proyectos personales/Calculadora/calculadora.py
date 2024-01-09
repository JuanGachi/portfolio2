# Importamos las librerías necesarias
import tkinter as tk
from tkinter import ttk

# Definimos la función para manejar los eventos de los botones
def on_click(button_text):
    if button_text == "=":
        try:
            # Evalúa y muestra el resultado
            result = eval(entry.get())
            entry.delete(0, tk.END)
            entry.insert(tk.END, str(result))
        except Exception:
            # Muestra error si la expresión no es válida
            entry.delete(0, tk.END)
            entry.insert(tk.END, "Error")
    elif button_text == "C":
        # Limpia la entrada
        entry.delete(0, tk.END)
    else:
        # Añade el texto del botón a la entrada
        entry.insert(tk.END, button_text)

# Crear la ventana principal
root = tk.Tk()
root.title("Calculadora")

# Establecer un estilo moderno y atractivo
style = ttk.Style()
style.theme_use("clam")  # Usando un tema más moderno

# Configurar estilos para botones y entrada
style.configure("TButton", font=("Segoe UI", 12), borderwidth=1)
style.configure("TEntry", font=("Segoe UI", 18), borderwidth=2)

# Crear el campo de entradaa
entry = ttk.Entry(root, width=20, justify='right')
entry.grid(row=0, column=0, columnspan=4, padx=10, pady=10)

# Definir botones
buttons = [
    ("7", 1, 0), ("8", 1, 1), ("9", 1, 2), ("C", 1, 3),
    ("4", 2, 0), ("5", 2, 1), ("6", 2, 2), ("/", 2, 3),
    ("1", 3, 0), ("2", 3, 1), ("3", 3, 2), ("*", 3, 3),
    ("0", 4, 0), ("-", 4, 1), ("+", 4, 2), ("=", 4, 3)
]

# Crear y colocar botones 
for (text, row, col) in buttons:
    button = ttk.Button(root, text=text, command=lambda text=text: on_click(text))
    button.grid(row=row, column=col, sticky="nsew", padx=5, pady=5)

# Configurar el redimensionamiento automático
for i in range(4):
    root.grid_columnconfigure(i, weight=1)
    root.grid_rowconfigure(i+1, weight=1)

# Iniciar el bucle principal de la aplicación
root.mainloop()

