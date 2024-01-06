import os
from PIL import Image

# Obtener la lista de nombress de archivo en la carpeta "imagenes"
ruta_carpeta = "carpeta_imagenes"
nombres_archivos = os.listdir(ruta_carpeta)

# Iterar sobre la lista de nombres de archivo y procesar cada imagen
for nombre_archivo in nombres_archivos:
    # Construir la ruta completa al archivo
    ruta_archivo = os.path.join(ruta_carpeta, nombre_archivo)

    # abrir la imagen
    imagen = Image.open(ruta_archivo)
    pixeles = imagen.load()
    print(imagen.size)

    print(pixeles[0,0])

    altura = imagen.size[1]
    anchura = imagen.size[0]

    for x in range(0,anchura):
        for y in range(0,altura):
            rojo = pixeles[x,y][0]
            verde = pixeles[x,y][1]
            azul = pixeles[x,y][2]

            rojo = rojo
            verde = rojo
            azul = rojo

            pixeles[x,y] = (rojo,verde,azul)

    # Guardar la imagen modificad
    ruta_archivo_guardado = os.path.join(ruta_carpeta, "modificado_" + nombre_archivo)
    imagen.save(ruta_archivo_guardado)
