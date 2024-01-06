from PIL import Image
import math

imagenvertical = Image.open("caras/vertical.png")
pixelesvertical = imagenvertical.load()

imagen = Image.open("caras/caraestandard.jpg")
pixeles = imagen.load()

imagenresultado = Image.open("caras/resultado.png")
pixelesresultado = imagenresultado.load()

altura = imagen.size[1]
anchura = imagen.size[0]

##for x in range(0, anchura):
##    for y in range(0,altura):
##        for anchura in range(0,8):
##            for altura in range(0.8):

# Voy a asumir el pixel que esta en 0
for superx in range(0,255):
    for supery in range(0,255):
        suma = 0;
        for x in range(0,7):
            for y in range(0,7):
                if pixelesvertical[x,y][0] != 0:
                    valor = 0
                    if superx+x < anchura and supery+y < altura:
                        valor = pixeles[superx+x,supery+y][0]-pixelesvertical[x,y][0]

                    
                    suma += valor
            if abs(suma)< 700:
                pixelesresultado[superx+x,supery+y] = (0,0,0)
            else:
                pixelesresultado[superx+x,supery+y] = (255,255,255)




imagen.save("caras/caraestandardguardado1.jpg")
imagenresultado.save("caras/resultado.png")
