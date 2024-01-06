from PIL import Image

imagenvertical = Image.open("caras/vertical.png")
pixelesvertical = imagenvertical.load()

imagen = Image.open("caras/caraestandard.jpg")
pixeles = imagen.load()

imagenresultado = Image.open("caras/resultadohorizontal.png")
pixelesresultado = imagenresultado.load()

altura = imagen.size[1]
anchura = imagen.size[0]

numeropixelesverticales = 0
numeropixeleshorizontales = 0
numeropixelesdiagonales1 = 0
numeropixelesdiagonales2 = 0
# Voy a asumir el pixel que esta en 0
for superx in range(0, anchura - 7):
    for supery in range(0, altura - 7):
        
        suma = 0
        valor = 0;
        for x in range(0, 7):
            for y in range(0, 7):
                if pixelesvertical[x, y][0] != 0 and superx + x < anchura and supery + y < altura:
                    valor = pixeles[superx + x, supery + y][0] - pixelesvertical[x, y][0]
                    suma += valor
        if abs(suma) < 800:
            pixelesresultado[superx + x, supery + y] = (0, 0, 0)
            numeropixelesverticales += 1
        else:
            pixelesresultado[superx + x, supery + y] = (255, 255, 255)
print("El numero de pixeles verticales es : "+str(numeropixelesverticales))

imagen.save("caras/caraestandardguardado1.jpg")
imagenresultado.save("caras/resultadohorizontal.png")
