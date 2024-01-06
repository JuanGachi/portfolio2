from PIL import Image

imagenvertical = Image.open("caras/vertical.png")
pixelesvertical = imagenvertical.load()

imagenhorizontal = Image.open("caras/horizontal.png")
pixeleshorizontal = imagenhorizontal.load()

imagendiagonal = Image.open("caras/diagonal.png")
pixelesdiagonal = imagendiagonal.load()

imagendiagonal2 = Image.open("caras/diagonal2.png")
pixelesdiagonal2 = imagendiagonal2.load()

imagen = Image.open("caras/caraestandard.jpg")
pixeles = imagen.load()

imagenresultado = Image.open("caras/resultadohorizontal.png")
pixelesresultado = imagenresultado.load()

altura = imagen.size[1]
anchura = imagen.size[0]

numeropixelesverticales = 0
numeropixeleshorizontales = 0
numeropixelesdiagonales = 0
numeropixelesdiagonales2 = 0
# Voy a asumir el pixel que esta en 0 //////////// VERTICAL /////////
for superx in range(0, anchura - 7):
    for supery in range(0, altura - 7):
        
        suma = 0
        valor = 0;
        for x in range(0, 7):
            for y in range(0, 7):
                if pixelesvertical[x, y][1] != 0:
                    valor = 0
                    valor = pixeles[superx + x, supery + y][0] - pixelesvertical[x, y][0]
                    suma += valor
        if abs(suma) < 800:
            pixelesresultado[superx + x, supery + y] = (0, 0, 0)
            numeropixelesverticales += 1
        else:
            pixelesresultado[superx + x, supery + y] = (255, 255, 255)
print("El numero de pixeles verticales es : "+str(numeropixelesverticales))
# Voy a asumir el pixel que esta en 0 //////////// VERTICAL /////////

# Voy a asumir el pixel que esta en 0 //////////// HORIZONTAL /////////
for superx in range(0, anchura - 7):
    for supery in range(0, altura - 7):
        
        suma = 0
        valor = 0;
        for x in range(0, 7):
            for y in range(0, 7):
                if pixeleshorizontal[x, y][1] != 0:
                    valor = 0
                    valor = pixeles[superx + x, supery + y][0] - pixeleshorizontal[x, y][0]
                    suma += valor
        if abs(suma) < 800:
            pixelesresultado[superx + x, supery + y] = (0, 0, 0)
            numeropixeleshorizontales += 1
        else:
            pixelesresultado[superx + x, supery + y] = (255, 255, 255)
print("El numero de pixeles horizontales es : "+str(numeropixeleshorizontales))
# Voy a asumir el pixel que esta en 0 //////////// HORIZONTAL /////////

# Voy a asumir el pixel que esta en 0 //////////// DIAOGNAL1 /////////
for superx in range(0, anchura - 7):
    for supery in range(0, altura - 7):
        
        suma = 0
        valor = 0;
        for x in range(0, 7):
            for y in range(0, 7):
                if pixelesdiagonal[x, y][1] != 0:
                    valor = 0
                    valor = pixeles[superx + x, supery + y][0] - pixelesdiagonal[x, y][0]
                    
                    suma += valor
        if abs(suma) < 800:
            pixelesresultado[superx + x, supery + y] = (0, 0, 0)
            numeropixelesdiagonales += 1
        else:
            pixelesresultado[superx + x, supery + y] = (255, 255, 255)
print("El numero de pixeles diaogonales es : "+str(numeropixelesdiagonales))
# Voy a asumir el pixel que esta en 0 //////////// DIAOGNAL1 /////////

# Voy a asumir el pixel que esta en 0 //////////// DIAGONAL2 /////////
for superx in range(0, anchura - 7):
    for supery in range(0, altura - 7):
        
        suma = 0
        valor = 0;
        for x in range(0, 7):
            for y in range(0, 7):
                if pixelesdiagonal2[x, y][1] != 0:
                    valor = 0
                    valor = pixeles[superx + x, supery + y][0] - pixelesdiagonal2[x, y][0]
                    suma += valor
        if abs(suma) < 800:
            pixelesresultado[superx + x, supery + y] = (0, 0, 0)
            numeropixelesdiagonales2 += 1
        else:
            pixelesresultado[superx + x, supery + y] = (255, 255, 255)
print("El numero de pixeles diagonales2 es : "+str(numeropixelesdiagonales2))
# Voy a asumir el pixel que esta en 0 //////////// DIAGONAL2 /////////



imagen.save("caras/caraestandardguardado1.jpg")
imagenresultado.save("caras/resultadohorizontal.png")
