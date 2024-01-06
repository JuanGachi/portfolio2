from PIL import Image
import math
import os

# Función hacer las imagenes a blanco y negro
def umbralizar_imagen(imagen, umbral=128):
    pixeles = imagen.load()
    altura, anchura = imagen.size

    for x in range(0, anchura):
        for y in range(0, altura):
            rojo, verde, azul = pixeles[x, y]
            intensidad = math.floor((rojo + verde + azul) / 3)
            
            # Aplicar cambios
            if intensidad < umbral:
                color = 0  # Negro
            else:
                color = 255  # Blanco

            pixeles[x, y] = (color, color, color)
    
    return imagen

# Procesar todas las imágenes en una carpeta
carpeta = "carpeta_imagenes"
for raiz, directorios, archivos in os.walk(carpeta):
    for archivo in archivos:
        if archivo.lower().endswith((".png", ".jpg", ".jpeg")):
            ruta_archivo = os.path.join(raiz, archivo)
            imagen = Image.open(ruta_archivo)
            imagen_umbralizada = umbralizar_imagen(imagen)
            
            # Guardar imagenes
            nombre_archivo, extension = os.path.splitext(archivo)
            ruta_guardado = os.path.join(raiz, f"{nombre_archivo}_umbralizado{extension}")
            imagen_umbralizada.save(ruta_guardado)

            print(f"Imagen {ruta_archivo} umbralizada y guardada en {ruta_guardado}")
##Generación de Imágenes con Python + PIL - Para todas las imágenes de una carpeta (librería os, comando os.walk),
##convierte las imágenes a blanco y negro
##(cada pixel será o bien blanco o bien negro). No se pueden utilizar filtros predeterminados de PIL, OpenCV o librerías similares,
##el tratamiento debe realizarse editando la información de cada uno de los píxeles, con la librería PIL - Lo que se pregunta en
##esta parte del examen es la realización de una operación "Umbral (GIMP)" pero realizada en Python
## Deberemos de cambiar la carpeta_imagenes por la carpeta proporcionada por Jose Vicente en el examen. Import os es para recorrer la carpeta y los directorios.
