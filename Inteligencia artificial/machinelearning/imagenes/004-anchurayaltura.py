from PIL import Image
import os

carpeta = "001-crudo"
carpetasalida = "002-procesadas"

# Crear carpeta de salida si no existe
if not os.path.exists(carpetasalida):
    os.makedirs(carpetasalida)

archivos = os.listdir(carpeta)

for archivo in archivos:
    imagen = os.path.join(carpeta, archivo)
    miimagen = Image.open(imagen)
    anchura = miimagen.width
    altura = miimagen.height

    # Determinar la caja para recortar basada en la relación de aspecto
    if anchura > altura:
        caja = (
            anchura/2 - altura/2,
            0,
            anchura/2 + altura/2,
            altura
        )
    else:
        caja = (
            0,
            altura/2 - anchura/2,
            anchura,
            altura/2 + anchura/2
        )

    # Recortar y redimensionar la imagen
    cortada = miimagen.crop(caja)
    escalada = cortada.resize((512, 512))
    escalada.save(os.path.join(carpetasalida, archivo))

